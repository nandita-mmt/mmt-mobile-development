import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Tilt from 'react-parallax-tilt';
import 'react-multi-carousel/lib/styles.css';

import REVITAL from '../../Assets/Images/Feature/Revital-Health.webp';
import AJ from '../../Assets/Images/Feature/Aj-Spider.webp';
import CONSULTANCY from '../../Assets/Images/Feature/tax-consultancy.webp';
import IMMIGRATION from '../../Assets/Images/Feature/GH -Immigration.webp';
import HANDYMAN from '../../Assets/Images/Feature/dave-The-Handyman.webp';

import './MultiCarousel.scss';
import { Link } from 'react-router-dom';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
		slidesToSlide: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 767 },
		items: 3,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 767, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};
const featuredData = [
	{ id: 1, category: 'Web Design', title: 'REVITAL HEALTH', img: REVITAL },
	{ id: 2, category: 'Web Design', title: 'AJ SPIDER', img: AJ },
	{ id: 3, category: 'Web Design', title: 'GH IMMIGRATION', img: IMMIGRATION },
	{ id: 4, category: 'Web Design', title: 'TAX CONSULTANCY', img: CONSULTANCY },
	{ id: 5, category: 'Web Design', title: 'HANDYMAN', img: HANDYMAN },
];

const MultiCarousel = () => {
	return (
		<Carousel
			swipeable={true}
			responsive={responsive}
			draggable={false}
			showDots={true}
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={3000000}
			containerClass='carousel-container'
			removeArrowOnDeviceType={['superLargeDesktop', 'desktop', 'tablet', 'mobile']}
			dotListClass='custom-dot-list-style'
			itemClass='carousel-item-padding-150-px'
		>
			{featuredData.map((data, i) => {
				return (
					<Link key={i} className='' to={`/featured-work`}>
						<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} key={i}>
							<div className='carousel-img-div position-relative'>
								<div className='car-img-inner d-flex justify-content-end align-items-end w-100 h-100'>
									<Image src={data.img} alt='no-img' className='mmt-mlt-car-img' />
								</div>
								<p className='feature-category-txt position-absolute font-300 font-14 px-3'>
									{data.category}
								</p>
								<span className='feature-title-txt position-absolute font-700 font-avg py-1 px-3'>
									{data.title}
								</span>
							</div>
						</Tilt>
					</Link>
				);
			})}
		</Carousel>
	);
};

export default MultiCarousel;
