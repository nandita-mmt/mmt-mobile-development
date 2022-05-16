import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
import DOTS from '../../../Assets/Images/Common/list-dot.svg';
//import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import CloudBasedWebApplicationSaaSDevelopment from '../../../Assets/Images/WebPractice/CloudBasedWebApplicationSaaSDevelopment.png';
import CustomWebApplicationDevelopment from '../../../Assets/Images/WebPractice/CustomWebApplicationDevelopment.png';
import ECommerceDevelopment from '../../../Assets/Images/WebPractice/ECommerceDevelopment.png';
import MaintenanceAndSupport from '../../../Assets/Images/WebPractice/MaintenanceAndSupport.png';
import PortalDevelopment from '../../../Assets/Images/WebPractice/PortalDevelopment.png';
import SystemIntegrations from '../../../Assets/Images/WebPractice/SystemIntegrations.png';
import UIUXDevelopment from '../../../Assets/Images/WebPractice/UIUXDevelopment.png';
import WebsiteDevelopmentAndMaintenance from '../../../Assets/Images/WebPractice/WebsiteDevelopmentAndMaintenance.png';
import WebStrategyAndConsultation from '../../../Assets/Images/WebPractice/WebStrategyAndConsultation.png';


const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'What is the difference between a Native App and a Web App?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>A web app works via the web browser and requires either wi-fi or cell signal for its functioning whereas the Native app is installed directly on the mobile phone. In most cases, depending upon the nature of the app, Native apps can work without using an internet connection</p>
					</>
				)
			},
			{
				term: 'What is the best platform to build Web Applications?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>There are many platforms to build web applications, a few popular among them are &ndash;</p>
						<p className='font-300 text-start font-700 mt-0'>AngularJs</p>
						<p className='font-300 text-start font-700 mt-0'>ASP.net</p>
						<p className='font-300 text-start font-700 mt-0'>Ruby on Rails</p>
						<p className='font-300 text-start font-700 mt-0'>Node JS</p>
						<p className='font-300 text-start font-700 mt-0'>React</p>
					</>
				)
			},
			{
				term: 'What technologies do you make use of for web development services?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>Our team is well-versed with top-end technologies and trends in web development &ndash; web &amp; full-stack development technologies, CMS solutions, back-end framework technologies, and hybrid website application development tools.</p>
						<p className='font-300 text-start mt-0'>So, we are able to utilise just everything latest and finest going with the right plan and selection of technologies to get you the best results with web development.</p>
					</>
				)
			},
			{
				term: 'How long will it take to get started with the project?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>As our experienced project analysts and technical experts will be working on figuring out options and calculating estimations of your website development project, we can offer you the project milestones, team profile, and quote within 48 hours of project speculation.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`, 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Engineering Next-gen Web Applications</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>A website is your brand's digital hub that gives a brand identity and the web development is the first step of your branding journey towards the online world.  In the age of interconnectivity and digital transformation, web development services are skyrocketing inescapably.</p>
							<p className='font-300 text-start mt-4'>Businesses of all sizes and verticals are putting in their best efforts to enhance their brand visibility by approaching end-to-end web app development company that deals with designing, building, supporting, and evolving all types of websites and web-based software.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center'>MMT Web Development Services</h2>
						</Fade>

						<Fade bottom>
							<h4 className='font-300 text-center mb-0'>The Impactful Sync of Art &amp; Code</h4>
							<p className='font-300 text-start mt-4'>The functional synchronisation of coding and cognition of our magicians create crafted futuristic website and web applications that attract, amaze and convert.</p>
							<p className='font-300 text-start mt-4'>Magicmind Technologies is one of the top web development companies in US, India, UK and Canada that provides a comprehensive assortment of superior and bespoke solutions and web design and development services for companies of all sizes and verticals.</p>
							<p className='font-300 text-start mt-4'>Witness breath-taking results with our perfect blend of content, technology, insight and data. Take your business to greater heights with Magicmind Technologies web app development company.</p>

							<Row className='align-items-center end-cta text-center justify-content-center pt-2 pb-5'>
								<Col md lg={6} className="testt">
									<NavLink exact className='customNavLink' to={'/'}>
										<Button className='btn btn-green px-5 py-2 font-600 w-40'>Show me How</Button>
									</NavLink>
								</Col>
							</Row>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4'>
						<Col md lg={11}>
							<Fade bottom>
								<h1 className='mmt-web-resp-txt font-xl font-200 text-center mb-4'>Unparalleled Website Take-Aways for A Thriving Growth</h1>
							</Fade>
							<Fade bottom>
								<p className='mb-1 font-300 mt-1 font-500'>Customised Business Website Development</p>
								<p className='mb-1 font-300 mt-1'>Not every business is same, and so are the websites! Get your vision of a personalised web portal crafted to your unique requisites</p>
								<p className='mb-1 font-300 mt-1 font-500 mt-4'>Digitally Responsive</p>
								<p className='mb-1 font-300 mt-1'>Channelise the possibilities of your web portal to expand your reach by connecting it directly social media pages with our <strong>creative web development</strong> services</p>
								<p className='mb-1 font-300 mt-1 font-500 mt-4'>Fresh Branding</p>
								<p className='mb-1 font-300 mt-1'>With outstanding concepts of <strong>seo web development</strong> incorporate graphics, contents and responsive buttons that provide a fresh UX for your target audience.</p>
								<p className='mb-1 font-300 mt-1 font-500 mt-4'>Streamlined Operations</p>
								<p className='mb-1 font-300 mt-1'>Get a website that is compatible with the functionalities of an analytics tool &amp; generates real-time data enabling quick decision making.</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Web development cycle</h2>
								<p className='mb-5 font-300 text-center mt-4'>The Journey from a great idea into profitable business solutions of any web app development company requires a specific development cycle.</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Strategy</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We dive into your business model, market challenges and product positioning, and help you create a product that delivers unique value.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Product Design</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We deploy a cross-functional team made of "Strategists, Designers and Developers" to help our clients explore what's possible with emerging technologies.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Development</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We have highly skilled teams that stay lean and rapidly deploy customized solutions for each client. We assign experienced managers to every project to ensure code quality.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Quality Assurance</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We test in all the iterative stages of product development to create bug-free, reliable, safe and secure solutions.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-center justify-content-center pt-2 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Rethink, Redesign, Reinvent</h2>
							<p className='font-300 text-center text-lg-start mt-4 mb-4'>Magicmind Technologies always aim to create magic with breakthrough technologies, winning strategies, and innovative designs and provide bespoke web development solutions to build a robust, secure, and highly scalable bespoke web application.</p>
							<p className='mb-5 font-300 text-center text-lg-start mt-0'>We provide an extensive array of web development services, backed by advanced technologies and powered by innovation.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Custom Web Application Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Whether you need a custom web application development from scratch or streamlining an existing front-end functionality, we got your back. From cross-platform experiences to portals developments, we craft bespoke solutions and deliver end-to-end web solutions for your business.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={CustomWebApplicationDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={PortalDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Portal development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We hold expertise in creating enterprise-level portals as well as web portals by integrating expansive collaborative capabilities, access to aggregated information, self-service workflows and enterprise social functionality for better cost-efficiency, best performance, and growth potential.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>UI/UX development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our UI/UX design experts scale and transform businesses by crafting functional, user-friendly, interactive and beyond outstanding interfaces for your websites that are user-centric and result-oriented and improves conversion and revenue.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={UIUXDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CloudBasedWebApplicationSaaSDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Cloud-based Web Application (SaaS) Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We help SaaS start-ups and enterprises across multiple verticals and industries deliver better software products and innovate at scale with exceptional results, by designing and building state-of-the-art cloud-based solutions.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>eCommerce development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We understand the crux of e-commerce and therefore, offer end-to-end eCommerce solutions that deliver an interactive and intuitive experience with features like payment gateway integration, appealing UX for a delightful experience to the end-users and much more.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={ECommerceDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={WebsiteDevelopmentAndMaintenance} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Website development and maintenance</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We create websites with easy navigation, robust information architecture, visual cues for users, and action-oriented design. Our services include content development and management system, navigation design, user interface designing and much more.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>System Integrations</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We incorporate a broader app ecosystem into your digital product to enhance the solution efficiency and minimise operational costs. We integrate APIs and 3rd party components into your web applications such as ERPs, CRMs, SaaS platforms.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={SystemIntegrations} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={WebStrategyAndConsultation} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Web Strategy and Consultation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We are not limited to developing web apps and portals. We are known to devise and offer winning and creatively-led strategies to deliver a product that fits right in your business brand and vision and  for scalable and unprecedented growth and assured ROI.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Maintenance and Support</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We do not stop at developing and deploying your web development project. We offer end-to-end maintenance and support from fixing bugs or adding new functionality. We keep your digital platform running smoothly. We also document and provide support for all your future needs.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={MaintenanceAndSupport} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>Let's Take It Ahead</Button>
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