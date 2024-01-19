import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Admin from "./components/adminComponents/Admin"
// import SignIn from './components/admin/loginAdmin/SignIn';
import SignIn from "./components/adminComponents/loginAdmin/SignIn"
import CategoryType from './components/adminComponents/categoryType/categoryType';

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
    {
      path: "adminLogin",
      element: <SignIn/>,
    },
    {
      path: "category",
      element: <CategoryType/>
    }
  ]);

  return (
    <>
    
      <RouterProvider router={router} />

      
    </>
  )
}

export default App
