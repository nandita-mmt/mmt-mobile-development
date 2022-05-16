import React from 'react';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';
// STYLE
// import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { BiCircle } from 'react-icons/bi';
// import OwlCarousel from 'react-owl-carousel';
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

	// /* Carousel */
	// const responsiveTxt = {0: {items: 1}, 992: {items: 4}};
	// const toggleColor = () => {
	// 	const className = 'hover-green';
	// 	const isActiveSlideGreen = $('#carousel-parent').find('.owl-item.active').children('.mmt-car-content').hasClass('green');

	// 	if(isActiveSlideGreen) {
	// 		document.getElementById('carousel-parent').classList.remove(className);

	// 	} else {
	// 		document.getElementById('carousel-parent').classList.add(className);
	// 	}
	// }

	return (
		<div className='default-page-main'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Managing Your Restaurant Operations Just Got Easier</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Appetyzer is an innovative restaurant management software system that helps foodservice owners to kick-start or expand their businesses. Our restaurant management application offers easy-to-use, app-etizing solutions to restaurant and food chains to streamline the entire process of restaurant operations.</p>
							<p className='font-700 text-start mt-4'>Transform your Foodservice Business with The Gen Z Features</p>
							<p className='font-300 text-start mt-4'>The modern generation, especially gen Z, expects digital channels to make ordering and payment solutions hassle-free. Technology has brought us closer together than ever before, and the restaurant business is already reaping the benefits of these advancements.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Run a Successful Restaurant Business with Appetyzer</h2>
						</Fade>
						<Fade bottom>
							<p className='font-700 text-start mt-4 mb-0'>Mark Your Restaurant Presence Online with our restaurant management software.</p>
							<p className='font-300 text-start mt-1'>Create your own online ordering website or integrate it with online indicators.</p>
							<p className='font-700 text-start mt-4 mb-0'>Improve Operational Time</p>
							<p className='font-300 text-start mt-1'>Automate order management, kitchen processes, billing and more.</p>
							<p className='font-700 text-start mt-4 mb-0'>Customize Your Services on Demand</p>
							<p className='font-300 text-start mt-1'>Offer personalized promotions &amp; discounts to retain your customers.</p>
							<p className='font-700 text-start mt-4 mb-0'>Track Customer's Preferences</p>
							<p className='font-300 text-start mt-1'>Track your customers' preferences and design your menu accordingly.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-0 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Features</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4'>Experience seamless operations with Appetizing features.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Restaurant POS Software</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Restaurant point-of-sale or POS software helps you manage your dine-in, walking order, online order and third party food order at your fingertips. Our restaurant POS module has a user-friendly UI and an easy navigation system for any type of user.</p>
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
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Order Management System</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Appetyzer has an effective order management feature that helps to manage orders of customers. As well as, it helps to perform all order related activities automatically.</p>
						</Fade>
						<Fade bottom>
							<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
								<Button className='btn btn-green px-4 py-2 font-400 w-8'>Know More</Button>
							</NavLink>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Table Reservation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Table reservation is a very important factor for any restaurant management system. Appetyzer empowers your customers to reserve a table online for a seamless dining experience. The customers can get updated information about the table vacancy.</p>
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
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Feedback management</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Show your customers that you care by using Appetyzer’s feedback management feature to collect their vital feedback. Set up rapid alerts for negative reviews so you can respond quickly to dissatisfied guests.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Account Management</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Appetyzer's account management feature is designed to perform account-related tasks easily and accurately. All calculations are automated. Simply input your data accurately, and get accurate results within a few moments.</p>
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
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Purchase Management System</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our purchase management feature empowers foodservice businesses to perform purchase-related tasks without any hassles. This feature is automatic, time-efficient, transparent, and measurable for users.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Inventory Management</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>View data in a thorough graphical and tabular format for easy understanding. Get sales information on an hourly, daily, and monthly basis. Inventory Reports in Appetyzer restaurant inventory management software will keep you informed about daily stock use.</p>
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
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Central kitchen management</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Chefs and attendants can manage the overall circulation of the food. With Appetyzer restaurant inventory management software, they can view and assess the stock requirements of the outlet and proceed accordingly.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<p className='font-300 text-start mt-4'>Embrace Appetyzer Restaurant Management Software to  Embrace Efficiency</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>Just One FREE Trial Away</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Main;