const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Integration Test - MongoDB & Book Model', () => {
  it('saves and retrieves a book', async () => {
    const book = new Book({ title: 'Int Test', author: 'Int Author', genre: 'IT', publishedYear: 2021 });
    await book.save();
    const found = await Book.findOne({ title: 'Int Test' });
    expect(found.author).toBe('Int Author');
  });
});