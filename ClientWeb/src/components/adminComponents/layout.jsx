import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return(
    <div className="app-container">
    <div>sidebar</div>
    <div className="main-content">
      <Outlet /> {/* This will render the nested routes */}
    </div>
  </div>
);
};