import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar';

 const Layout = ({children}) => {
    return(
      <div className='flex flex-row h-screen w-screen overflow-hidden'>
    
    <Sidebar/> 
    <div className='flex-1'>
      <div>header</div>
    <div className='p-4'>
    <div className="main-content">
      <Outlet />
    </div> 
    </div>
    
    {children}
    </div>
    </div>
  
);
}; 
export default Layout 