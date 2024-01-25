import Header from "./header";
import CategoryList from "./CategoryList";
import axios from "axios";
import config from "../../../../config.json";
import { useState, useEffect, useContext } from "react";
import AddCategory from "./addCategory";
import { AuthContext } from "../../../useContext/adminContext";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const CategoryType = () => {
  const [data, setData] = useState([]);
  const { Loginview } = useContext(AuthContext);
  const storage = secureLocalStorage.getItem("isAuth");
  console.log(storage);
  console.log(data);
  const navigation = useNavigate();
  useEffect(() => {
    if (storage === false) {
      navigation("/");
    }
  }, []);
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
    <div className="min-h-screen  ">
      <div className="">
        <AddCategory fetchData={fetchData} />
        <CategoryList data={data} fetchData={fetchData} />
      </div>
    </div>
  );
};

export default CategoryType;
