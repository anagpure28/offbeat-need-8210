import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import { AllProducts } from '../ProductPage/AllProducts';
import Product from '../ProductPage/Product';
import Login from './Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/allproducts" element={<AllProducts />}></Route>
        <Route path="/product/:id" element={<AllProducts />}></Route>
    </Routes>
  )
}

export default AllRoutes