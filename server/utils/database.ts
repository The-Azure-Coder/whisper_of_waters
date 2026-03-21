import pg from 'pg'

const { Pool } = pg

let pool: pg.Pool | null = null

const getPool = () => {
  if (!pool) {
    const config = useRuntimeConfig()
    const dbUrl = config.databaseUrl || process.env.DATABASE_URL
    
    if (!dbUrl) {
      console.error('DATABASE_URL is not defined in runtimeConfig or process.env')
    }
    
    pool = new Pool({
      connectionString: dbUrl
    })
  }
  return pool
}

export const sql = async (query: string, params: any[] = []) => {
  const client = await getPool().connect()
  try {
    const result = await client.query(query, params)
    return result.rows
  } finally {
    client.release()
  }
}

export default {
  get pool() {
    return getPool()
  },
  query: (text: string, params: any[]) => getPool().query(text, params)
}
