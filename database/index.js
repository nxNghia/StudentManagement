const Pool = require('pg').Pool;

const devConfig = `postgres://postgres:xnauiagnenhugny@localhost:5432/itss`;
const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function poolDemo() {
    const now = await pool.query('SELECT NOW()');
    await pool.end();

    return now;
}

module.exports = {
    pool,
    poolDemo
};
