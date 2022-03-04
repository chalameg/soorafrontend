const Book = ({book}) => {
  return (
    <div className="bg-white m-2 p-2 lg:w-1/4">
            <h3>{book.title}</h3>
            <img src=""></img>
            <p>{book.description}</p>
        
    </div>
  )
}

export default Book