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
import AppPrototypingAndStrategy from '../../../Assets/Images/MobilityPractice/AppPrototypingAndStrategy.png';
import BetterCustomerEngagement from '../../../Assets/Images/MobilityPractice/BetterCustomerEngagement.png';
import BusinessAnalytics from '../../../Assets/Images/MobilityPractice/BusinessAnalytics.png';
import CustomMobileAppDevelopment from '../../../Assets/Images/MobilityPractice/CustomMobileAppDevelopment.png';
import IncreasedSales from '../../../Assets/Images/MobilityPractice/IncreasedSales.png';
import MCommerceB2BAndB2C from '../../../Assets/Images/MobilityPractice/MCommerceB2BAndB2C.png';
import ReducedMarketingCost from '../../../Assets/Images/MobilityPractice/ReducedMarketingCost.png';
import StandOutFromTheCrowd from '../../../Assets/Images/MobilityPractice/StandOutFromTheCrowd.png';
import SupportAndMaintenance from '../../../Assets/Images/MobilityPractice/SupportAndMaintenance.png';

const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: `What are the different types of mobile apps?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>There are mainly three types of mobile apps if we categorise them by the technology used to code them: native mobile app development, hybrid app development and web-based mobile apps like progressive web app (PWA).</p>
					</>
				)
			},
			{
				term: `What programming languages and technologies are used for mobile application development?`,
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>We use Objective-C and Swift for iOS app development and Java and Kotlin for Android app development. For cross-platform app development, we use Flutter, React Native and Ionic.</p>
					</>
				)
			},
			{
				term: 'How much does it cost to develop a mobile app?',
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>The cost of development of mobile apps depends on many factors such as the development platform, app categories, app complexity, country of developer and number of features you need in your app.</p>
					</>
				)
			},
			{
				term: 'How long does it take to build a mobile app?',
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Figuring out the development time of a mobile app depends on various factors like development platform, complexity of the design, experience level of developer, features and functionality, testing and many more.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`,
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
					</>
				)
			}
		];

		setCardFaqData(faqData);
	}, []);

	/* Carousel */
	const responsiveTxt = {0: {items: 1}, 992: {items: 2}, 1200: {items: 4}};
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
							<p className='font-300 text-start mt-4'>A mobile app has become a necessity for businesses nowadays to grow and flourish in this mobile-first world. It not only offers an unprecedented opportunity for your organisation to reach out to your customers but also helps to build strong brand recognition.</p>
							<p className='font-300 text-start mt-4'>Mobile applications are becoming very popular among businesses and service providers. Magicmind offers bespoke mobile applications solutions from inception to delivery. We help you to add value to your app ideas.</p>
							<p className='font-300 text-start mt-4'>Is your business geared up to serve users who live in the mobile world?</p>
						</Fade>
					</Col>
				</Row>

				<Row className='backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why Mobile Apps for your Business?</h2>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Increased Sales</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>The availability of your business app in a mobile-first generation will increase the chance to get more sales.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={IncreasedSales} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={BetterCustomerEngagement} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Better Customer Engagement</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Mobile apps help businesses to interact with customers and provide responses to their concerns with minimal lag time.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Stand Out from the Crowd</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Mobile apps help your business grab the attention of potential customers, build strong customer loyalty, and remain ahead of the competition.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={StandOutFromTheCrowd} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={BusinessAnalytics} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Business Analytics</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Collect user-specific data for your business and work on customer feedback through a mobile app to offer better services to the customers.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Reduced Marketing Cost</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Mobile marketing will not burn a hole in your pocket. Your app will send out notifications of your launched products or services to your targeted customers.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={ReducedMarketingCost} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Mobile App Development Services</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>IOS Mobile App Development</h3>
								<p className='font-300 text-center text-lg-start'>Our magicians create premier quality, reliable, high-performing iOS applications with interactive features, engineered to meet users' expectations and resolve overarching business challenges and serve users.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Android Mobile App Development</h3>
								<p className='font-300 text-center text-lg-start'>We offer android mobile app development services and solutions from design to development to testing to support, that suit best to clients' needs and requirements. We create and deliver feature-packed and quality-rich applications. </p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Cross-Platform App Development</h3>
								<p className='font-300 text-center text-lg-start'>We bring the best mobile technology to your business through our native mobile app development services. We create robust, scalable, and intuitive mobile applications by following a standardised cross-platform mobile application development process.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Hybrid Mobile App Development</h3>
								<p className='font-300 text-center text-lg-start'>We provide the best-in-class hybrid app development solutions to clients using the latest software and technologies. Our hybrid mobile app development specialists boast great expertise and in-depth knowledge of working with the latest frameworks.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Mobile Application Development Services</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Here at Magicmind Technologies, we challenge traditional boundaries, from newer buzzwords like AI/MLto good old fashioned mobile application development services like UX design and strategy.</p>
							<p className='font-300 text-start mt-4'>At Magicmind, we turn raw ideas into a powerful, working product. We chisel broad innovative concepts and winning corporate strategies to create futuristic apps with meticulous research, and robust analytics that creates high-level ROI for companies.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Custom Mobile App Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our team will develop the perfect app matching your requirements; We turn your vision into crafted apps. Our custom mobile app development services are powered by technology and driven by innovation to supersede your expectations.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={CustomMobileAppDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AppPrototypingAndStrategy} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>App Prototyping &amp; Strategy</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>From new ideas for start-ups to fresh concepts for already established companies, we create prototype applications to understand how an idea can be successful. We inspect and analyse our well-devised strategy to ensure successful delivery and ultimate satisfaction.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>mCommerce, B2B and B2C</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Whatever your target market is, we offer the best approach, tailored to meet the business requirements. We have designed and developed mCommerce, B2B and B2C mobile applications where security, efficiency, performance is given the highest priority.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={MCommerceB2BAndB2C} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SupportAndMaintenance} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Support &amp; Maintenance</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We provide 24/7 round the clock support and maintenance services beyond your project delivery. Whether you are looking for already built mobile application support &amp; maintenance or pre-launch and post app development services, we got your back.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Smart, Lean, &amp; Agile</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Magicmind Technologies follow the Agile project management process to get things done faster and with maximum quality. Agile methodologies allow our magicians to recognize better paths for the app and go for better opportunities when and as they emerge.</p>
							<p className='font-300 text-start mt-4'>With agile methodology, we build products iteratively and incrementally. At Magicmind, we utilise the unparalleled flexibility of our team and build the apps in smaller parts so that we deliver quickly and frequently.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The MMT Process</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4'>We break down the entire project into several phases, each phase dedicated to taking the project further to completion.</p>
							<div className='generic-card-3 pt-2'>
								<div className='generic-card'>
									<h3 className='heading'>Discover</h3>
									<ul>
										<li>Requirement gathering</li>
										<li>Timeline planning</li>
										<li>Commercials</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Development</h3>
									<ul>
										<li>Technology selection</li>
										<li>API</li>
										<li>integrations DevOps in action</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Support &amp; Maintenance</h3>
									<ul>
										<li>Troubleshooting</li>
										<li>24/7 support</li>
										<li>Managed services</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>UI/UX Design</h3>
									<ul>
										<li>Wireframe Designing</li>
										<li>Prototyping</li>
										<li>Brand styling &amp; preset creation</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Quality Assurance</h3>
									<ul>
										<li>User test creation</li>
										<li>Manual testing</li>
										<li>Automation testing</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Prototypes</h3>
									<ul>
										<li>Low-fidelity prototyping</li>
										<li>High-Fidelity prototyping</li>
										<li>Applying design thinking</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Deployment</h3>
									<ul>
										<li>Application handover</li>
										<li>Marketplace launches</li>
										<li>App store submissions</li>
									</ul>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
			
			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={10}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why Choose Magicmind Technologies?</h2>
							<p className='mb-5 font-300 text-center mt-2'>Customer-centric mobile application development needs a tech-minded partner, not just a vendor.</p>
						</Fade>
						<Fade bottom>
							<p className='mb-1 font-300 mt-1 font-500'>Agile Development Methodology</p>
							<p className='mb-1 font-300 mt-1 mb-4'>We follow the Agile development methodology to facilitate rapid product releases with stability and high-quality code.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Bug-Free Deployment</p>
							<p className='mb-1 font-300 mt-1 mb-4'>Our QA professionals use a combination of manual and automation testing to ensure that the app is released bug-free.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Cost-Efficient</p>
							<p className='mb-1 font-300 mt-1 mb-4'>High-quality services and affordability may not be offered together elsewhere.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Expert Native Developers</p>
							<p className='mb-1 font-300 mt-1 mb-4'>Your apps will be built by qualified, experienced and passionate iPhone app developers who see their work as pieces of art.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Inspirational UI/UX</p>
							<p className='mb-1 font-300 mt-1 mb-4'>Our UI/UX designs are inspired by the habits and actions that users have become accustomed to.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Non-disclosure Agreement</p>
							<p className='mb-1 font-300 mt-1 mb-4'>Every project would be accompanied by an NDA where we agree not to share your project details with any outsider.</p>
							<p className='mb-1 font-300 mt-1 font-500'>Transparent &amp; Competitive</p>
							<p className='mb-1 font-300 mt-1 mb-4'>Our devs, tech leads and the rest of the team take pride in delivering what is promised to the client.</p>
							<p className='mb-1 font-300 mt-1 font-500'>On-Time Delivery</p>
							<p className='mb-1 font-300 mt-1'>We know how it feels when someone fails to meet their deadlines. So we take acute measures to ensure that the project is delivered on time, if not earlier.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5 mt-4'>
					<Col md lg={6} className="testt">
						<p className='mb-1 font-300 mt-1 text-center'>Do you have a Vision, Mission, Passion.</p>
						<p className='mb-1 font-300 mt-1 text-center'>We have a TEAM to get you there.</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'> Get In Touch!</Button>
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
												{faq.desc}
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