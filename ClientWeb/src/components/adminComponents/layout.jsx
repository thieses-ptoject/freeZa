import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar';
import Header from './categoryType/header';

 const Layout = ({children}) => {
    return(
      <div>
      <div className='flex flex-row h-screen w-screen '>

    <Sidebar/> 
    <div className='flex-1 overflow-y-auto'>
        <Header/>
    <div className='p-4 '>
    <div className="main-content">
      <Outlet />
    </div> 
    </div>

    {children}
    </div>
    </div>
    </div>

);
}; 
export default Layout