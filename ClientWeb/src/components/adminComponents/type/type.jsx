import axios from "axios";
import config from "../../../../config.json";
import { useState, useEffect } from "react";
import TypeList from "./typeList";

const Type = () => {
  const [data, setData] = useState([]);
  console.log(data);
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
