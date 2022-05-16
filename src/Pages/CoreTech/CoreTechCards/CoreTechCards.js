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
import SALES from '../../../Assets/Images/CoreTech/core-bottom.webp';
import PHP from '../../../Assets/Images/CoreTech/php.webp';
import CI from '../../../Assets/Images/CoreTech/ci.webp';
import SYMP from '../../../Assets/Images/CoreTech/symphony.webp';
import LARA from '../../../Assets/Images/CoreTech/laravel.webp';
import YI from '../../../Assets/Images/CoreTech/yi.webp';
import PYTH from '../../../Assets/Images/CoreTech/python.webp';
import REACT from '../../../Assets/Images/Common/react.webp';
import ANGULAR from '../../../Assets/Images/Common/angular.webp';
import SVELTE from '../../../Assets/Images/Common/svelte.webp';
import LARAVEL from '../../../Assets/Images/Common/laravel.webp';
import HTML from '../../../Assets/Images/Common/html.webp';
import CSS from '../../../Assets/Images/Common/css.webp';
import JS from '../../../Assets/Images/Common/js.webp';
import JOOMLA from '../../../Assets/Images/Common/joomla.webp';
import WOO from '../../../Assets/Images/Common/woo.webp';
import SHOPIFY from '../../../Assets/Images/Common/shopify.webp';
import LARASHIP from '../../../Assets/Images/Common/laraship.webp';
import ALFRESCO from '../../../Assets/Images/Common/alfreshco.webp';
import DRUPAL from '../../../Assets/Images/Common/drupal.webp';
import WORDPRESS from '../../../Assets/Images/Common/wordpress.webp';
import TYPO from '../../../Assets/Images/Common/typo.webp';
import NATIVESCRIPT from '../../../Assets/Images/Common/nativescript.webp';
import FLUTTER from '../../../Assets/Images/Common/flutter.webp';
import REACTNATIVE from '../../../Assets/Images/Common/react_native.webp';
import IONIC from '../../../Assets/Images/Common/ionic.webp';

import './CoreTechCards.scss';

const CoreTechCards = () => {
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
			<Container className='mmt-papercard-container w-100 h-100 pt-5 mt-5 '>
				<Row className='mmt-custom-top align-items-center justify-content-center pt-5'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Experience Consistency & Success, Backed By Technologies That Fuel Growth
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='font-300 text-center mt-4 mb-0'>
							MagicMinds Technologies is constantly investing in welcoming the latest technologies
							that fast-forward the pace of every business in their trajectory towards success
						</p>
						<p className='font-300 text-center pt-4 mb-0'>
							In order to amplify our scientific knowledge with the new technologies, we never stop
							inculcating ourselves with new knowledge and harness the power of new tech, just to
							accelerate businesses across verticals like financial & banking, health, astrology,
							law, real estate, automotive, immigration, travel & hospitality.
						</p>
					</Col>{' '}
				</Row>
			</Container>
			<Container className='mmt-papercard-container w-100 h-100 pt-5 mt-5 '>
				<Row className='mmt-custom-top align-items-center justify-content-center pt-5'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Experience Consistency & Success, Backed By Technologies That Fuel Growth
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='font-300 text-center mt-4 mb-0'>
							MagicMinds Technologies is constantly investing in welcoming the latest technologies
							that fast-forward the pace of every business in their trajectory towards success
						</p>
						<p className='font-300 text-center pt-4 mb-0'>
							In order to amplify our scientific knowledge with the new technologies, we never stop
							inculcating ourselves with new knowledge and harness the power of new tech, just to
							accelerate businesses across verticals like financial & banking, health, astrology,
							law, real estate, automotive, immigration, travel & hospitality.
						</p>
					</Col>{' '}
				</Row>
			</Container>
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
							<Nav
								variant='pills'
								className='mmt-subroute-dv justify-content-start justify-content-md-center'
							>
								<Nav.Link eventKey='first' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>Server</h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='second' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>Front End</h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='third' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>E-Commerce</h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='fourth' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>CMS</h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='fifth' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>Mobility</h3>
									</Fade>
								</Nav.Link>
							</Nav>
						</div>
						<Row className='mmt-knowledge-row h-100 w-100'>
							<Col className='mt-4 w-100'>
								<Tab.Content className='w-100'>
									<Tab.Pane eventKey='first' className='w-100'>
										<Carousel
											swipeable={false}
											draggable={false}
											showDots={false}
											infinite={true}
											autoPlay={true}
											autoPlaySpeed={3000}
											removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
											responsive={responsiveMulti}
										>
											<div className='item'>
												<Image src={PHP} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={LARA} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={CI} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={YI} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={SYMP} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={PYTH} alt='no-img'></Image>
											</div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='second' className='w-100'>
										<Carousel
											swipeable={false}
											draggable={false}
											showDots={false}
											infinite={true}
											autoPlay={true}
											autoPlaySpeed={3000}
											removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
											responsive={responsiveMulti}
										>
											<div className='item'>
												<Image src={REACT} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={ANGULAR} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={LARAVEL} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={SVELTE} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={HTML} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={CSS} alt='no-img'></Image>
											</div>
											<div className='item'>
												<Image src={JS} alt='no-img'></Image>
											</div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='third' className='w-100'>
										<Carousel
											swipeable={false}
											draggable={false}
											showDots={false}
											infinite={true}
											autoPlay={true}
											autoPlaySpeed={3000}
											removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
											responsive={responsiveMulti}
										>
											<div className='item'>
												<Image src={JOOMLA} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={WOO} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={SHOPIFY} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={LARASHIP} alt='no-img' />
											</div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='fourth' className='w-100'>
										<Carousel
											swipeable={false}
											draggable={false}
											showDots={false}
											infinite={true}
											autoPlay={true}
											autoPlaySpeed={3000}
											removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
											responsive={responsiveMulti}
										>
											<div className='item'>
												<Image src={ALFRESCO} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={TYPO} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={DRUPAL} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={WORDPRESS} alt='no-img' />
											</div>
										</Carousel>
									</Tab.Pane>
									<Tab.Pane eventKey='fifth' className='w-100'>
										<Carousel
											swipeable={false}
											draggable={false}
											showDots={false}
											infinite={true}
											autoPlay={true}
											autoPlaySpeed={3000}
											removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
											responsive={responsiveMulti}
										>
											<div className='item'>
												<Image src={REACTNATIVE} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={FLUTTER} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={IONIC} alt='no-img' />
											</div>
											<div className='item'>
												<Image src={NATIVESCRIPT} alt='no-img' />
											</div>
										</Carousel>
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Row>
			</Container>
			<Container className='mmt-papercard-container'>
				<Row className='mmt-custom-top align-items-center justify-content-center mt-5 pb-4'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center mb-0'>Rely On Our Technology Services</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>{' '}
				</Row>
			</Container>
			<div className='mmt-about-service mt-4 mb-5'>
				<Container className='mmt-papercard-container'>
					<Row className='align-items-center justify-content-center'>
						<OwlCarousel
							items={4}
							dots={false}
							autoplay={false}
							loop={true}
							margin={0}
							nav={true}
							responsive={responsiveTxt}
							className='owl-carousel owl-theme'
						>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									Prompt Response
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									We might be tech-savvy, but we don’t rely on robots to address issues. Our live
									executives dedicatedly assist to connect our clients to the right person for all
									queries.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									One Stop Shop
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									We have a great track record in handling the IT infrastructure for our clients.
									For years, we have been seamlessly looking after their software maintenance,
									development, management and renewals.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									Expert Professionals
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									At MMT, we have take pride in working with some of industry’s passionately
									talented young professionals who provide the most accurate and effective addresses
									of tech-based issues.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									In-House Talent Pool
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									Our bond stays between our clients and us. Unlike many ‘dumbsourcing’
									organisation, we never pass on our clients’ project requisites to any other firm.
									We are made of 100% in-house talents.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									Simplified Project Management
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									MagicMinds Technologies has a significant experience in working with changing
									technologies. Since we are constantly upgrading our knowledge, we can seamlessly
									work on any project with complex tech.
								</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>
			<Container className='mmt-papercard-container extra-marg w-100 h-100 my-5 '>
				<Row className='align-items-start justify-content-center pb-3 '>
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 1 }}
						className='position-relative py-5'
					>
						<Fade bottom>
							<h2 className='text-center text-lg-start font-600'>We Provide 100% Satisfaction</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								We never leave the ground unless you are satisfied. We have always put our clients
								first and we align our tech support and strategies in alignment with their
								satisfaction.
							</p>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Are you looking for fully-responsive customized websites for your business? Look no
								further! Magicmind is here to help you with excellent website development service in
								India, USA, Canada, UK, Australia, and other parts of the world. We specialize in
								rendering next-generation websites that help you to sail smoothly through the
								constantly-evolving technological changes.
							</p>
						</Fade>
					</Col>
					<Col
						xs={{ span: 12, order: 1 }}
						lg={{ span: 4, order: 2 }}
						className='position-relative d-flex justify-content-center align-items-center'
					>
						<Image className='mmt-block-solution pt-5 w-75' src={SALES} alt='no-img'></Image>
					</Col>
				</Row>
				<Row className='align-items-center  text-center justify-content-center pb-5'>
					<Col md lg={6}>
						{/* <NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 w-100'>
								Let's solve your problem 
							</Button>
						</NavLink> */}
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							{/* <Button className='test btn btn-green px-5 py-3 font-600 w-100'> */}
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>
							Let's Take It Ahead
							</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CoreTechCards;
