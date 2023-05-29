import { Virtual, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAllCategoriesQuery } from "../../store/services/categoryService";
import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";
import "swiper/css/autoplay";
const Categories = () => {
  const { data, isFetching } = useAllCategoriesQuery();
  let i = 0;
  return isFetching ? (
    <div className="flex flex-wrap -mx-4 mb-10">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-[20%] xl:w-2/12 p-4"
          key={item}
        >
          <Skeleton>
            <Thumbnail height="70px" />
          </Skeleton>
        </div>
      ))}
    </div>
  ) : (
    data?.categories.length > 0 && (
      <Swiper
        modules={[Virtual, Autoplay]}
        autoplay={{ delay: 1500 }}
        spaceBetween={35}
        slidesPerView={8}
        virtual
        className="w-full h-[70px] "
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {data.categories.map((category, index) => {
          if (i >= 15) {
            i = 1;
          } else {
            i++;
          }
          return (
            <SwiperSlide
              className="w-full overflow-hidden rounded-lg relative"
              key={index}
              virtualIndex={index}
            >
              <div className="w-full h-[100px] rounded-lg overflow-hidden">
                <img
                  src={`./images/slider/${i}.png`}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 w-full h-full bg-black/60 flex items-center justify-center p-4">
                <Link
                  to={`/cat-products/${category.name}`}
                  className="text-white text-base font-medium capitalize"
                >
                  {category.name}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    )
  );
  return <div>Categories</div>;
};

export default Categories;
