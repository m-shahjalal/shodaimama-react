import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: [],
	cartTotalQuantity: localStorage.getItem('total')
		? JSON.parse(localStorage.getItem('total'))
		: 0,
	cartTotalAmount: localStorage.getItem('amount')
		? JSON.parse(localStorage.getItem('amount'))
		: 0,
};

const getCartSummary = (cart) => {
	let { total, quantity } = cart.reduce(
		(cartTotal, cartItem) => {
			const { price, cartQuantity } = cartItem;
			const itemTotal = price * cartQuantity;

			cartTotal.total += itemTotal;
			cartTotal.quantity += cartQuantity;

			return cartTotal;
		},
		{
			total: 0,
			quantity: 0,
		}
	);
	return {
		total: parseFloat(total.toFixed(2)),
		quantity: quantity,
	};
};

const setLocalStore = (value) => {
	localStorage.setItem('cartItems', JSON.stringify(value.cartItems));
	localStorage.setItem('total', JSON.stringify(value.cartTotalQuantity));
	localStorage.setItem('amount', JSON.stringify(value.cartTotalAmount));
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const existingIndex = state.cartItems.findIndex((item) => {
				return item.id === action.payload.id;
			});

			if (existingIndex === -1) {
				let tempProductItem = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProductItem);
				toast.success('Product added to cart');
			}
			const { total, quantity } = getCartSummary(state.cartItems);
			state.cartTotalAmount = total;
			state.cartTotalQuantity = quantity;
			setLocalStore(state);
		},
		increaseCart(state, action) {
			const existingIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingIndex >= 0) {
				state.cartItems[existingIndex] = {
					...state.cartItems[existingIndex],
					cartQuantity:
						state.cartItems[existingIndex].cartQuantity + 1,
				};
				toast.success('Increased product quantity');
			}
			const { total, quantity } = getCartSummary(state.cartItems);
			state.cartTotalAmount = total;
			state.cartTotalQuantity = quantity;
			setLocalStore(state);
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;
				toast('Decreased product quantity');
			}
			const { total, quantity } = getCartSummary(state.cartItems);
			state.cartTotalAmount = total;
			state.cartTotalQuantity = quantity;
			setLocalStore(state);
		},
		removeFromCart(state, action) {
			state.cartItems.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					const nextCartItems = state.cartItems.filter(
						(item) => item.id !== cartItem.id
					);
					state.cartItems = nextCartItems;
					toast.error('Product removed from cart');
				}
				const { total, quantity } = getCartSummary(state.cartItems);
				state.cartTotalAmount = total;
				state.cartTotalQuantity = quantity;
				localStorage.setItem(
					'cartItems',
					JSON.stringify(state.cartItems)
				);
				return state;
			});
		},
		clearCart(state) {
			state.cartItems = [];
			state.cartTotalQuantity = 0;
			state.cartTotalAmount = 0;
			localStorage.clear();
			toast.error('Cart cleared');
		},
	},
});

export const {
	addToCart,
	increaseCart,
	decreaseCart,
	removeFromCart,
	clearCart,
} = cartSlice.actions;
