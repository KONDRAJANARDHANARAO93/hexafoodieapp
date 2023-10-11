import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminLogin from '../pages/AdminLogin';
import Logout from '../pages/Logout';
import AdminDashboard from '../pages/AdminDashboard'; // Adjust the import path accordingly

const isAuthenticated = true; // Replace with your actual authentication logic

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route
        path="/AdminDashboard"
        element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/AdminLogin" />}
      />
      <Route path="/logout" element={<Logout />} />
     
    </Routes>
  );
};

export default Routers;
