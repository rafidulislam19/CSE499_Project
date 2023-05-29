import Categories from "../../components/home/Categories";
import Footer from "../../components/home/Footer";
import HomeProduct from "../../components/home/HomeProduct";
import Name from "../../components/home/Name";
import Nav from "../../components/home/Nav";
import Slider from "../../components/home/Slider";
import { useRandomCategoriesQuery } from "../../store/services/categoryService";

const Home = () => {
  const { data, isFetching } = useRandomCategoriesQuery();
  return (
    <>
      <Nav />
      <div className="my-container mt-20">
        <Categories />
      </div>
      <div style={{ display: "flex" }} className="mt-[15px]">
        <Name></Name>
        <Slider />
      </div>

      <div className="my-container mt-8">
        {!isFetching &&
          data?.categories?.length > 0 &&
          data?.categories.map((category) => (
            <HomeProduct category={category} key={category._id} />
          ))}
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};
export default Home;
