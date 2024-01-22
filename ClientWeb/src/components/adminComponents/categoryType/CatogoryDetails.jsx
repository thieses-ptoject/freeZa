import React, { useState } from "react";
import axios from "axios";
import config from "../../../../config.json";

const CategoryDetails = (props) => {
  const [view, setView] = useState(false);
  const [typeName, setTypeName] = useState("");
  console.log(typeName);
  const handleDelete = async () => {
    const response = await axios.delete(
      `http://${config.ip}:3001/category/remove/${props.data.id}`
    );
    props.fetchData();
  };

  const handleTypeView = () => {
    setView(!view);
  };

  const handleInsertType = async () => {
    try {
      const response = await axios.post(
        `http://${config.ip}:3001/type/${props.data.id}`,
        { type: typeName }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between  p-4 mb-4 rounded-md shadow-md">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src={props.data.image}
              alt={props.data.name}
              className="rounded-full h-12 w-12 object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-semibold w-40">
              Name: {props.data.name}
            </p>
          </div>
        </div>
        <button
          onClick={handleTypeView}
          className="bg-red-300 text-[12px] text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Insert Type
        </button>
        <button
          onClick={handleDelete}
          className="bg-darkRed text-white text-[12px] bg-red-300 font-semibold py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Delete Category
        </button>
      </div>
      {view && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-md shadow-md z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">Add Type</p>
            <div className="flex items-center">
              <input
                type="text"
                className="border p-2 mr-2"
                placeholder="Type Name"
                onChange={(e) => setTypeName(e.target.value)}
              />
              <button
                onClick={handleInsertType}
                className="bg-red-300 text-[12px] mr-2 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add
              </button>
              <button
                onClick={() => setView(false)}
                className="bg-red-300 text-[12px] text-white  font-semibold py-2 px-4 rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close Popup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
