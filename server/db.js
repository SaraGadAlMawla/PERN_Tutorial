const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "3B5a66b644",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
