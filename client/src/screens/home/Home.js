import Categories from "../../components/home/Categories";
// import Footer from "../../components/home/Footer";
import Nav from "../../components/home/Nav";
import Slider from "../../components/home/Slider";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="mt-[1px]">
        <Slider />
      </div>
      <div className="my-container mt-10">
        <Categories />
      </div>
      {/* <div className="mt-10">
        <Footer />
      </div> */}
    </>
  );
};

export default Home;
