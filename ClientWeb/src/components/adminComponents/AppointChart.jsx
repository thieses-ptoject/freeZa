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



  return (
    <div>AppointChart</div>
  )
} 

