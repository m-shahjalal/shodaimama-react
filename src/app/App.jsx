import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Error from '../components/NotFound/NotFound';
import logo from '../images/logo.png';
import CartScreen from '../pages/CartScreen';
import HomeScreen from '../pages/HomeScreen';
import { fetchProducts } from '../redux/slices/ProductSlice';
import './App.css';

const App = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.products);
	useEffect(() => dispatch(fetchProducts()), [dispatch]);

	if (isLoading) {
		return (
			<div className='loading-initialized'>
				<img src={logo} alt='logo' width='150px' />
				<div className='loader'></div>
			</div>
		);
	}
	return (
		<BrowserRouter>
			<div className='layout'>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/cart' element={<CartScreen />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
			<Toaster position='top-right' reverseOrder={true} />
		</BrowserRouter>
	);
};

export default App;
