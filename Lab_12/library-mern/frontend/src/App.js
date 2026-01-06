import React, { useEffect, useState } from "react";

export default function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    isbn: "",
    price: ""
  });

  const loadBooks = async () => {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    setBooks(data);
  };

  const addBook = async () => {
    await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    loadBooks();
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" });
    loadBooks();
  };

  const updateBook = async (id) => {
    const newTitle = prompt("Enter new title:");

    await fetch(`http://localhost:3000/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle }),
    });

    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Library Management System</h2>

      <div>
        <input
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Author"
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input
          placeholder="ISBN"
          onChange={(e) => setForm({ ...form, isbn: e.target.value })}
        />
        <input
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      <h3>Books List</h3>

      {books.map((b) => (
        <div
          key={b._id}
          style={{ border: "1px solid #ccc", padding: 10, marginTop: 10 }}
        >
          <p><b>{b.title}</b> by {b.author}</p>
          <p>ISBN: {b.isbn} | Price: ₹{b.price}</p>

          <button onClick={() => deleteBook(b._id)}>Delete</button>
          <button onClick={() => updateBook(b._id)}>Update</button>
        </div>
      ))}
    </div>
  );
}