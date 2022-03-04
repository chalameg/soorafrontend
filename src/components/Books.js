import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="bg-gray-200 p-2">
      <div className="mx-auto flex">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
