import React, { useState, useEffect } from 'react';
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
import BuildingWireframes from '../../../Assets/Images/UIAndGraphics/BuildingWireframes.png';
import CompletedInterface from '../../../Assets/Images/UIAndGraphics/CompletedInterface.png';
import DesignImplementation from '../../../Assets/Images/UIAndGraphics/DesignImplementation.png';
import FinalDesignAndRevisions from '../../../Assets/Images/UIAndGraphics/FinalDesignAndRevisions.png';
import StrategyFormation from '../../../Assets/Images/UIAndGraphics/StrategyFormation.png';
import UnderstandingTheVision from '../../../Assets/Images/UIAndGraphics/UnderstandingTheVision.png';
import UsabilityTestingDesignIterations from '../../../Assets/Images/UIAndGraphics/UsabilityTestingDesignIterations.png';
import VisualMockups from '../../../Assets/Images/UIAndGraphics/VisualMockups.png';

const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'How much time does it take to get a graphic design made?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>It takes nearly a week or two to get the final design made. It depends on the kind of design you need and the changes that are then done during the process.</p>
					</>
				)
			},
			{
				term: 'Can you assist my existing website look more professional?', 
				desc: (
					<>
						<p className='font-300 text-start mt-0'>Ofcourse! Share your requirements and let our magicians do the magic for you. We are just a click away.</p>
					</>
				)
			},
			{
				term: 'What sort of technology do you follow?', 
				desc: (
					<>
						<ul>
							<li>CSS</li>
							<li>XHTML</li>
							<li>Flash</li>
							<li>PHP</li>
							<li>Javascript</li>
							<li>And much more</li>
						</ul>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here`, 
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Everyone Designs. We craft Masterpieces.</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Design is of critical importance when it comes to branding in the digital world. connects brands to their users and creates the strong first impression which is why it cannot be ignored which gave rise to UI and graphic design companies.</p>
							<p className='font-300 text-start mt-4'>The best designs instil confidence in your product and brand. They inspire users to download, engage, and evangelise. At Magicmind, our digitally native magicians create uniquely beautiful and functional work grounded in results-oriented best practices.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Web and Graphic Design Company</h2>
						</Fade>

						<Fade bottom>
							<p className='font-300 text-start mt-4'>One of the renowned UI/UX and graphic design companies in USA, India, UK and Canada, MMT gives an exciting opportunity to both budding and experienced organisations to come up with something unique and innovative.</p>
							<p className='font-300 text-start mt-4'>We craft interactive, stunningly chic, visually appealing, mobile responsive &amp; user-friendly customer experience for your brand that is in accordance with the latest trends.</p>
							<p className='font-300 text-start mt-4'>We always aim to create a high user experience design for a website that is not just visually attractive, but also intuitive to use.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Services</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>We offer responsive design services for websites of every technology and framework. Our professional web designers create custom interfaces that are carefully crafted by keeping the business requirements and trending designs in view.</p>
							<p className='font-300 text-start mt-4 mb-4'>Whether you want the bold look or the minimal feel, a skeuomorphic experience or a flat design; our ingenious designers can create designs of any type.</p>
							<p className='font-700 text-start mt-4'>UI/UX Web Design</p>
							<p className='font-300 text-start mt-4'>Our highly experienced UI/UX designers will craft your website with the utmost professional care with meticulous attention to detail and design to deliver impeccable and cost-effective user interface design services to bring high user conversion to your online business.</p>
							<p className='font-700 text-start mt-4'>Corporate Identity &amp; Branding Design</p>
							<p className='font-300 text-start mt-4'>MMT knows how to set a brand apart from their competitor, with our meticulously designed corporate identity &amp; branding design solution under UI/UX and graphic design services, we aim to strengthen your brand, attract the audience, and make an impact.</p>
							<p className='font-700 text-start mt-4'>Logo Design</p>
							<p className='font-300 text-start mt-4'>Logos make your company standout. Therefore, we offer logo designing services that portray your company's vision and help in establishing a brand identity which makes you stand out from the rest.</p>
							<p className='font-700 text-start mt-4'>Motion Graphics Design</p>
							<p className='font-300 text-start mt-4'>Whether you are looking to go for the animated explainer video production (2d, 3d) or enhance your presentation with gif and marketing videos, or want to make promotional videos for business, we design custom motion graphics solutions for all your business need.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The MMT Magic Elements</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>NAVIGATION</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We design websites that allow the user to easily find the information they are looking for. Our user-centric navigation results in lower bounce rate and high ROI.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>MULTIMEDIA</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>User retention is a huge challenge in this age but we solve this problem by using relevant videos and other multimedia elements that keep visitors hooked to your site.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>COMPATIBILITY</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our web designs are fully mobile responsive i.e. compatible with all devices and easily viewable on all the browsers available. This leads to an increase in your site's reach.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>INTERACTIVE</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We believe in interactive designs that convert one-time visitors to regular users which is why designs have elements like polls, comment boxes, forms and newsletter signups.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>PROFESSIONAL DESIGN</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We deliver a professional design that is exceptional in quality whether you provide us with guidelines or give us free reign. Our designed logos look good on all mediums.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>RICH USER INTERFACE</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We create visually compelling interfaces that provide an exemplary user experience. Our design mantra consists of two words i.e. elegance and simplicity.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>RESPONSIVE WEBSITE DESIGN</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>We create fully designed responsive web apps and themes that are fluid and flow seamlessly from one screen size to another. Offering an optimal user experience.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>
			
			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why MMT?</h2>
							<p className='font-700 text-center mt-4 mb-0'>Rapid Delivery</p>
							<p className='font-700 text-center mt-0 mb-0'>Agile Methodologies</p>
							<p className='font-700 text-center mt-0 mb-0'>24/7 Support and Maintenance</p>
							<p className='font-700 text-center mt-0 mb-0'>Proficient Team</p>
							<p className='font-700 text-center mt-0 mb-0'>Competitive Pricing</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The MMT Roadmap</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Understanding the Vision</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>During the initial free kick-off call, our visual design experts will discuss the potential project requirements with you. We will provide you with a recommended set of steps and a rough estimate for design services implementation.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={UnderstandingTheVision} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={StrategyFormation} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Strategy Formation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>When we embark on the next design adventure with our clients, we always start with thorough user experience research to better understand your clientele. We can also help you rebrand an existing mobile app for more conversions.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Building Wireframes</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our magicians will create a visual layout of the website or wireframe that is forged in the form of a screen blueprint. These wireframes describe the kind of content and features to be displayed and integrated on each page.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BuildingWireframes} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={VisualMockups} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Visual Mock-ups</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our next step is to create a framework portraying the color schemes, typography, graphics, position, visual design elements, etc., in organized layers to give an overview of how the final design would look like.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Design Implementation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>This is precisely where our designers fully flesh out their ideas and critical visual decisions are finally created with the right tech stack marching hand-in-hand with creativity.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={DesignImplementation} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CompletedInterface} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Completed Interface</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our creative teams of designers and developers work in tandem to carve out an elegant interface that stands out from the crowd while simultaneously exterminating its perceived complexities.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Usability Testing, Design Iterations</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We will create custom assets and work on a more detailed version of your designs until you are happy with the deliverables.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={UsabilityTestingDesignIterations} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={FinalDesignAndRevisions} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Final Design &amp; Revisions</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Voila! After all the steps, we create your brand-new design (UX/UI or graphics design) that is not only useful but also desirable for the user. At last, we will present the design to you and do the final round of design iterations.</p>
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