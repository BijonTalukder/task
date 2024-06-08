import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action);

      const { id, quantity } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
