import { Link } from 'react-router-dom';
import breakfast from '../../images/icons/breakfast.png';
import can from '../../images/icons/can.png';
import cook from '../../images/icons/cook.png';
import dairy from '../../images/icons/dairy.png';
import fresh from '../../images/icons/fresh.png';
import home from '../../images/icons/home.png';
import hygiene from '../../images/icons/hygiene.png';
import kid from '../../images/icons/kid.png';
import meat from '../../images/icons/meat.png';
import personal from '../../images/icons/personal.png';
import preorder from '../../images/icons/preorder.png';
import regular from '../../images/icons/regular.png';
import vegetable from '../../images/icons/vegetable.png';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<div className='fixSidebar'>
			<div className='sidebar'>
				<div className='sidebar_main'>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={home} alt='home' />
						home
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={fresh} alt='home' />
						Fresh
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={regular} alt='' />
						Regular
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={preorder} alt='' />
						Pre Order
					</Link>
				</div>
				<div className='sidebar_header'>
					<Link className='leftSideBarTopNavItemLink' to='#'>
						<span className='explore_text'> Explore </span>
						<span className='shodai_text'> Shodai </span>
						<span className='mama_text'> Mama </span>
					</Link>
				</div>
				<div className='sidebar_explore'>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={hygiene} alt='' />
						Hygiene
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={breakfast} alt='' />
						Breakfast &amp; Snacks
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={cook} alt='' />
						Cooking
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={meat} alt='' />
						Meat &amp; fish
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={vegetable} alt='' />
						Fruits &amp; Vegetable
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={dairy} alt='' />
						Dairy
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={can} alt='' />
						Frozen &amp; Canned
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={breakfast} alt='' />
						Beverages
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={kid} alt='' />
						Kids care
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={personal} alt='' />
						Personal care
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={home} alt='' />
						Home &amp; kitchen
					</Link>
					<Link to='#' className='sidebar_main-item'>
						<img className='sidebar-img' src={hygiene} alt='' />
						Stationary
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
