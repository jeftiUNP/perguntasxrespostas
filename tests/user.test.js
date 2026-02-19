const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/config/prisma');

describe('GET /api/users', () => {
  it('should return empty array initially', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });
});