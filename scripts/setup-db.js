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
  const adminPool = new pg.Pool({ 
    connectionString: baseConnection,
    ssl: { rejectUnauthorized: false }
  });
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
  const pool = new pg.Pool({ 
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false }
  });
  const client = await pool.connect();
  
  try {
    const migrations = [
      '../database/schema.sql',
      '../database/migration_v2.sql',
      '../database/migration_v3.sql',
      '../database/migration_v4.sql',
      '../database/migration_v5.sql'
    ];

    for (const migration of migrations) {
      const migrationPath = path.join(__dirname, migration);
      if (fs.existsSync(migrationPath)) {
        console.log(`Executing ${migration}...`);
        const migrationSql = fs.readFileSync(migrationPath, 'utf8');
        await client.query(migrationSql);
      } else {
        console.warn(`Migration file not found: ${migrationPath}`);
      }
    }
    console.log('Database setup and migrations successful!');
  } catch (err) {
    console.error('Error setting up database:', err.message);
  } finally {
    client.release();
    await pool.end();
  }
}

setup();
