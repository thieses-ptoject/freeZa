import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../client/config.json';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  export const AppointChart = () => {
    const [data,setData]=useState([])
 const fetchApp= async()=>{
    try {
        const response = await axios.get (`http://${config.ip}:3001/statistics/appointment`)
        setData(response.data)
    } catch (error) {
        console.error('error fetching data:',error)
        
    }
 }  

 useEffect(()=>{
    fetchApp()
 },[])



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
            <Bar dataKey="value" fill="#ff4040" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
} 

