import React from "react";

const AddCategory = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-gray-600">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="categoryImage" className="block text-gray-600">
            Category Image URL:
          </label>
          <input
            type="text"
            id="categoryImage"
            name="categoryImage"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-800 focus:ring focus:ring-green-200"
        >
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
