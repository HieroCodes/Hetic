import pool from "../../../lib/db";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const offset = (page - 1) * limit;

    const result = await pool.query(
      "SELECT * FROM wifi_data ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset]
    );

    return new Response(JSON.stringify(result.rows), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Erreur lors de la pagination :", error);
    return new Response(
      JSON.stringify({ message: "Erreur", error: error.message }),
      { status: 500 }
    );
  }
}
