import Books from "./Book/Books";

const Home = ({books}) => {
  return (
    <div className="">
      <div>
        <div className="container mx-auto my-4 bg-black text-white">
          <h1>Carousel</h1>
        </div>
        <Books books={books}></Books>
      </div>
    </div>
  );
};

export default Home;
