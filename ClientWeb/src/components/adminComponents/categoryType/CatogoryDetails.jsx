import React from "react";

const CatogoryDetails = (props) => {
  console.log(props.data);
  return (
    <div className="bg-pink-200 p-4 m-4 rounded-md shadow-md h-60">
      <div className="h-42">
        <img
          src={props.data.image}
          alt={props.data.name}
          className="max-w-full h-28 mb-4 rounded-md w-32 "
        />
        <p className="text-green-700 font-semibold">{props.data.name}</p>
      </div>
      <button className="bg-green-700 text-3xl w-32 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-800 focus:ring focus:ring-green-200">
        Delete
      </button>
    </div>
  );
};

export default CatogoryDetails;
