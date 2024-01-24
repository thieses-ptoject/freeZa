import axios from "axios";
import config from "../../../../config.json";
import { useState, useEffect, useContext } from "react";
import TypeList from "./typeList";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const Type = () => {
  const [data, setData] = useState([]);
  navigation = useNavigate();
  const storage = secureLocalStorage.getItem("isAuth");
  useEffect(() => {
    if (storage === false) {
      navigation("/adminLogin");
    }
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/type/`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen overflow-y-scroll">
      <TypeList data={data} fetchData={fetchData} />
    </div>
  );
};

export default Type;
