
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Layout from './components/adminComponents/layout.jsx';
import Admin from './components/adminComponents/Admin';
import Users from './components/adminComponents/users';
import Dashboard from './components/adminComponents/dashboard.jsx';
import Claims from './components/adminComponents/claims.jsx';
import SignIn from "./components/adminComponents/loginAdmin/SignIn"
import CategoryType from './components/adminComponents/categoryType/categoryType';
import './App.css'


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <div>
          <h1 className="text-red-600">Hello World</h1>
        </div> }
        />
        <Route path='/adminLogin'
        element= {
          <SignIn/>
        } 
        />
      <Route
        path="/admin"
        element={
          <Layout>
            <Admin />
          </Layout>
        }
      />
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/claims"
        element={
          <Layout>
            <Claims />
          </Layout>
        }
      /> 
      <Route 
      path="/category"
      element={
        <Layout>
          <CategoryType/>
        </Layout>
      }/>
    </Routes>
  </Router>
);
    
  

export default App;

