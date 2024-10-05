// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Загрузить продукты из localStorage при монтировании компонента
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    // Сохранять продукты в localStorage при каждом обновлении состояния
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = () => {
    if (editIndex !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editIndex ? { ...product, ...newProduct } : product
      );
      setProducts(updatedProducts);
      setEditIndex(null); // сбросить индекс редактирования
    } else {
      const newProductData = { id: Date.now(), ...newProduct };
      setProducts([...products, newProductData]);
    }
    console.log(products); // Добавьте этот лог
    setNewProduct({ name: '', price: '' }); // сброс формы
  };
  

  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>{editIndex !== null ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <button onClick={handleAddProduct}>{editIndex !== null ? 'Update Product' : 'Add Product'}</button>

      <h2>Product List</h2>
      <Link to="/products">View Products</Link>

      <ProductList products={products} /> {/* Передаем продукты в ProductList */}
    </div>
  );
};

export default AdminDashboard;
