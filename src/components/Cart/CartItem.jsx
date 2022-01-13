import { useDispatch } from 'react-redux';
import {
	decreaseCart,
	increaseCart,
	removeFromCart,
} from '../../redux/slices/cartSlice';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	const increment = () => dispatch(increaseCart(item));
	const decrement = () => dispatch(decreaseCart({ id: item.id }));
	const deleteCart = () => dispatch(removeFromCart({ id: item.id }));

	console.log(item);

	return (
		<div className='item-card'>
			<div className='cart-interact'>
				<button onClick={increment}>+</button>
				<p>{item.cartQuantity}</p>
				<button onClick={decrement}>-</button>
			</div>
			<img
				src={item.image}
				alt='products'
				width='100px'
				style={{ padding: '10px' }}
			/>
			<div className='item-details'>
				<div className='item-name'>
					Horlicks Health And Nutrition Drink Jar
				</div>
				<div className='item-price'>৳ 250 / 100gm </div>
			</div>
			<div className='item-total'>৳ 22322</div>
			<div onClick={deleteCart} className='item-clear'>
				<i className='fas fa-times'></i>
			</div>
		</div>
	);
};

export default CartItem;
