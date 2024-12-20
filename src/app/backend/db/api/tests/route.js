import pool from "../../lib/db";

export async function GET() {
  try {
    // Connexion explicite
    const client = await pool.connect();
    const result = await client.query("SELECT 1");
    client.release(); // Libère la connexion au pool

    return new Response(
      JSON.stringify({ message: 'Connexion réussie', data: result.rows }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return new Response(
      JSON.stringify({
        message: 'Erreur de connexion',
        error: error.stack || error.message || 'Erreur inconnue',
      }),
      { status: 500 }
    );
  }
}
