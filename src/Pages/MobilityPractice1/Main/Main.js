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
import ContentMarketing from '../../../Assets/Images/DigitalMarketing/ContentMarketing.png';
import EmailMarketing from '../../../Assets/Images/DigitalMarketing/EmailMarketing.png';
import PayPerClickAdvertising from '../../../Assets/Images/DigitalMarketing/PayPerClickAdvertising.png';
import SearchEngineOptimization from '../../../Assets/Images/DigitalMarketing/SearchEngineOptimization.png';
import SocialMediaMarketing from '../../../Assets/Images/DigitalMarketing/SocialMediaMarketing.png';

const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'What is Digital Advertising?', 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Digital Advertising refers to all the online promotional activities including advertisements, messages and banner ads posted through email, social media, search engines by various channels.</p>
					</>
				)
			},
			{
				term: 'Do you provide services to start-ups?', 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Whether you are a start-up or an established business, we offer digital marketing services for small businesses and start-ups offering you all that you would need to get your business a significant boost.</p>
						<p className='font-300 text-center text-lg-start mb-0'>Our digital marketing consulting services involve devising a business plan and digital advertising strategy that will guide our actions starting from all the creative work to running and analysing the campaigns.</p>
					</>
				)
			},
			{
				term: 'How long does it take to see a good ranking, organically?', 
				desc: (<p className='font-300 text-center text-lg-start mb-0'>We believe in complete transparency, so we don't offer false commitments. To see your business in good ranks through an organic approach is going to take days, months or even a year. At Magicmind, we perform an in-depth analysis to determine the success of our efforts at various levels and on various channels to find out where we are losing the ground and how we can level up our strategy.</p>)
			},
			{
				term: 'What is your digital marketing agency pricing?', 
				desc: (
					<>
					<p className='font-300 text-center text-lg-start mb-2'>Speaking of digital marketing agency pricing, we are a renowned digital marketing company with a set process. Depending upon your company's needs, requirements and budget, we will offer you customised strategies and services, and hence the prices mostly vary from project to project and client to client. Similarly, digital marketing agency pricing varies from company to company.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Crafting Human Connections with Digital Experience</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Digital marketing is a multi-faceted concept that combines various tools and techniques to build a brand, improve visibility, and enable greater return on investment.</p>
							<p className='font-300 text-start mt-4'>As a reputed internet marketing agency, we are focused on expanding your business with our best digital marketing services.</p>
							<p className='font-300 text-start mt-4'>With a powerful combination of a range of internet marketing services, we give your business the edge it needs to thrive in the dynamically changing digital landscape.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={9}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Benefits of Digital Marketing</h2>
						</Fade>

						<Fade bottom>
							<p className="font-300 text-start mt-4 text-center font-700">AS YOU BOOST, SO SHALL YOU GROW!</p>
							<ul className='list-row-2'>
								<li className='list-col font-400 text-lg-start lht-27'>Large Audience Reach</li>
								<li className='list-col font-400 text-lg-start lht-27'>Brand Visibility</li>
								<li className='list-col font-400 text-lg-start lht-27'>Brand Awareness</li>
								<li className='list-col font-400 text-lg-start lht-27'>Higher Engagement</li>
								<li className='list-col font-400 text-lg-start lht-27'>Better Conversion Rates</li>
								<li className='list-col font-400 text-lg-start lht-27'>Higher Revenues</li>
								<li className='list-col font-400 text-lg-start lht-27'>Cost-Effective Marketing</li>
								<li className='list-col font-400 text-lg-start lht-27'>Real-Time Results</li>
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
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Digital Marketing Services</h2>
								<h4 className='text-center mt-3'>Providing Value, Building Trust</h4>
								<p className='font-300 text-start mt-4 text-700'>The diversity of Magicmind's offerings is not just limited to IT services. We have been constantly expanding our horizons. Magicmind Technologies is a dynamic, versatile and full service digital marketing company that is armed with diverse perspectives and experiences to develop world-class digital experiences that help businesses become the Internet Titan of their niche.</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>We Give You the ROI You Deserve</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Dedicated Staff</h3>
								<p className='font-300 text-center text-lg-start'>Your business will have access to all of the right MMT experts and innovative strategies and solutions to meet your marketing goals &amp; objectives.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Transparent Communication</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>No one likes being in the dark. MMT provide proactive updates and project check-ins and keeps every communication transparent.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Fast Execution</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our project sprints ensure that the marketing campaigns crafted and executed for your company can quickly make an impact.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Real Time Analytics</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>MMT furnishes full access to the performance dashboard that showcases the current performance and ROI.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Search Engine Optimization</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Get on top of Google search with high website visibility with the best digital marketing agency that will boost the CTR (Click Through Rate) and sales.</p>
							<ul className='list-row-2'>
								<li className='list-col font-700 text-lg-start lht-27'>Leave your competitors behind</li>
								<li className='list-col font-700 text-lg-start lht-27'>Gain an online presence</li>
								<li className='list-col font-700 text-lg-start lht-27'>Increase conversion rates</li>
								<li className='list-col font-700 text-lg-start lht-27'>Make your brand visible</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={SearchEngineOptimization} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={PayPerClickAdvertising} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Pay Per Click Advertising</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>PPC advertising is one of the most effective digital marketing strategies. Ourr Magicians create thoughtful PPC campaigns that bring more conversions and revenue.</p>
							<ul className='list-row-2'>
								<li className='list-col font-700 text-lg-start lht-27'>Measurable ROI</li>
								<li className='list-col font-700 text-lg-start lht-27'>Maximum Brand Exposure</li>
								<li className='list-col font-700 text-lg-start lht-27'>Immediate Impact</li>
								<li className='list-col font-700 text-lg-start lht-27'>Control of Budget</li>
							</ul>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Content Marketing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our tailor-made content marketing plan ensures quality content targeted to the right audiences is promoted on different networks to help businesses increase website's traffic.</p>
							<ul className='list-row-2'>
								<li className='list-col font-700 text-lg-start lht-27'>Build Authority and Credibility</li>
								<li className='list-col font-700 text-lg-start lht-27'>Improve Lead Generation</li>
								<li className='list-col font-700 text-lg-start lht-27'>Improve SEO &amp; Online Visibility</li>
								<li className='list-col font-700 text-lg-start lht-27'>Build Trust with Your Target Audience</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={ContentMarketing} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SocialMediaMarketing} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Social Media Marketing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We boost your growth with services through social media marketing services such as social media engagement &amp; social ad campaigns, profiling, channel &amp; competitor analysis.</p>
							<ul className='list-row-2'>
								<li className='list-col font-700 text-lg-start lht-27'>More Inbound Traffic </li>
								<li className='list-col font-700 text-lg-start lht-27'>Better Search Engine Rankings</li>
								<li className='list-col font-700 text-lg-start lht-27'>Improved Brand Loyalty</li>
								<li className='list-col font-700 text-lg-start lht-27'>Higher Conversion Rates</li>
							</ul>
						</Fade>
					</Col>
				</Row> 

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Email Marketing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our custom email marketing campaign includes designing emails, testing email campaigns, and optimising campaigns to provide a more personalised experience and drive valuable conversions.</p>
							<ul className='list-row-2'>
								<li className='list-col font-700 text-lg-start lht-27'>Deliver Targeted Messages</li>
								<li className='list-col font-700 text-lg-start lht-27'>Reach a Global Audience </li>
								<li className='list-col font-700 text-lg-start lht-27'>Instant Impact</li>
								<li className='list-col font-700 text-lg-start lht-27'>Generate Huge Revenue</li>
							</ul>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={EmailMarketing} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>OUR MARKETING STRATEGY</h2>
						</Fade>
						<Fade bottom>
							<p className='font-700 text-center mb-0 mt-4'>MARKETING ANALYSIS</p>
							<p className='font-700 text-center mb-0 mt-0'>FORMULATE A MARKETING PLAN</p>
							<p className='font-700 text-center mb-0 mt-0'>SELECTION OF MARKETING CHANNELS</p>
							<p className='font-700 text-center mb-0 mt-0'>TARGETING AUDIENCE &amp; MEDIA</p>
							<p className='font-700 text-center mb-0 mt-0'>CONVERSION ANALYSIS</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center end-cta text-center justify-content-center pb-5'>
					<Col md lg={6} className="testt">
						<p className='text-center font-400'>Want to see how we craft your business roadmap to success?</p>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							<Button className='btn btn-green px-5 py-2 font-600 w-40'>Share your digital vision - GET STARTED</Button>
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