import React from "react";
import CatogoryDetails from "./CatogoryDetails";

const CategoryList = (props) => {
  return (
    <div className="flex flex-wrap ">
      {props.data.map((element, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8"
        >
          <CatogoryDetails data={element} />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
