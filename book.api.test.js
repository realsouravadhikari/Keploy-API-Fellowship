const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const request = require('supertest');
const app = require('../app');
const Book = require('../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
});

afterEach(async () => {
  await Book.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('API Tests - /api/books', () => {
  test('POST /api/books creates a book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'API Test', author: 'API Author', genre: 'Genre', publishedYear: 2024 });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Test');
  });

  test('GET /api/books returns books', async () => {
    await Book.create({ title: 'Book1', author: 'A', genre: 'F', publishedYear: 2023 });
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
});