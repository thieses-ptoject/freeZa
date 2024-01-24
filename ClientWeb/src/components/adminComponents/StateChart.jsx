import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../client/config.json';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TypeChart = () => {
  const [types, setTypes] = useState([]);
  const [data, setData] = useState([]);

  const fetchAllTypes = async () => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/type/`);
      setTypes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStatistics = async (typeId) => {
    try {
      const response = await axios.get(`http://${config.ip}:3001/statistics/type/${typeId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return 0; // Return a default value if fetching fails
    }
  };

  useEffect(() => {
    fetchAllTypes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await Promise.all(
        types.map(async (type) => {
          const stat = await fetchStatistics(type.id);
          console.log(stat);
          return { name: type.type, pv: stat.stattype };
        })
      );
      setData(newData);
    };

    fetchData();
  }, [types]);

  return (
    <div className='h-[25rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 ml-5'>
      <strong className='text-gray-700 font-medium'>Types Statistics</strong>
      <div className='w-full mt-3 flex-1 text-xs'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart   width={500}
						height={300}
                        data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3  0 0" vertical={false} />
            <XAxis dataKey="name"/>
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#ff0000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
