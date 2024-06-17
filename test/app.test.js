const request = require('supertest');
const app = require('../src/app');

describe('GET /api/todos', () => {
    it('should return an empty array initially', async () => {
        const response = await request(app).get('/api/todos');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});

describe('POST /api/todos', () => {
    it('should create a new todo', async () => {
        const newTodo = { task: 'Test task' };
        const response = await request(app)
            .post('/api/todos')
            .send(newTodo)
            .set('Accept', 'application/json');
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(newTodo);
    });
});
