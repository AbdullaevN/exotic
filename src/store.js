// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/productSlice"; // Убедитесь, что путь правильный

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.subscribe(() => {
    const state = store.getState();
    
    // Проверяем, что продукты не пусты и сохраняем в localStorage
    if (state.products.length > 0) {
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  });

export default store;
