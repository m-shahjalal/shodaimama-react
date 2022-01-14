import Cart from '../components/Cart/Cart';
import Sidebar from '../components/Sidebar/Sidebar';

const CartScreen = () => {
	return (
		<main className='main'>
			{/* left sidebar */}
			<Sidebar />
			<div className='homearea'>
				{/* right cart section */}
				<Cart />
			</div>
		</main>
	);
};

export default CartScreen;
