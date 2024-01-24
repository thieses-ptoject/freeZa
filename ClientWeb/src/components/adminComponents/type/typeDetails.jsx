import React from "react";
import axios from "axios";
import config from "../../../../config.json";

const TypeDetails = (props) => {
  console.log(props);
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://${config.ip}:3001/type/${props.data.categoryId}/${props.data.id}`
      );
      props.fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between  p-4 mb-4 rounded-md shadow-md">
      <div className="flex items-center">
        <div>
          <p className="text-lg font-semibold">Name: {props.data.type}</p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="bg-darkRed text-white bg-red-300 font-semibold py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Delete Category
      </button>
    </div>
  );
};

export default TypeDetails;
