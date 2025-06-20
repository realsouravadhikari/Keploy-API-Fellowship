import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = "http://localhost:5000/api/books";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchBooks = async () => {
    const res = await axios.get(API);
    setBooks(res.data);
  };

  const addBook = async () => {
    await axios.post(API, { title });
    setTitle('');
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Books</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addBook}>Add Book</button>
      <ul>
        {books.map(b => <li key={b._id}>{b.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
