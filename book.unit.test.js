const Book = require('../models/Book');

describe('Book Model Unit Tests', () => {
  test('should create book instance correctly', () => {
    const book = new Book({
      title: 'Unit Test',
      author: 'Tester',
      genre: 'Test',
      publishedYear: 2025
    });
    expect(book.title).toBe('Unit Test');
    expect(book.publishedYear).toBe(2025);
  });
});