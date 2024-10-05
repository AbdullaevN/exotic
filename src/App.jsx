import React from 'react';
import AdminDashboard from './pages/AdminDashboard';
import ProductList from './pages/ProductList';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const products = useSelector((state) => state.products);

  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/products" element={<ProductList products={products} />} />
      <Route path="/" element={<ProductList products={products} />} />
    </Routes>
  );
};

export default App;
