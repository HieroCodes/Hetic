import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Connexion réussie :", result.rows);
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  } finally {
    pool.end();
  }
}

testConnection();
