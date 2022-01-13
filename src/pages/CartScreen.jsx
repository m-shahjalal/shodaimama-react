import Cart from '../components/Cart/Cart';
import Sidebar from '../components/Sidebar/Sidebar';

const CartScreen = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='homearea'>
				<Cart />
			</div>
		</main>
	);
};

export default CartScreen;
