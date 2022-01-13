import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	const { cartTotalQuantity, cartTotalAmount } = useSelector(
		(state) => state.cart
	);
	return (
		<header className='header'>
			<div className='header_hamburger'>
				<div className='hamburger-icon'>
					<i className='fas fa-bars'></i>
				</div>
			</div>
			<div className='header_left'>
				<Link to='/' className='header_left-logo'>
					<img src={logo} alt='Logo' className='header-logo' />
				</Link>
			</div>

			<div className='header_right'>
				<Link to='#' className='header_right-item'>
					<i className='fas fa-search'></i>
				</Link>
				<Link to='#' className='header_right-item header-location'>
					<i className='fas fa-map-marker-alt'></i>
					select delivery location
				</Link>
				<Link to='#' className='header_right-item header-signin'>
					<i className='fas fa-user'></i>
					Sing in
				</Link>
				<Link to='/cart' className='header_cart header_right-item'>
					<i className='fas fa-cart-plus'></i>
					<i className='fas fa-angle-double-right'></i>
					<div className='header_cart-inner'>
						<div className='header_cart-top'>
							<i className='fas fa-file-invoice'></i>{' '}
							{cartTotalQuantity}
						</div>
						<hr />
						<div className='header_cart-bottom'>
							৳ {cartTotalAmount}
						</div>
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
