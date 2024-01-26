import React, { useState } from "react";
import app, { storage } from "../../../firebase.js"; // Import Firebase storage
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import config from "../../../../config.json";
import { FileInput, Label } from "flowbite-react";

const AddCategory = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [doneView, setDoneView] = useState(false);
  console.log(imageUrl);
  const handleNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleUpload = async () => {
    if (imageFile) {
      const storageInstance = getStorage(app); // Ensure you get the storage instance from your initialized app
      const storageRef = ref(
        storageInstance,
        `category_images/${imageFile.name}`
      );
      await uploadBytes(storageRef, imageFile);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      setDoneView(true);
    }
  };

  const handleSubmit = async (event) => {
    try {
      const reponse = axios.post(`http://${config.ip}:3001/category/add`, {
        name: categoryName,
        image: imageUrl,
      });
      props.fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg p-4 rounded-md w-[50%] ml-auto mr-auto">
      <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-gray-600">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 gap-17 flex items-center">
          <label
            htmlFor="categoryImage"
            className="block text-gray-600 mr-2 mb-1"
          >
            Category Image:
          </label>
          {/* <FileInput
            type="file"
            className=" hidden w-full p-2 border text-white border-gray-300 rounded-md "
          /> */}
          <div className="ml-5 mt-5 mb-5">
            <label className="relative  cursor-pointer bg-red-300 text-white rounded-lg py-2 px-4 overflow-hidden">
              <span className="absolute left-[-40px] top-0 right-0 bottom-0 z-10 bg-gradient-to-b "></span>
              <FileInput
                className="absolute inset-0 z-20 opacity-0 cursor-pointer"
                name="categoryImage"
                id="categoryImage"
                accept="image/*"
                onChange={handleImageChange}
                type="file"
              />

              <span className="z-30    text-sm">Select a logo</span>
            </label>
          </div>

          <button
            type="button"
            onClick={handleUpload}
            className="bg-red-300  h-9  text-sm  w-28  text-white  rounded-md ml-9 hover:bg-red-500 focus:outline-none "
          >
            Upload
          </button>
          {doneView && (
            <p className="ml-7 text-green-500 border-2 border-red-100 px-5 rounded-full bg-red-50 mt-2">
              done
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-red-300 float-right text-sm text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-800 focus:ring focus:ring-green-200"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
