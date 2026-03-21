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

async function runMigration() {
  const args = process.argv.slice(2);
  const migrationFile = args[0] || 'database/migration_v2.sql';
  const migrationPath = path.resolve(__dirname, '..', migrationFile);

  if (!fs.existsSync(migrationPath)) {
    console.error(`Migration file not found: ${migrationPath}`);
    process.exit(1);
  }

  console.log(`Connecting to database...`);
  const pool = new pg.Pool({ 
    connectionString: databaseUrl,
    ssl: {
        rejectUnauthorized: false
    }
  });
  const client = await pool.connect();
  
  try {
    console.log(`Executing ${migrationFile}...`);
    const migrationSql = fs.readFileSync(migrationPath, 'utf8');
    
    await client.query(migrationSql);
    console.log(`Migration ${migrationFile} successful! Schema updated.`);
  } catch (err) {
    console.error('Error running migration:', err.message);
    if (err.message.includes('already exists')) {
        console.log('Note: Migration appears to have been applied already.');
    } else {
        process.exit(1);
    }
  } finally {
    client.release();
    await pool.end();
  }
}

runMigration();
