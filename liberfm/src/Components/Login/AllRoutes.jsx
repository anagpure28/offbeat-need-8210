import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../HomePage/Home';
import { AllProducts } from '../ProductPage/AllProducts';
import Product from '../ProductPage/Product';
import Simple from '../ProductPage/SingleProductPage';
import Login from './Login';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/allproducts" element={<AllProducts />}></Route>
        <Route path="/products/:id" element={<Simple />}></Route>
    </Routes>
  )
}

export default AllRoutes