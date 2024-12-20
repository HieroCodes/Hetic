import pool from "../../lib/db";
import { notifyNewPoint } from "../../socket/index.js";

// Route POST : Ajouter un point Wi-Fi
export async function POST(request) {
  try {
    const { ssid, location, longitude, latitude } = await request.json();

    const result = await pool.query(
      "INSERT INTO wifi_data (ssid, location, longitude, latitude) VALUES ($1, $2, $3, $4) RETURNING *",
      [ssid, location, longitude, latitude]
    );

    console.log("Notification pour un nouveau point Wi-Fi :", result.rows[0]);
    notifyNewPoint(result.rows[0]);


    return new Response(JSON.stringify(result.rows[0]), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error) {
    console.error("Erreur lors de l'ajout d'un point :", error);
    return new Response(
      JSON.stringify({ message: "Erreur", error: error.message }),
      { status: 500 }
    );
  }
}

// Route GET : Récupérer les points Wi-Fi
export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM wifi_data");
    if (result.rows.length > 0) {
      return new Response(JSON.stringify(result.rows), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    const response = await fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json");
    if (!response.ok) {
      throw new Error("API externe indisponible");
    }

    const wifiData = await response.json();

    const insertQuery = `
      INSERT INTO wifi_data (ssid, location, longitude, latitude)
      VALUES ($1, $2, $3, $4)
    `;

    for (const data of wifiData) {
      const { ssid, location, longitude, latitude } = data;
      await pool.query(insertQuery, [ssid, location, longitude, latitude]);
    }

    return new Response(JSON.stringify(wifiData), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données Wi-Fi :", error);
    return new Response(
      JSON.stringify({
        message: "Erreur lors de la récupération des données",
        error: error.message || "Erreur inconnue",
      }),
      { status: 500 }
    );
  }
}
