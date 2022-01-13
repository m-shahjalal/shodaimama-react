import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { productSlice } from './slices/ProductSlice';

export const store = configureStore({
	reducer: {
		products: productSlice.reducer,
		cart: cartSlice.reducer,
	},
});
