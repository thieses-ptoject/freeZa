import React from 'react'
import  Dashboardstats  from './Dashboardstats.jsx'
import  {TypeChart}  from './StateChart.jsx'
import { StatusPie } from './StatusPie.jsx'
import {AppointChart} from './AppointChart.jsx'
const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
        <Dashboardstats/>
        <div className='flex flex-row gap-4 w-full'>
        <TypeChart/> 
        <StatusPie/>
        </div>
        <div className='flex flex-row gap-4 w-full'>
          <AppointChart/>
        </div>
    </div>
  )
}
export default Dashboard
