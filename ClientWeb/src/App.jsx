import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import  Admin from "./admin/src/App"
import ECommerce from './admin/src/./pages/Dashboard/ECommerce';
import SignIn from './admin/src/./pages/Authentication/SignIn';
import SignUp from './admin/src/./pages/Authentication/SignUp';
import Loader from './admin/src/./common/Loader';
import routes from './admin/src/./routes';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      path: "admin",
      element: <Admin/>,
    },
  ]);

  return (
    <>
    
      <RouterProvider router={router} />

      
    </>
  )
}

export default App
