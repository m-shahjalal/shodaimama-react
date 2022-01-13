import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div className='footer_col'>
					<img src={logo} width='110' alt='logo' />
					<div className='footer_col-social'>
						<i className='fa fa-facebook' aria-hidden='true'></i>
						<i className='fa fa-instagram' aria-hidden='true'></i>
						<i className='fa fa-linkedin' aria-hidden='true'></i>
						<i className='fa fa-youtube' aria-hidden='true'></i>
					</div>
					<button className='footer_col-app'>shodaimama app</button>
					<div className='footer_col-credit'>ShodaiMama © 2021</div>
				</div>
				<div className='footer_col'>
					<h3 className='footer_col_title'>Useful Links</h3>
					<div className='footer_col-link'>
						<Link to='#' className='footer_col-link_item'>
							About Shodaimama
						</Link>
						<Link to='#' className='footer_col-link_item'>
							FAQ{' '}
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Contact Us
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Career
						</Link>
					</div>
				</div>
				<div className='footer_col'>
					<h3 className='footer_col_title'>Helpful Links</h3>
					<div className='footer_col-link'>
						<Link to='#' className='footer_col-link_item'>
							About Shodaimama
						</Link>
						<Link to='#' className='footer_col-link_item'>
							FAQ{' '}
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Contact Us
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Career
						</Link>
					</div>
				</div>
				<div className='footer_col'>
					<h3 className='footer_col_title'>Helpful Links</h3>
					<div className='footer_col-link'>
						<Link to='#' className='footer_col-link_item'>
							About Shodaimama
						</Link>
						<Link to='#' className='footer_col-link_item'>
							FAQ{' '}
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Contact Us
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Career
						</Link>
					</div>
				</div>
			</div>
			<img
				src='https://shodaimama.com/static/media/SSLCommerz-Pay-With-logo-All-Size-05.b4efc4ca.png'
				alt=''
				width='100%'
				className='payment-image1'
			/>
			<img
				src='https://shodaimama.com/static/media/SSLCommerz-Pay-With-logo-All-Size-04.2e69075d.png'
				alt=''
				width='100%'
				className='payment-image2'
			/>
		</>
	);
};

export default Footer;
