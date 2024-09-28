import { configureStore } from '@reduxjs/toolkit';
import createSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer:{
    cart: createSlice

  },
});


