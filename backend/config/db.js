const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'novogradko',
    host: 'database',
    database: 'novogradko',
    password: 'pass',
    port: '5432'
});

module.exports = pool;
