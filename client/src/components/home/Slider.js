import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { useRandomCategoriesQuery } from "../../store/services/categoryService";
import Spinner from "../Spinner";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Slider = () => {
  const { data, isFetching } = useRandomCategoriesQuery();

  console.log(data, isFetching);
  return isFetching ? (
    <div className="my-container h-[70vh] flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={{ delay: 1000 }}
      navigation
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      className="mySwiper"
    >
      {data?.categories.length > 0 &&
        data?.categories.map((cat, index) => {
          return (
            <div>
              <div></div>

              <SwiperSlide className="slide" key={cat._id}>
                <div className={`slide-img`}>
                  <img
                    src={`./images/slider/${index + 1}.jpg`}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 w-full h-full bg-black/40">
                  <div className="my-container h-[45vh] flex flex-col items-center justify-center">
                    <h1 className="text-white text-2xl font-semibold capitalize">
                      {cat.name}
                    </h1>
                    <div className="mt-4">
                      <Link
                        to={`/cat-products/${cat.name}`}
                        className="btn btn-banner text-lg"
                      >
                        browse collections
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
    </Swiper>
  );
};

export default Slider;
