import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from 'react-bootstrap';
// import ReactPlayer from 'react-player';

import BGBANNER from '../../Assets/Images/Banner/banner-img-bg.svg';
import BANNERIMG from '../../Assets/Images/Banner/banner-img.webp';
import ARROW from '../../Assets/Images/Banner/banner-bottom-arrow.svg';

const Slider = () => {
	const handleSelect = (selectedIndex, e) => {
		console.log(selectedIndex);
		e.preventDefault();
	};
	return (
		<Carousel
			nextLabel={'/04'}
			prevLabel={'01'}
			// prevIcon={<span aria-hidden='true' className='carousel-control-prev-icon' />}
			interval={null}
			data-interval={false}
			keyboard={true}
			controls={false}
			indicators={false}
			onSelect={handleSelect}
			fade
		>
			<Carousel.Item>
				<Image className='d-block w-100' src={BGBANNER} alt='First slide' />
				<Image className='mmt-banner-arrow' src={ARROW} alt='no-img'></Image>
				<Carousel.Caption>
					<Image className='w-100' src={BANNERIMG} alt='no-img' />
					{/* <ReactPlayer
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
						width='100%'
						height='100%'
						light={BANNERIMG}
						controls={true}
					/> */}
					{/* <div className='mmt-car-info d-flex flex-column align-items-start'>
						<h1 className='font-900 font-main'>BLOCKCHAIN</h1>
					</div> */}
				</Carousel.Caption>
			</Carousel.Item>
			{/* <Carousel.Item>
				<Image className='d-block w-100' src={BGBANNER} alt='First slide' />
				<Image className='mmt-banner-arrow' src={ARROW} alt='no-img'></Image>
				<Carousel.Caption>
					<Image className='w-100' src={BANNERIMG} alt='no-img' /> */}
					{/* <ReactPlayer
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
						width='100%'
						height='100%'
						light={BANNERIMG}
						controls={true}
					/> */}
					{/* <div className='mmt-car-info d-flex flex-column align-items-start'>
						<h1 className='font-900 font-main'>BLOCKCHAIN</h1>
					</div> */}
			{/* <Carousel.Item>
				<Image className='d-block w-100' src={BGBANNER} alt='First slide' />
				<Image className='mmt-banner-arrow d-block' src={ARROW} alt='no-img'></Image>
				<Carousel.Caption>
					<ReactPlayer
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
						width='100%'
						height='100%'
						light={BANNERIMG}
						controls={true}
					/>
					<div className='mmt-car-info d-flex flex-column align-items-start'>
						<h1 className='font-900 font-main'>DEEP LEARNING</h1>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<Image className='d-block w-100' src={BGBANNER} alt='First slide' />
				<Image className='mmt-banner-arrow d-block' src={ARROW} alt='no-img'></Image>
				<Carousel.Caption>
					<ReactPlayer
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
						width='100%'
						height='100%'
						light={BANNERIMG}
						controls={true}
					/>
					<div className='mmt-car-info d-flex flex-column align-items-start'>
						<h1 className='font-900 font-main'>CORE TECH</h1>
					</div>
				</Carousel.Caption>
			</Carousel.Item> */}
		</Carousel>
	);
};

export default Slider;

{/* <Carousel.Item>
	<Image className='d-block w-100' src={BGBANNER} alt='First slide' />
	<Image className='mmt-banner-arrow' src={ARROW} alt='no-img'></Image>
	<Carousel.Caption>
		<Image className='w-100' src={BANNERIMG} alt='no-img' />
	</Carousel.Caption>
</Carousel.Item> */}