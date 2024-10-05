// src/pages/ProductList.jsx
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Загрузить продукты из localStorage
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.length === 0 ? (
          <li>No products available</li>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList; // Убедитесь, что здесь есть экспорт по умолчанию
