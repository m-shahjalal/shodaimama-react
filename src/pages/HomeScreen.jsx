import { useSelector } from 'react-redux';
import Alert from '../components/Alert/Alert';
import Card from '../components/Card/Card';
import Category from '../components/Category/Category';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';

const HomeScreen = () => {
	const products = useSelector((state) => state.products);
	return (
		// main application viewport
		<main className='main'>
			{/* left sidebar */}
			<Sidebar />

			{/* entire right section */}
			<div className='homearea'>
				<Hero />
				<Alert />
				<div className='homearea_content'>
					{products.isLoading ? (
						<div>Loading...</div>
					) : products.isError ? (
						<div>{products.errorMessage}</div>
					) : (
						// renders the card of products
						products.products.map((item) => (
							<Card item={item} key={item.id} />
						))
					)}
				</div>
				<Alert />
				{/* bottom category section */}
				<Category />
				<Info />
				<Footer />
				{/* mobile menu section */}
				<Menu />
			</div>
		</main>
	);
};

export default HomeScreen;
