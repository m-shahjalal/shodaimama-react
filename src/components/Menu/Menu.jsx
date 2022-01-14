import './Menu.css';

// bottom menu in small devises
const Menu = () => {
	return (
		<div className='mobile_sidebar'>
			<div className='mobile_sidebar-list'>
				<div className='mobile_sidebar-item'>
					<i className='fa fa-home' aria-hidden='true'></i>
				</div>
				<div className='mobile_sidebar-item'>Regular</div>
				<div className='mobile_sidebar-item'>Fresh</div>
				<div className='mobile_sidebar-item'>Preorder</div>
			</div>
		</div>
	);
};

export default Menu;
