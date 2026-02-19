// src/config/loadEnv.js
const path = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
require('dotenv').config({ path });
console.log(`[dotenv] Loaded environment from ${path}`);