import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import cover from '../../images/cover.png';
import cover1 from '../../images/cover1.png';
import cover2 from '../../images/cover2.png';
import cover3 from '../../images/cover3.png';
import cover4 from '../../images/cover4.png';
import './Hero.css';

// custom arrow button
const NextArrow = (props) => (
	<button {...props} className={`${props.className} custom-arrow`} />
);

// custom button
const PrevArrow = (props) => (
	<button
		{...props}
		className={`${props.className} custom-arrow custom-arrow-right`}
	/>
);

// slider settings
const settings = {
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	accessibility: true,
	autoplaySpeed: 3000,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const Hero = () => {
	return (
		<>
			{/* topbar */}
			<div className='homearea_category'>
				<Link className='homearea_category-item active' to='#'>
					Fresh
				</Link>
				<Link className='homearea_category-item' to='#'>
					Regular
				</Link>
				<Link className='homearea_category-item' to='#'>
					PreOrder
				</Link>
			</div>

			{/* main slider content */}
			<div className='homearea_slider'>
				<Slider {...settings}>
					<div>
						<img src={cover} width='100%' alt='cover' />
					</div>
					<div>
						<img src={cover1} width='100%' alt='cover' />
					</div>
					<div>
						<img src={cover2} width='100%' alt='cover' />
					</div>
					<div>
						<img src={cover3} width='100%' alt='cover' />
					</div>
					<div>
						<img src={cover4} width='100%' alt='cover' />
					</div>
				</Slider>
			</div>
		</>
	);
};

export default Hero;
