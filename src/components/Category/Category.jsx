import breakfast from '../../images/icons/breakfast.png';
import can from '../../images/icons/can.png';
import cook from '../../images/icons/cook.png';
import dairy from '../../images/icons/dairy.png';
import hygiene from '../../images/icons/hygiene.png';
import kid from '../../images/icons/kid.png';
import meat from '../../images/icons/meat.png';
import personal from '../../images/icons/personal.png';
import preorder from '../../images/icons/preorder.png';
import vegetable from '../../images/icons/vegetable.png';
import './Category.css';

const Category = () => {
	return (
		<div className='bottom_category'>
			<div className='bottom_category-headline'>
				<div className='bottom_category-headline_inner'>
					Shodaimama Categories
				</div>
			</div>
			<div className='bottom_category-container'>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={breakfast}
						alt='breakfast'
					/>
					Breakfast and Snacks
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={cook}
						alt='breakfast'
					/>
					Cooking
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={meat}
						alt='breakfast'
					/>
					Meat and Fish
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={vegetable}
						alt='breakfast'
					/>
					Fruits and vegetables
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={dairy}
						alt='breakfast'
					/>
					Dairy
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={can}
						alt='breakfast'
					/>
					Frozen and Canned
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={hygiene}
						alt='breakfast'
					/>
					Breakfast and Snacks
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={kid}
						alt='breakfast'
					/>
					Kids care
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={personal}
						alt='breakfast'
					/>
					Personal care
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={breakfast}
						alt='breakfast'
					/>
					Home and Kitchen
				</div>
				<div className='bottom_category-card'>
					<img
						className='bottom_category-img'
						src={preorder}
						alt='breakfast'
					/>
					Stationary
				</div>
			</div>
		</div>
	);
};

export default Category;
