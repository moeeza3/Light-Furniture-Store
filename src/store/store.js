import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slices/commonSlice';
import apiSlice from './slices/apiSlice';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';
export const store = configureStore({ reducer:{
       api:apiSlice,
       common:commonSlice,
       cart:cartSlice,
       filter:filterSlice,
}})