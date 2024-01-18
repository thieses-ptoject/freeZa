import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  

  return (
    <>
    <Routes>
    
      <Route path="/" element ={<div> <h1>Hello World</h1>  </div>}  />
      <Route path="admin" element ={<Admin/> }/> 

      </Routes>

      
    </>
  )
}

export default App
