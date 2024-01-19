import Header from "./header";
import TypeCategoryList from "./typeCategoryList";
import { useState } from "react";
import axios from "axios";
const CategoryType = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get();
  };
  return (
    <div className="h-screen flex">
      <div className="bg-red-100  w-64">sidebar</div>
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1">
          <TypeCategoryList />
        </div>
      </div>
    </div>
  );
};

export default CategoryType;
