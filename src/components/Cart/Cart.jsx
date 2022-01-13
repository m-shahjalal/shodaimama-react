import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/slices/cartSlice';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const clearCartItems = () => dispatch(clearCart());

	if (cart.cartItems.length === 0) {
		return (
			<div
				style={{ maxWidth: '700px', boxShadow: 'none' }}
				className='cart-container'>
				<div className='cart'>
					<i className='fas fa-cart-arrow-down'></i>
					<p className='not-found-title'>No Product Found</p>
					<button className='not-found-button'>
						Start Shopping New
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='cart-container'>
			<div className='cart-top'>
				<div className='cart-left'>
					<div className='cart-time'>
						<span className='cart-bold'>Delivery Time</span>
						<span>
							Delivery Every 2 Hours From 10:00 AM - 08:00 PM
						</span>
					</div>
					<div className='cart-charge'>
						<span className='cart-bold'>Delivery Charge</span>
						<span>
							<span>৳ 50</span>
						</span>
					</div>
					<div className='cart-item'>
						<span className='cart-bold'>Items:</span>
						<span>{cart.cartTotalQuantity}</span>
					</div>
					<div className='cart-total'>
						<span className='cart-bold'>Total:</span>
						<span>৳ {cart.cartTotalAmount} </span>
					</div>
					<div className='cart-accepted'>
						Cash & Digital Payment Accepted.
					</div>
				</div>
				<div className='cart-right'>
					{cart.cartItems.length &&
						cart.cartItems.map((item) => (
							<CartItem item={item} key={item.key} />
						))}
				</div>
			</div>

			<div className='cart-bottom'>
				<div className='cart-bottom-items'>
					<i className='fas fa-cart'></i>
					{cart.cartTotalQuantity} items
				</div>
				<div className='cart-bottom-total'>
					Total: {cart.cartTotalAmount}{' '}
				</div>
				<div className='cart-bottom-total'>
					<button>Place Order</button>
					<i onClick={clearCartItems} className='fas fa-times'></i>
				</div>
			</div>
		</div>
	);
};

export default Cart;
