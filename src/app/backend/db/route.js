import pool from "./lib/db";
export async function GET() {
  try {
    const result = await pool.query("INSERT INTO tests VALUES('hjhjh','hhjh')");
    return new Response(
      JSON.stringify({ message: 'Connexion réussie à PostgreSQL', time: result.rows }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    return new Response(
      JSON.stringify({ message: 'Erreur de connexion à la base de données', error: error.message }),
      { status: 500 }
    );
  }
}
