// scripts/createTestDB.js
const mysql = require('mysql2/promise');
require('dotenv').config({ path: '.env' }); // dev DB for initial connection

async function createTestDB() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS testdb_test`);
  await connection.end();
  console.log('✅ Test database ready');
}

createTestDB().catch(err => {
  console.error(err);
  process.exit(1);
});