import Books from "./Books";
import Carousel from "./Carousel";

const Home = ({books}) => {
  return (
    <div className="">
      <div>
        <Carousel />
        <Books books={books}></Books>
      </div>
    </div>
  );
};

export default Home;
