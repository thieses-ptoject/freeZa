import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Admin from './components/Admin';
import { Layout } from './components/shared/layout';
import { Users } from './components/users';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <div>
              <h1>Hello World</h1>
            </div>
          ),
        },
        {
          path: 'admin',
          element: <Admin />,
        }, 
        {
          path:'users',
          element:<Users />

        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
