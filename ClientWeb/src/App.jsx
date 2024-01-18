import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Admin from './components/admin/Admin';
// import SignIn from './components/admin/loginAdmin/SignIn';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1 className='text-red-600'>Hello World</h1>
        </div>
      ),
    },
    {
      path: "admin",
      element: <Admin/>,
    },
    // {
    //   path: "adminLogin",
    //   element: <SignIn/>,
    // },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />

      
    </>
  )
}

export default App
