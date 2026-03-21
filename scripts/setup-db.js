import pg from 'pg';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Very basic .env reader since we don't have dotenv
const envFile = fs.readFileSync(path.join(__dirname, '../.env'), 'utf8');
const env = Object.fromEntries(
  envFile.split('\n')
    .filter(line => line && !line.startsWith('#'))
    .map(line => line.split('=').map(part => part.trim()))
);

const databaseUrl = env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL not found in .env');
  process.exit(1);
}

// Extract base connection string (to postgres) to create DB if needed
const dbNameMatch = databaseUrl.match(/\/([^\/\?]+)(\?.*)?$/);
const dbName = dbNameMatch ? dbNameMatch[1] : null;
const baseConnection = databaseUrl.replace(/\/[^\/\?]+(\?.*)?$/, '/postgres$1');

async function setup() {
  console.log(`Connecting to Postgres to ensure ${dbName} exists...`);
  const adminPool = new pg.Pool({ connectionString: baseConnection });
  const adminClient = await adminPool.connect();
  
  try {
    const res = await adminClient.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
    if (res.rowCount === 0) {
      console.log(`Creating database ${dbName}...`);
      await adminClient.query(`CREATE DATABASE ${dbName}`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
  } catch (err) {
    console.warn('Could not check/create database (maybe already exists or no permission):', err.message);
  } finally {
    adminClient.release();
    await adminPool.end();
  }

  console.log(`Connecting to ${dbName}...`);
  const pool = new pg.Pool({ connectionString: databaseUrl });
  const client = await pool.connect();
  
  try {
    console.log('Executing schema.sql...');
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    await client.query(schemaSql);
    console.log('Database setup successful!');
  } catch (err) {
    console.error('Error setting up database:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

setup();
