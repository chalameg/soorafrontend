import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = ({ books }) => {
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const book = books.find((p) => p.id.toString() === bookId);
  return (
    <div className="bg-white m-2 p-4 ">
      <h1>{book.title}</h1>
      <div className="h-60">
        <img className="hover:shadow-lg h-full" src={book.image} alt=""></img>
      </div>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
