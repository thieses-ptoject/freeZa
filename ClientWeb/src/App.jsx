// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/adminComponents/layout.jsx";
import Admin from "./components/adminComponents/Admin";
import Users from "./components/adminComponents/Users";
import Dashboard from "./components/adminComponents/dashboard.jsx";
import Claims from "./components/adminComponents/claims.jsx";
import SignIn from "./components/adminComponents/loginAdmin/SignIn";
import CategoryType from "./components/adminComponents/categoryType/category.jsx";
import Type from "./components/adminComponents/type/type.jsx";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
        <Route path='/'
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
        path="/claims/:id"
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
            <CategoryType />
          </Layout>
        }
      />
      <Route
        path="/types"
        element={
          <Layout>
            <Type />
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;
