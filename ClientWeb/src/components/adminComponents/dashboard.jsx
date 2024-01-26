import React, { useEffect } from 'react'
import  Dashboardstats  from './Dashboardstats.jsx'
import  {TypeChart}  from './StateChart.jsx'
import { StatusPie } from './StatusPie.jsx'
import {AppointChart} from './AppointChart.jsx'
import secureLocalStorage from "react-secure-storage"
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {

  return (
    <div className='flex flex-col gap-4'>
        <Dashboardstats/>
        <div className='flex flex-row gap-4 w-full'>
        <TypeChart/> 
        <StatusPie/>
        </div>
        <div className='flex flex-row gap-4 w-full'>
        <div className='mx-auto'>
          <AppointChart/>
        </div> 
        </div>
    </div>
  )
}
export default Dashboard
