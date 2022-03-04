import Books from "./Books";

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
