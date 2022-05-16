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
import PilotMVPDevelopment from '../../../Assets/Images/MVP/PilotMVPDevelopment.png';
import SingleFeatureMVP from '../../../Assets/Images/MVP/SingleFeatureMVP.png';


const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const benefit = (
			<>
				<ul className='list-row-2'>
					<li className='list-col font-400 text-lg-start lht-27'>Affordable MVP development costs</li>
					<li className='list-col font-400 text-lg-start lht-27'>Quick development services</li>
					<li className='list-col font-400 text-lg-start lht-27'>High-quality MVP services</li>
					<li className='list-col font-400 text-lg-start lht-27'>Post-development support and maintenance</li>
					<li className='list-col font-400 text-lg-start lht-27'>End-to-End Development</li>
					<li className='list-col font-400 text-lg-start lht-27'>Innovative and creatively led strategies offered</li>
				</ul>
			</>
		);

		const startUpModel = (
			<>
				<p className='font-300 text-center text-lg-start mb-2'>Irrespective of the type of company, whether big or small or start-up, whenever a business starts to develop new features, an MVP Minimum Viable Product model is needed, which is a basic version of a new feature that is built in order to test to a targeted audience.</p>
				<p className='font-300 text-center text-lg-start mb-0'>Once you run the test, you can analyse and further improve the feature before launching the official version.</p>
			</>
		);

		const faqData = [
			{
				term: 'What are the benefits of Magic Mind MVP development Services?', 
				desc: benefit
			},
			{
				term: 'Is the MVP model only for start-ups?', 
				desc: startUpModel
			},
			{
				term: 'What is the cost of developing an MVP application?', 
				desc: (<p className='font-300 text-center text-lg-start mb-0'>The time frame to develop an MVP product totally depends on various factors like the platform, features &amp; functionalities, the experience of the developers, and much more.</p>)
			},
			{
				term: 'How long time frame does it take for MVP development?', 
				desc: (
					<>
					<p className='font-300 text-center text-lg-start mb-2'>There are several factors that decide the MVP development time, such as the platform, functionalities, the complexity of the features, assigned number of developers and their experience, and much more.</p>
					<p className='font-300 text-center text-lg-start mb-0'>Once you have shared your idea with us, we can give an estimate. Contact us to discuss your project and get a free quotation today.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`, 
				desc: (
					<p className='font-300 text-center text-lg-start mb-0'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Masterpieces start with a Great MVP Minimum Viable Product</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>MVP Minimum viable product development is to validate your product idea through market studies and user research, and accordingly present your end-users with accurate and satisfactory information. MVP offers minimum features to the users and analyses the fundamental assumptions along with foresight for future possibilities.</p>
							<p className='font-300 text-start mt-4'>MVP is not just limited to prototype, it involves concept, strategy, brainstorming ideas, learning, and analysis. A minimum Viable Productoutlines a cost-effective and efficient way to access the potential of your product.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT MVP Software Development</h2>
						</Fade>

						<Fade bottom>
							<p className="font-300 text-start mt-4 text-center font-700">Right proportion of basic functionality and unique features </p>
							<p className='font-300 text-start mt-4'>Boost time to market and reduce the cost to development with MMT MVP Development Services. Explore the potential of your idea with a well-balanced MVP at an optimum cost and time.</p>
							<p className='font-300 text-start mt-4'>Using minimum viable product agile software, you can present your product to the investors and show that your concept is worth looking into and can test your product on audiences before rolling it out to the market.</p>
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

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MVP Agile Services</h2>
								<p className='font-300 text-start mt-4 text-700'>Step up your business ROI with Magic Mind Technologies' minimum viable product agile development services to develop and launch masterpieces that are beyond outstanding. Get an in-depth understanding of whether users like your idea and whether your product meets the market demand with our MVP services, which offers:</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>CONSULTING</h3>
								<p className='font-300 text-center text-lg-start'>We offer bespoke consultation services and winning strategies to save the development costs and time of enterprises and start-ups and by developing MVP model applications successfully.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>DESIGN</h3>
								<p className='font-300 text-center text-lg-start'>We design interactive prototype designs to foresee the end-user journey along with the list of the important features to analyse the market and improve product development.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>TAILOR-MADE</h3>
								<p className='font-300 text-center text-lg-start'>MMT offers bespoke MVP app development services for start-ups as well as for enterprises, implementing modern frameworks and indulging in end-to-end development practises.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>SUPPORT</h3>
								<p className='font-300 text-center text-lg-start'>Our team of magicians provide support beyond the MVP app development phase. We are available round to clock to provide regular maintenance and support services.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Single Feature MVP</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our dedicated MVP developers design high-fidelity interactive prototype designs to foresee the user journey as well as the list of the important features that analyse the market and improve product development.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={SingleFeatureMVP} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={PilotMVPDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Pilot MVP Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>After the market analysis, the Pilot MVP development enhances your MVP from a single feature MVP model to a more advanced MVP model with added features that offer better and improved market feasibility.</p>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Ready to Experiment with Your New Idea?</p>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>What are you waiting for? Save your development cost and time to market with Magicmind MVP development services.</p>
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