const Book = ({book}) => {
  return (
    <div className="bg-white m-2 p-4 ">
            <h1>{book.title}</h1>
            <div className="h-60">
            <img className="hover:shadow-lg h-full" src={book.image} alt=""></img>
            </div>
            <p>{book.description}</p>
        
    </div>
  )
}

export default Book