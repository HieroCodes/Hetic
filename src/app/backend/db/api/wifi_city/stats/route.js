import pool from "../../../lib/db";

export async function GET() {
  try {
    const totalResult = await pool.query("SELECT COUNT(*) AS total FROM wifi_data");
    const ssidStats = await pool.query(
      "SELECT ssid, COUNT(*) AS count FROM wifi_data GROUP BY ssid ORDER BY count DESC"
    );

    return new Response(
      JSON.stringify({
        total: totalResult.rows[0].total,
        byProvider: ssidStats.rows,
      }),
      { headers: { "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques :", error);
    return new Response(
      JSON.stringify({ message: "Erreur", error: error.message }),
      { status: 500 }
    );
  }
}
