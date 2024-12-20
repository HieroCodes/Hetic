import pool from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");

    if (location) {
      const result = await pool.query(
        "SELECT * FROM wifi_data WHERE location ILIKE $1",
        [`%${location}%`]
      );
      return new Response(JSON.stringify(result.rows), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    return new Response(JSON.stringify({ message: "Aucun paramètre fourni" }), {
      status: 400,
    });
  } catch (error) {
    console.error("Erreur lors du filtrage :", error);
    return new Response(
      JSON.stringify({ message: "Erreur", error: error.message }),
      { status: 500 }
    );
  }
}
