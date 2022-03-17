import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="bg-gray-200 p-2 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
