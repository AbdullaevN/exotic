// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

 
const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProducts: (state, action) => {
        return action.payload; // Убедитесь, что полностью перезаписываете состояние
      },
      addProduct: (state, action) => {
        state.push(action.payload);
      },
      updateProduct: (state, action) => {
        const index = state.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      },
      removeProduct: (state, action) => {
        return state.filter(product => product.id !== action.payload);
      },
    },
  });
  


export const { setProducts, addProduct, updateProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
