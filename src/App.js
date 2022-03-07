import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useState, useEffect } from "react";
import Books from "./components/Books";
import Blog from "./components/Blog";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetchBooks();

      setBooks(booksFromServer);
    };

    getBooks();
    // setPageName(params)
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books");

    const data = await res.json();

    return data;
  };

  return (
    <BrowserRouter>
      <div className="">
            <Header/>

            <Routes>
              <Route path="/" element={<Home books={books}/>} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/books" element={<Books books={books}/>} />
              <Route path="/about" element={<About />} />
            </Routes>
        {/* <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          </div>
        </main> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
