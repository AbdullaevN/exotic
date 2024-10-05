import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import { addProduct, setProducts, updateProduct, removeProduct } from '../slices/productSlice';
import { ChevronDownIcon } from '@heroicons/react/solid'; // Импорт иконки для выбора страны
import { Switch } from '@headlessui/react'; // Импорт компонента Switch из Headless UI
import { Field, Label } from '@headlessui/react'; // Импорт компонентов Field и Label из Headless UI

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [agreed, setAgreed] = useState(false); // Состояние для переключателя согласия

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    console.log('Loaded products from localStorage in AdminDashboard:', savedProducts); // проверка, загружаются ли продукты
    dispatch(setProducts(savedProducts));
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      console.log('Saving products to localStorage:', products); // проверка сохранения
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);
  
  

  const handleAddProduct = () => {
    if (editIndex !== null) {
      const updatedProduct = { ...newProduct, id: products[editIndex].id };
      dispatch(updateProduct(updatedProduct));
      setEditIndex(null); // сбросить индекс редактирования
    } else {
      const newProductData = { id: Date.now(), ...newProduct };
      dispatch(addProduct(newProductData));
    }
    setNewProduct({ name: '', price: '' }); // сброс формы
  };

  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
  };

  const handleDeleteProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="flex flex-col items-center p-5">
       <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-4">{editIndex !== null ? 'Измените продукт' : 'Добавьте продукт'}</h2>
        <input
          type="text"
          placeholder="Название продукта"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <input
          type="number"
          placeholder="Цена продукта"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {editIndex !== null ? 'Обновить' : 'Добавить'}
        </button>
      </div>

      <Link to="/products" className="text-blue-500 hover:underline mb-4">
        Посмотреть список 
      </Link>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Список продуктов</h2>

      <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default AdminDashboard;
