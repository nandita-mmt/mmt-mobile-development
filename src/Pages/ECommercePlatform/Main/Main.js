import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
// import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
// import DOTS from '../../../Assets/Images/Common/list-dot.svg';
import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';

const Main = () => {
	// const [cardFaqData, setCardFaqData] = useState([]);

	// useEffect(() => {
	// 	const faqData = [
	// 		{
	// 			term: 'Duis quis mauris et arcu', 
	// 			desc: 'Duis vitae feugiat quam. Proin sit amet blandit elit. Etiam sit amet lorem sollicitudin, faucibus est ut, egestas neque. Integer pretium libero magna, at ultricies risus maximus vitae. '
	// 		},
	// 		{
	// 			term: 'Aenean facilisis turpis', 
	// 			desc: 'Duis lobortis lobortis porttitor. Sed a auctor urna. Vivamus quis ipsum vitae libero convallis blandit eget nec leo. Pellentesque eu ligula id lorem accumsan venenatis eu id lectus. Donec ac mi non nibh molestie cursus.'
	// 		},
	// 		{
	// 			term: 'Duis lobortis lobortis porttitor', 
	// 			desc: 'Nulla ut diam nec lorem feugiat malesuada ac id nunc. Duis sem velit, placerat sit amet feugiat ac, pellentesque a diam.'
	// 		}
	// 	];

	// 	setCardFaqData(faqData);
	// }, []);

	/* Carousel */
	const responsiveTxt = {0: {items: 1}, 992: {items: 4}};
	const toggleColor = () => {
		const className = 'hover-green';
		const isActiveSlideGreen = $('#carousel-parent').find('.owl-item.active').children('.mmt-car-content').hasClass('green');

		if(isActiveSlideGreen) {
			document.getElementById('carousel-parent').classList.remove(className);

		} else {
			document.getElementById('carousel-parent').classList.add(className);
		}
	}

	return (
		<div className='default-page-main'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5'>
				<Row className='card-fill align-items-center justify-content-center pt-2 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The Future of eCommerce Platform is Here</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Go Global, Grow Global With E-commerce Platform</p>
							<p className='font-300 text-start mt-4'>E-commerce Platform is a tailored tech-powered and creativity backed eCommerce Solution that launches your online business on a global scale. From managing e-commerce to inventory to customer experience management - it helps you in the entire value chain of your online business ecosystem.</p>
							<p className='font-300 text-start mt-4'>Get your services online and build your own brand or start an online marketplace and welcome other sellers in the online world - the future of the marketplace!</p>
							<p className='font-700 text-start mt-4'>Fully Integrated Ecommerce Platform</p>
							<p className='font-300 text-start mt-4'>Integrate our best-in-class built-in integrations to build smarter, efficient and cost-effective eCommerce solutions for your business. No need to struggle with conflicting apps and plugins. Set up an eCommerce site and build an intuitive, cost-effective and easy to maintain eCommerce store and take your business to new heights.</p>
							<h4 className='font-700 text-start mt-4'>Give your business the Unfair Advantage</h4>
							<ul>
								<li className='font-300'>Faster Performance</li>
								<li className='font-300'>Infinitely Scalable</li>
								<li className='font-300'>Security</li>
							</ul>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill align-items-center justify-content-center pt-2 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-start mb-3'>We Got You Covered</h2>
						</Fade>
						<Fade bottom>
							<ul>
								<li className='font-300'>B2B Marketplaces</li>
								<li className='font-300'>Multi-Tier Channel Ecommerce</li>
								<li className='font-300'>Enterprise Marketplaces</li>
								<li className='font-300'>Procurement Marketplaces</li>
								<li className='font-300'>Manufacturer Channel/Supply Chain Solutions</li>
								<li className='font-300'>Multi-Store Ecommerce</li>
							</ul>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>eCommerce Platform &ndash; Delivering Wonders Online</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Sell anywhere</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Set up an eCommerce site in minutes and easily sync and sell across a website. Get started with one, or try them all.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Grow faster</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Feel the digital power. With an online presence, sell your products and services easily, anywhere, to anyone — across the internet and around the world.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Multiple Benefits</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Control everything from a single platform with centralized inventory, order management, and pricing. It doesn't get any simpler than this.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Manage simply</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Control everything seamlessly from a single dashboard with centralized inventory, order management, pricing, and more. </p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Designed for diverse business models</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Multi-Seller Marketplaces</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Feature-rich, multi-seller marketplace for B2B or B2C business model that brings higher traffic and conversions. Easy management of vendors, orders, shipping and commissions from the feature-rich dashboard.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Multi-Store Portals</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Reach a targeted audience with multiple storefronts of your store. Improve Google rank and marketing ROI with unique URLs. Manage custom deals, inventory and shipping from a common dashboard.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>B2B Services</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Set up your custom B2B portal for a variety of products and services. Give your business an edge with a host of complex B2B eCommerce features integrated seamlessly with your portal for higher ROI.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Multilingual Portals</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Explore the global markets with multilingual websites that connect better with audiences and boost sales. Offer multi-currency payments and IP location-based pricing. Manage business better with a multilingual dashboard.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>E-Learning Portals</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Offer advanced learning opportunities with E-Learning Portal that has custom workflows for various test levels. Build a scalable and flexible portal that accommodates millions of users and unique flows.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Hyper-local Ecommerce Stores</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Ace Hyper-local Ecommerce with Geolocation-based sub-stores. Onboard partners and cater to customers in new locations. Offer different products, discounts, pricing, logistics services etc. on each store.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>Ready to leverage the power of E-commerce?</h2>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>Your free trial is just a few clicks away</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;