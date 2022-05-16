import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';
import SALES from '../../Assets/Images/CoreTech/core-bottom.webp';
import PHP from '../../Assets/Images/CoreTech/php.webp';
import CI from '../../Assets/Images/CoreTech/ci.webp';
import SYMP from '../../Assets/Images/CoreTech/symphony.webp';
import LARA from '../../Assets/Images/CoreTech/laravel.webp';
import YI from '../../Assets/Images/CoreTech/yi.webp';
import PYTH from '../../Assets/Images/CoreTech/python.webp';
import REACT from '../../Assets/Images/Common/react.webp';
import ANGULAR from '../../Assets/Images/Common/angular.webp';
import SVELTE from '../../Assets/Images/Common/svelte.webp';
import LARAVEL from '../../Assets/Images/Common/laravel.webp';
import HTML from '../../Assets/Images/Common/html.webp';
import CSS from '../../Assets/Images/Common/css.webp';
import JS from '../../Assets/Images/Common/js.webp';
import JOOMLA from '../../Assets/Images/Common/joomla.webp';
import WOO from '../../Assets/Images/Common/woo.webp';
import SHOPIFY from '../../Assets/Images/Common/shopify.webp';
import LARASHIP from '../../Assets/Images/Common/laraship.webp';
import ALFRESCO from '../../Assets/Images/Common/alfreshco.webp';
import DRUPAL from '../../Assets/Images/Common/drupal.webp';
import WORDPRESS from '../../Assets/Images/Common/wordpress.webp';
import TYPO from '../../Assets/Images/Common/typo.webp';
import NATIVESCRIPT from '../../Assets/Images/Common/nativescript.webp';
import FLUTTER from '../../Assets/Images/Common/flutter.webp';
import REACTNATIVE from '../../Assets/Images/Common/react_native.webp';
import IONIC from '../../Assets/Images/Common/ionic.webp';

import './techStack.scss';

const techStack = () => {
	const responsiveTxt = {
		0: {
			items: 1,
		},
		767: {
			items: 2,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	};
	const responsiveMulti = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div className='CoreTechCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>Our List Of Technologies</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image>/ */}
					</Col>{' '}
					<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
						<div className='w-100 position-relative mt-4'>
							<Nav variant='pills' className='mmt-subroute-dv justify-content-start justify-content-md-center'>
								<Nav.Link eventKey='first' className='mmt-know-project'>
									<Fade bottom><h3 className='mb-0 text-center font-500'>Server</h3></Fade>
								</Nav.Link>
								<Nav.Link eventKey='second' className='mmt-know-project'>
									<Fade bottom><h3 className='mb-0 text-center font-500'>Front End</h3></Fade>
								</Nav.Link>
								<Nav.Link eventKey='third' className='mmt-know-project'>
									<Fade bottom><h3 className='mb-0 text-center font-500'>E-Commerce</h3></Fade>
								</Nav.Link>
								<Nav.Link eventKey='fourth' className='mmt-know-project'>
									<Fade bottom><h3 className='mb-0 text-center font-500'>CMS</h3></Fade>
								</Nav.Link>
								<Nav.Link eventKey='fifth' className='mmt-know-project'>
									<Fade bottom><h3 className='mb-0 text-center font-500'>Mobility</h3></Fade>
								</Nav.Link>
							</Nav>
						</div>
						<Row className='mmt-knowledge-row h-100 w-100 logo-wrapper'>
							<Col className='mt-4 w-100'>
								<Tab.Content className='w-100'>
									<Tab.Pane eventKey='first' className='w-100'>
										<Carousel swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']} responsive={responsiveMulti}>
											<div className='item'><Image src={PHP} alt='no-img'></Image></div>
											<div className='item'><Image src={LARA} alt='no-img'></Image></div>
											<div className='item'><Image src={CI} alt='no-img'></Image></div>
											<div className='item'><Image src={YI} alt='no-img'></Image></div>
											<div className='item'><Image src={SYMP} alt='no-img'></Image></div>
											<div className='item'><Image src={PYTH} alt='no-img'></Image></div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='second' className='w-100'>
										<Carousel swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']} responsive={responsiveMulti}>
											<div className='item'><Image src={REACT} alt='no-img'></Image></div>
											<div className='item'><Image src={ANGULAR} alt='no-img'></Image></div>
											<div className='item'><Image src={LARAVEL} alt='no-img'></Image></div>
											<div className='item'><Image src={SVELTE} alt='no-img'></Image></div>
											<div className='item'><Image src={HTML} alt='no-img'></Image></div>
											<div className='item'><Image src={CSS} alt='no-img'></Image></div>
											<div className='item'><Image src={JS} alt='no-img'></Image></div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='third' className='w-100'>
										<Carousel swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']} responsive={responsiveMulti}>
											<div className='item'><Image src={JOOMLA} alt='no-img' /></div>
											<div className='item'><Image src={WOO} alt='no-img' /></div>
											<div className='item'><Image src={SHOPIFY} alt='no-img' /></div>
											<div className='item'><Image src={LARASHIP} alt='no-img' /></div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='fourth' className='w-100'>
										<Carousel swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']} responsive={responsiveMulti}>
											<div className='item'><Image src={ALFRESCO} alt='no-img' /></div>
											<div className='item'><Image src={TYPO} alt='no-img' /></div>
											<div className='item'><Image src={DRUPAL} alt='no-img' /></div>
											<div className='item'><Image src={WORDPRESS} alt='no-img' /></div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='fifth' className='w-100'>
										<Carousel swipeable={false} draggable={false} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']} responsive={responsiveMulti}>
											<div className='item'><Image src={REACTNATIVE} alt='no-img' /></div>
											<div className='item'><Image src={FLUTTER} alt='no-img' /></div>
											<div className='item'><Image src={IONIC} alt='no-img' /></div>
											<div className='item'><Image src={NATIVESCRIPT} alt='no-img' /></div>
										</Carousel>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Row>
			</Container>
		</div>
	);
};

export default techStack;
