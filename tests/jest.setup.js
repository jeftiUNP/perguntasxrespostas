require('../src/config/loadEnv');

const prisma = require('../src/config/prisma');
const { execSync } = require('child_process');

beforeAll(async () => {
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  await prisma.user.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});