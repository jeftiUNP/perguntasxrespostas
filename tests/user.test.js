const request = require('supertest');
const app = require('../src/app');
const userService = require('../src/services/userService');

jest.mock('../src/services/userService');

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const fakeUsers = [
      { id: 1, name: 'John', email: 'john@email.com' }
    ];

    userService.getAllUsers.mockResolvedValue(fakeUsers);

    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(fakeUsers);
  });

  it('should return 500 if service fails', async () => {
    userService.getAllUsers.mockRejectedValue(new Error('DB Error'));

    const response = await request(app).get('/api/users');

    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty('error');
  });
});
