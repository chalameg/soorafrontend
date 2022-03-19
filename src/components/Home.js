import Books from "./Book/Books";

const Home = ({books}) => {
  return (
    <div className="">
      <div>
        
        <Books books={books}></Books>
      </div>
    </div>
  );
};

export default Home;
