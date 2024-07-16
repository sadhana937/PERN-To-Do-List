import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: "postgres",
    password: "rainbow",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

export default pool;