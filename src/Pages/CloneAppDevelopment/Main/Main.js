import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
import DOTS from '../../../Assets/Images/Common/list-dot.svg';
//import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import DatingApp from '../../../Assets/Images/CloneAppDevelopment/DatingApp.png';
import ExclusiveAndAllInclusiveApp from '../../../Assets/Images/CloneAppDevelopment/ExclusiveAndAllInclusiveApp.png';
import FoodDeliveryApp from '../../../Assets/Images/CloneAppDevelopment/FoodDeliveryApp.png';
import GroceryDeliveryApp from '../../../Assets/Images/CloneAppDevelopment/GroceryDeliveryApp.png';
import TaxiHailingCloneApps from '../../../Assets/Images/CloneAppDevelopment/TaxiHailingCloneApps.png';


const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'What is Clone App Development? ', 
				desc: (
					<>
						<p className='font-300 text-lg-start'>Clone app development for any popular app will help you to launch your business app with fewer efforts and minimum market research. For example - swiggy clone app development, uber clone app development, dream11 clone app development and much more.</p>
						<p className='font-300 text-lg-start'>Magicmind Technologies Clone app development services create highly scalable and user-friendly clone apps of all the popular and trending applications of almost every industry.</p>	
					</>
				)
			},
			{
				term: 'How much does it cost to develop clone apps?', 
				desc: (
					<>
						<p className='font-300 text-lg-start'>The cost of clone app development cannot be defined until and unless the type of app to be cloned, the script, platform, tech stack and other factors are discussed.</p>	
					</>
				)
			},
			{
				term: 'How much time does it take for swiggy clone app development or to develop whatsapp social messaging app clone?', 
				desc: (
					<>
						<p className='font-300 text-lg-start'>The time for swiggy clone app development or to develop whatsapp social messaging app clone depends on the approach which further decides the time consumption of the development. The pre-built solution saves a lot of time and is ready to use unless additional changes are required or demanded.</p>
						<p className='font-300 text-lg-start'>Want to develop whatsapp social messaging app clone?</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green py-2 font-600 w-40'>Let's get started</Button>
						</NavLink>
					</>
				)
			},
			{
				term: 'Why choose Magicmind Technologies as a Clone App Development company?',
				desc: (
					<>
						<p className='font-300 text-lg-start'>Magicmind technologies is one of the best clone development service companies. We employ the finest mobile app clone scripts to deliver robust and precise app clones to their clients. We offer:</p>
						<ul className='list-row-2'>
							<li className='list-col text-lg-start lht-27'>High functionality</li>
							<li className='list-col text-lg-start lht-27'>Affordable pricing</li>
							<li className='list-col text-lg-start lht-27'>Quality Delivery</li>
							<li className='list-col text-lg-start lht-27'>Quick launch</li>
							<li className='list-col text-lg-start lht-27'>Advanced features</li>
							<li className='list-col text-lg-start lht-27'>And much more</li>
						</ul>
					</>
				)
			},
			{
				term: 'Do you provide maintenance or support?',
				desc: (
					<>
						<p className='font-300 text-lg-start'>Of course! As a clone app development company, Magicmind Technologies takes full ownership and does not leave clients once the job is done. You can reach out to us for any of your development-related concerns and queries. We provide support during and after the development process.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`,
				desc: (
					<>
						<p className='font-300 text-lg-start'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
					</>
				)
			}
		];

		setCardFaqData(faqData);
	}, []);

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
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Interested in making clones of popular apps? Your Search Ends Here.</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Cloned applications take inspiration from the already successful online platform in the market and create a replica of the same with more added features according to business needs and requirements. </p>
							<p className='font-300 text-start mt-4'>Businesses can even add their unique features and languages to their application while cloning from the other app. Leave the headache of clone app development to us and divert your focus to other important aspects of your business.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Clone App Development Company</h2>
						</Fade>

						<Fade bottom>
							<p className='font-300 text-start mt-4'>We have a team of magicians that hold great potential and skills in developing clone apps in a scalable way that furnishes a limitless ability to expand your business on the go.</p>
							<p className='font-300 text-start mt-4'>Infused with robust functionalities and scalable features, MMT stands out as the top clone app development company with our mobile clone application development services serving many verticals and benefits many niches to accomplish in their respective business verticals.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={9}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt text-center font-xl font-200 text-center mb-0'>Benefits</h2>
								<p className='mb-5 font-300 text-center px-4 mt-4'>Our clone app development services are customizable, as per your industry niche. Here are the benefits you get by creating a clone app with our experts.</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Customised solutions</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Magic mind Technologies offer highly customizable clone app development solutions as per your business requirements.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>User-friendly design</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>The user-friendly and responsive design of our developed clone apps will seamlessly integrate and work across all the platforms and devices.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Trending technology</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We employ state-of-the-art, ground-breaking, and latest technologies to develop clone apps so that your business is staying abreast with the ongoing trends.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>User-centric approach</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We develop easy to use, easy to navigate, interactive and user-friendly clone apps that help to enhance the user experience.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>White label solution</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our clone app solutions are 100% legitimate and our developers make sure that from Logo to UI everything is custom made and unique.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Support &amp; maintenance</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our dedicated team of developers are always available round the clock to offer you support and solutions to transform your business digitally.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<p className='text-center mt-4 font-400 lht-27'>Have an idea for your clone app? Yes</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green py-2 font-600 w-40'>show me ideas</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Services</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Magicmind is a renowned clone app development company recognized to develop high-quality clone apps with a secure and safe working process through various means, the latest technologies, and minimum contact. We develop clone scripts with altercations and integration of newness to grab the same kind of attention to detail.</p>
							<p className='font-300 text-start mt-4'>Here is a list of our clone app development services:</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Taxi-hailing clone apps</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Magicmind Technologies can create Taxi-hailing Clone Apps such as uber clone app development with features that promise to provide excellent services across the selected locations with features that include:</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Sign-up</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Booking</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Rate Card</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>GPRS Rides</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Saved History</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Linked Wallets</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Bookings</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Reviews and Ratings</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Share details</li>
							</ul>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Looking for an uber clone app development company? Your search ends here.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={TaxiHailingCloneApps} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={FoodDeliveryApp} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Food Delivery app</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Magicmind Technologies believes in developing food delivery services clone app development solutions with must-have and advanced features that can double your revenue and give the best possible results, such as:</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Registration</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Select Eateries</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Schedule Take-out</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Takeaway</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Multiple Languages</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Track order</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Online Payments</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Contactless Delivery</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Review and Ratings</li>
							</ul>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Dating App</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Want to set foot in the dating industry and bring in your A-game with advanced features? Try our Dating Clone App Development Services. We integrate the latest technologies that give the best user experience with customised and essential features like:</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Profile suitability</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Prompt notification</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Communication</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Prime subscription</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Linked wallets</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Referral codes</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Panic button</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Encounter settings</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={DatingApp} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order card-ends justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={GroceryDeliveryApp} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Grocery delivery app</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'> Deliver convenience into the lives of busy people with groceries delivery clone app and deliver hassle-free services with advanced features such as:</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Multiple order</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Status update</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Linked Wallets</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Social media Login</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Product selection</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Contactless delivery</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Customer support</li>
							</ul>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Exclusive and All-Inclusive App</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Magicmind holds expertise in developing nifty clone app that provides a blend of multiple on-demand services like transport, delivery, payment and more, available on a single platform.</p>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We offer customised and updated solutions that is integrated with a myriad of features, such as:</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>User details</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Bookings and reservations</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Address</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Rate card</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Reservations</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Digital payments</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>GPS tracking</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Rides</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Share details</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Admin</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Multiple languages</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={ExclusiveAndAllInclusiveApp} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<p className='text-center mt-4 font-400 lht-27'>Clone App not listed here?</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green py-2 font-600 w-40'>Shoot us a message now!</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
			
			<Row className='align-items-center justify-content-center align-items-lg-start mb-5 pb-4 cust-margin-0'>
				<Col md lg={11} className='position-relative'>
					<Fade bottom>
						<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>FAQs</h2>
					</Fade>
					<Fade bottom>
						<Accordion preExpanded={[0]} className="faq-container">
							{cardFaqData.length > 0 ? (
								cardFaqData.map((faq, i) => {
									return (
										<AccordionItem uuid={i} className='mmt-mobile-footer-ind' key={i}>
											<AccordionItemHeading className='bg-trans'>
												<AccordionItemButton>
													<div className='mmt-faq-txt d-flex flex-row justify-content-start align-items-center'>
														<Image src={DOTS} />
														<h5 className='mmt-faq-q-txt font-600 ms-2 me-5 mb-0'>
															{faq.term}
														</h5>
													</div>
												</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												<p className='mmt-faq-a-txt mb-4 ms-3 font-400'>{faq.desc}</p>
											</AccordionItemPanel>
										</AccordionItem>
									);
								})
							) : (
								<p className='font-500 text-center'>No results found for</p>
							)}
						</Accordion>
					</Fade>
				</Col>
			</Row>
		</div>
	);
};

export default Main;