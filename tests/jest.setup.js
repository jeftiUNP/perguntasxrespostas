// jest.setup.js
require('../src/config/loadEnv'); // loads .env or .env.test

const prisma = require('../src/config/prisma');
const { execSync } = require('child_process');

beforeAll(async () => {
  // Deploy migrations to the test database
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });

  // Clean tables
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});