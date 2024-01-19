import Header from "./header";
import CategoryList from "./CategoryList";
import axios from "axios";
import config from "../../../../config.json";
import { useState, useEffect } from "react";
import AddCategory from "./addCategory";

const CategoryType = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/category`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 overflow-y-scroll">
      <div className="">
        <AddCategory />
        <CategoryList data={data} />
      </div>
    </div>
  );
};

export default CategoryType;
