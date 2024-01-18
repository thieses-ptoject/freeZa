import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Admin from './components/Admin';

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
