import Header from "./components/Nav/Header";
import Footer from "./components/Nav/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Other/About";
import { useState, useEffect } from "react";
import Books from "./components/Book/Books";
import Blog from "./components/Book/Blog";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import BookDetails from "./components/Book/BookDetails";

function App() {
  const user = false;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks();

      setBooks(booksFromServer);
    };

    getBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books");

    const data = await res.json();

    return data;
  };

  return (
    <BrowserRouter>
      <div className="bg-bodyColor font-EBGaramond">
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookDetails books={books} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
