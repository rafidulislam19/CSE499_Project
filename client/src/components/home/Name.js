import React from "react";
import { useAllCategoriesQuery } from "../../store/services/categoryService";
import { Link } from "react-router-dom";
import "./Name.css";

const Name = () => {
  const { data } = useAllCategoriesQuery();

  console.log(data);

  return (
    <div className="sidebar">
      <div className="scrollBox w-full h-[45vh]">
        <div className="scrollBox-inner">
          {data?.categories.length > 0 &&
            data?.categories.map((cat, index) => {
              return (
                <div className="mt-4 mb-4">
                  <Link to={`/cat-products/${cat.name}`}>
                    <p>{cat.name}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Name;
