import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	decreaseCart,
	increaseCart,
} from '../../redux/slices/cartSlice';
import './Card.css';

const Card = ({ item }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const [added, setAdded] = useState(false);
	const handleClick = () => dispatch(addToCart(item));
	const increment = () => dispatch(increaseCart(item));
	const decrement = () => dispatch(decreaseCart({ id: item.id }));

	useEffect(() => {
		const isAdded = cart?.cartItems?.find((elm) => elm.id === item.id);
		if (isAdded || isAdded?.cartQuantity)
			setAdded(isAdded.cartQuantity || 1);
	}, [cart, item.id]);

	return (
		<div className='homearea_card'>
			<div className='homearea_card-tag'>{item.category}</div>
			<div className='homearea_card-media'>
				<img src={item.image} alt='' className='img-responsive' />
			</div>
			<div className='homearea_card-title'>{item.title}</div>
			<div className='homearea_card-count'>each</div>
			<div className='homearea_card-price'>
				৳ <span className='homearea_card-num'> {item.price} </span>
			</div>
			<div className='homearea_card-row'>
				<div className='homearea_card-delivery'>
					<i className='fas fa-truck'></i>
					<span className='next-morning'>next morning</span>
				</div>
				<div className='homearea_card-delivery'>
					<i className='fas fa-money-check-alt'></i>
					<i className='fas fa-money-bill-wave'></i>
				</div>
			</div>

			{added ? (
				<div
					onClick={handleClick}
					className='homearea_card-button homearea_card-button_added'>
					<span onClick={decrement}>-</span>
					<p>{added} added</p>
					<span onClick={increment}>+</span>
				</div>
			) : (
				<div onClick={handleClick} className='homearea_card-button'>
					addTo card
				</div>
			)}
		</div>
	);
};

export default Card;
