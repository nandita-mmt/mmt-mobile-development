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
import AIAndAutomation from '../../../Assets/Images/DigitalTransformation/AIAndAutomation.png';
import ConstantOptimization from '../../../Assets/Images/DigitalTransformation/ConstantOptimization.png';
import DigitalApplications from '../../../Assets/Images/DigitalTransformation/DigitalApplications.png';
import DigitalTransformationConsulting from '../../../Assets/Images/DigitalTransformation/DigitalTransformationConsulting.png';
import DigitalTransformationImplementation from '../../../Assets/Images/DigitalTransformation/DigitalTransformationImplementation.png';
import DigitalTransformationStrategy from '../../../Assets/Images/DigitalTransformation/DigitalTransformationStrategy.png';
import LegacyModernisation from '../../../Assets/Images/DigitalTransformation/LegacyModernisation.png';
import StrategyAssessment from '../../../Assets/Images/DigitalTransformation/StrategyAssessment.png';
import TechnologyAssessment from '../../../Assets/Images/DigitalTransformation/TechnologyAssessment.png';


const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: `Why do businesses need digital transformation?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Digital transformation changes the way organisations operate leading to numerous business benefits including:</p>
						<ul className='list-row-2 mt-4'>
							<li className='list-col font-400 text-lg-start lht-27'>Data optimization</li>
							<li className='list-col font-400 text-lg-start lht-27'>Data-driven customer insights</li>
							<li className='list-col font-400 text-lg-start lht-27'>Enhanced customer experiences</li>
							<li className='list-col font-400 text-lg-start lht-27'>Improved productivity and efficiency</li>
							<li className='list-col font-400 text-lg-start lht-27'>Increased profits and ROI </li>
						</ul>
					</>
				)
			},
			{
				term: `What are the four major areas of digital transformation?`,
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>If you are all set to embark on your digital transformation journey, you must consider the four major areas:</p>
						<ul className='list-row-2 mt-4'>
							<li className='list-col font-400 text-lg-start lht-27'>Process transformation - modifying business processes</li>
							<li className='list-col font-400 text-lg-start lht-27'>Business model transformation - modifying the traditional business models</li>
							<li className='list-col font-400 text-lg-start lht-27'>Domain transformation - expanding into new market domains</li>
							<li className='list-col font-400 text-lg-start lht-27'>Organisational transformation - changing organisation’s culture</li>
						</ul>
					</>
				)
			},
			{
				term: `How does Magimind develop a digital transformation strategy?`,
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Our digital transformation strategy varies for businesses across different industries. It involves assessing an organisation's current digital capabilities while keeping its business goals in mind. Strategies, thereafter, are built in accordance with the competition and customer expectations in a particular industry.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Transformation is the new capital for Digital</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Increasing technological and customer evolution is driving companies to be agile, intuitive and transparent to stay competitive. It also involves radical thinking of how companies utilise technology, people &amp; processes to transform their business.</p>
							<p className='font-300 text-start mt-4'>Digital Transformation is a cultural shift in the business landscape that challenges the status quo, pushes organisations to experiment with new solutions, and embraces the change to revolutionise the way they deliver value to customers.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Digital Transformation Solutions</h2>
						</Fade>

						<Fade bottom>
							<p className="font-300 text-start mt-4 text-center">At MMT, we take a holistic approach to digital transformation to help companies adapt to new technology architectures, virtual business models and leverage the potential of digital technologies to the fullest and stay ahead of the curve.</p>
							<p className='font-300 text-start mt-4'>We help companies digitise their existing conventional processes by collecting, analysing and using the real-time data to optimise, transform the processes for engaging, delivering value to the customers and open new horizons of opportunity.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={8}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Services</h2>
							<p className='font-300 text-center mt-4'>Our digital transformation services drive impactful business benefits by optimising business processes, automating systems, and propelling innovation that help businesses champion change. </p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Digital Transformation Consulting</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our digital transformation consultants help you develop an effective strategy with measurable business outcomes and offer comprehensive solutions that take care of every part of your business' transformation process.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={DigitalTransformationConsulting} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={DigitalTransformationStrategy} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Digital Transformation Strategy</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>At Magicmind Technologies, our digital magicians help you build digital transformation strategies backed by well-devised plans that are aligned with your business needs and aid innovation on a cohesive level.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Digital Transformation Implementation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our team of experienced digital transformation providers utilise their expertise to help your business move from strategy to implementation. From embedding AI in business to facilitating digitally-enabled applications, we got your back.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={DigitalTransformationImplementation} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={DigitalApplications} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Digital Applications</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We help you facilitate an application-focused transformation. our services are inclined at empowering your business across the complete application’s lifecycle. From designing to building and managing the apps.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Legacy Modernisation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We enable innovation by tapping into the resource base of modern skill sets and empower organisations to reengineer business processes and accelerate development cycles.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={LegacyModernisation} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AIAndAutomation} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>AI and Automation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We accelerate your digital business transformation journey and help your business scale by adding intelligent artificial intelligence systems and automating processes, giving scope to build new capabilities, unlock insights, and improve overall efficiency.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={8}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The Digital Transformation Roadmap</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Strategy Assessment</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our experts start by measuring the readiness of your business for digital transformation by assessing your business' current capabilities and future-state maturity levels and build a strategic roadmap that is aligned with business goals.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={StrategyAssessment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={DigitalTransformationImplementation} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Digital Transformation Implementation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our implementation strategy includes right execution, assessing the quality of in-progress projects followed by establishing methodologies and control mechanisms necessary to safely execute complex transformation.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Technology Assessment</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>After gaining a thorough understanding of your business transformation goals, we start evaluating your current technology stack and advise any technological advancements that may be necessary to fill the identified gaps.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={TechnologyAssessment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={ConstantOptimization} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Constant Optimization</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our IT transformation services do not stop just at execution. Our experts constantly keep a check on the implemented digital transformation solutions and keep suggesting optimization strategies to support constant growth and innovation.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Key to Your Digital Transformation</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Technology</h3>
								<p className='font-300 text-center text-lg-start'>MMT's evaluates the existing technology stack for future readiness. Our digital transformation solutions help to operate through cloud-native, robust, scalable and future-ready applications</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>People</h3>
								<p className='font-300 text-center text-lg-start'>We prioritize the most integral piece of the transformation puzzle - People; by creating a silo-less work environment. Our other solutions include strategic sourcing and skill building.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Culture</h3>
								<p className='font-300 text-center text-lg-start'>Culture that inspires creativity is the cornerstone of a digital transformation strategy. We help businesses manage this culture change to achieve greater ROI on digital investments.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>AI</h3>
								<p className='font-300 text-center text-lg-start'>We accelerate your digital transformation strategy by adding intelligent systems that are scalable and can acquire and apply knowledge. We help to improve overall efficiency via time-management.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Process</h3>
								<p className='font-300 text-center text-lg-start'>MMT's Digital Transformation strategy is sustainable, scalable, repeatable and easy to replicate. We present bespoke businesses practices to increase the throughput.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why Magicmind Digital Transformation Solutions?</h2>
							<p className='font-300 text-center mt-4 text-700'>We offer custom-made solutions based on the evaluation of current capabilities of businesses that helps you achieve tangible results and establish agile processes by. We help you</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<div className='generic-card-3 pt-2'>
						<div className='generic-card'>
							<p className='font-400'>execute end-to-end digital transformation at speed and scale</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>create new revenue streams for your business</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>cut costs and risks with informed decision-making</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>redefine how you engage with the existing and prospective clientele</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>become more responsive and flexible to market trends</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>adapt and master the latest and emerging technologies for your business</p>
						</div>
						<div className='generic-card'>
							<p className='font-400'>implement the adapted technologies in new and innovative ways</p>
						</div>
					</div>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>Thinking Digital Transformation? <br />Think Magicmind</Button>
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