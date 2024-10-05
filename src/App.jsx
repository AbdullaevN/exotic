// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import ProductList from './pages/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard onAddProduct={setProducts} />} />
      <Route path="/products" element={<ProductList products={products} />} />
    </Routes>
  );
};

export default App;
