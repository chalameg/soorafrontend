import { Link } from "react-router-dom"

const Book = ({book}) => {
  return (
<Link to={`/books/${book.id}`}>
      <div className="bg-white m-2 p-4 ">
            <h1>{book.title}</h1>
            <div className="h-60">
            <img className="hover:shadow-lg h-full" src={book.image} alt=""></img>
            </div>
            <p>{book.description}</p>
        
    </div>
    </Link>
  )
}

export default Book