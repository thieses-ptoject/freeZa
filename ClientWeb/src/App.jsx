// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/admin/layout.jsx';
import Admin from './components/admin/Admin';
import Users from './components/admin/Users';
import Dashboard from './components/admin/dashboard.jsx';
import Claims from './components/admin/claims.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <div>
          <h1 className="text-red-600">Hello World</h1>
        </div>
      } />
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
    </Routes>
  </Router>
);

export default App;

