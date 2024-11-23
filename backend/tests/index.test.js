const request = require('supertest');
const { app } = require('../api/index'); 

describe('GET /api/hello', () => {
    it('should return a message', async () => {
        const res = await request(app).get('/api/hello');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello from Node.js API!');
    });
});