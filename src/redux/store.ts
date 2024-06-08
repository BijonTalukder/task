import  counterSlice  from './featare/Users/counter.slice';
import  cartSlice  from './featare/Cart/cart.slice';
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./API/baseApi";

export const store = configureStore({
  reducer: {
    counterSlice,
    cartSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
