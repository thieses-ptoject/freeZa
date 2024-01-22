import React from "react";
import TypeDetails from "./typeDetails";

const TypeList = (props) => {
  return (
    <div className="flex flex-wrap">
      {props.data.map((element, key) => (
        <div
          key={key}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8"
        >
          <TypeDetails data={element} fetchData={props.fetchData} />
        </div>
      ))}
    </div>
  );
};

export default TypeList;
