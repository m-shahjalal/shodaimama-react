import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	single: {},
	isLoading: true,
	isError: false,
	errorMessage: null,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		return data;
	} catch (error) {
		return error.message;
	}
});

export const fetchSingeProducts = createAsyncThunk(
	'fetchSingeProducts',
	async (id, { rejectWithValue }) => {
		try {
			const response = await fetch('/api/products');
			const data = await response.json();
			if (!data.name) throw new Error('not found');
			return data;
		} catch (error) {
			return error.message;
		}
	}
);

export const productSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		clearSingle: (state) => {
			state.single = null;
		},
	},
	extraReducers: {
		[fetchProducts.pending]: (state, { payload }) => {
			state.isLoading = true;
		},
		[fetchProducts.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.products = payload;
		},
		[fetchProducts.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.data = [];
			state.isError = true;
			state.errorMessage =
				payload.errorMessage || payload || 'something went wrong';
		},
		[fetchSingeProducts.pending]: (state, { payload }) => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchSingeProducts.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.single = payload;
			state.isError = false;
		},
	},
});

export const { clearSingle } = productSlice.actions;
export const selectCount = (state) => state.products;
