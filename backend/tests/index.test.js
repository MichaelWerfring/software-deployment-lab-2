const request = require('supertest');
const app = require('../src/index'); 

describe('GET /', () => {
    it('responds with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

describe('GET /users', () => {
    it('returns all Users', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toBe("Bob"); 
        expect(response.body[1]).toBe("Joe"); 
        expect(response.body[2]).toBe("John"); 
    });
});

describe('GET /users/Bob', () => {
    it('returns all Users', async () => {
        const response = await request(app).get('/users/Bob');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('User Bob found!');
    });
});

describe('GET /users/Jane', () => {
    it('returns all Users', async () => {
        const response = await request(app).get('/users/Jane');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('User Jane was not found!');
    });
});