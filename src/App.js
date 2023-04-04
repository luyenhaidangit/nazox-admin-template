import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import DashBoard from './pages/DashBoard';
import ProductCategoy from './pages/ProductCategory/ProductCategoy';
import LayoutAuthentication from './layouts/LayoutAuthentication';
import Login from './pages/Authentication/Login';
import { ToastContainer } from 'react-toastify';
import ProductCategoryCreate from './pages/ProductCategory/ProductCategoryCreate';
import ProductCategoryEdit from './pages/ProductCategory/ProductCategoryEdit';
import PrivateRoute from './components/Routers/PrivateRoute';
// import PrivateRoute from './components/Routers/PrivateRoute';

function App() {
  // const isAuthenticated = !!localStorage.getItem('token');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path='product-categories' element={<ProductCategoy />} />
            <Route path='product-categories/create' element={<ProductCategoryCreate />} />
          </Route>
          <Route exact path='/' element={<DashBoard />} />
        </Route>

        <Route path='/dang-nhap' element={<LayoutAuthentication />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
