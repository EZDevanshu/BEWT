import { useEffect, useState } from "react";
import axios from "axios";

const API = "/api/books";

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [bookPrice, setBookPrice] = useState("");

  // Load books
  const loadBooks = async () => {
    try {
      const res = await axios.get(API);
      setBooks(res.data);
    } catch (err) {
      console.error(err);
      alert("Backend not connected");
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // Add book
  const addBook = async () => {
    if (!bookName || !bookPrice) {
      alert("Please fill all fields");
      return;
    }

    await axios.post(API, {
      BookName: bookName,
      BookPrice: Number(bookPrice),
    });

    setBookName("");
    setBookPrice("");
    loadBooks();
  };

  // Delete book
  const deleteBook = async (id) => {
    await axios.delete(`${API}/${id}`);
    loadBooks();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📚 Library Management System</h2>

      {/* Add Book Card */}
      <div className="card shadow p-4 mb-4">
        <h5>Add New Book</h5>

        <div className="row g-3">
          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={bookPrice}
              onChange={(e) => setBookPrice(e.target.value)}
            />
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary w-100" onClick={addBook}>
              ➕ Add Book
            </button>
          </div>
        </div>
      </div>

      {/* Books List */}
      <div className="card shadow p-4">
        <h5>Available Books</h5>

        {books.length === 0 && (
          <p className="text-muted">No books found.</p>
        )}

        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Price (₹)</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.BookName}</td>
                <td>{book.BookPrice}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteBook(book._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
