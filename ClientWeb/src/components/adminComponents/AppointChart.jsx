import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../../../client/config.json';
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';

  export const AppointChart = () => {
    const [data,setData]=useState([])
    const RADIAN = Math.PI / 180
    const COLORS = ['#ff7676', '#809c13']
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5
      const x = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy + radius * Math.sin(-midAngle * RADIAN)
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      )
    }
    
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
    <div className=' w-[35rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col mr-5'>
    <strong className='text-gray-700 font-medium'> Appointments Statistics</strong>
    <div className='w-full mt-3 flex-1 text-xs'>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={105}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>



        </ResponsiveContainer>
        </div>
        </div>

    
  )
} 

