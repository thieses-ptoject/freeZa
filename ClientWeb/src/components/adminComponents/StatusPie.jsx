import React from 'react'
import { useState,useEffect } from 'react'
import config from '../../../../client/config.json'; 
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';
import axios from 'axios';


export const StatusPie = () => {
    const [data,setData]=useState([]) 

    const RADIAN = Math.PI / 180
const COLORS = ['#ff7676', '#ff0000', '#809c13']

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

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://${config.ip}:3001/statistics/status`);
            setData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
 
 
 
 
    return (
        <div className=' w-[20rem] h-[25rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col mr-5'>
        <strong className='text-gray-700 font-medium'> Status Statistics</strong>
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
