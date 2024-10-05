// src/pages/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={product.id} className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <div>
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-lg hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                className="bg-red-500 text-white font-bold py-1 px-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductList;
