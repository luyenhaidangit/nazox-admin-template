import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import DashBoard from './pages/DashBoard';
import ProductCategoy from './pages/ProductCategory/ProductCategoy';
import LayoutAuthentication from './layouts/LayoutAuthentication';
import Login from './pages/Authentication/Login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DashBoard />} />
        </Route>
        <Route path='/product-category' element={<Layout />}>
          <Route index element={<ProductCategoy />} />
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
