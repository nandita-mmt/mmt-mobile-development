import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';
import DESIGN from '../../../Assets/Images/WebPractice/website-design.png';
import DEVELOPMENT from '../../../Assets/Images/WebPractice/website-development.png';
import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import ONLINE from '../../../Assets/Images/WebPractice/online-store.png';

import './NICHESoftwareCards.scss';

const NICHESoftwareCards = () => {
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
	return (
		<div className='NICHESoftwareCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>
								Niche software development service
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='font-300 text-center mt-4'>
							The right kind of software is essential for any business to flourish. At Magicmind, we
							understand the business requirements of any industry, be it retail, wholesale,
							finance, or other verticals. As one of the prominent software development companies,
							we follow your needs to deliver faster custom solutions that you have paid for.
						</p>
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>
								Our Key Services
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='font-300 text-center mt-4'>
							In this world of technology and innovation, make a difference in your business with
							us!
						</p>
					</Col>{' '}
				</Row>
			</Container>
			<div className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container'>
					<Row className='align-items-center justify-content-center '>
						<OwlCarousel
							items={4}
							dots={false}
							autoplay={false}
							loop={true}
							margin={0}
							nav={true}
							responsive={responsiveTxt}
							className='owl-carousel owl-theme bord-lft'
						>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									Web
									<br /> Practice
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									Get converting websites that are responsive and provide excellent user-experience,
									thus increasing traffic and search engine ranking.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									Mobility <br />
									Practice
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									Get high-value and end-to-end solutions for your business, through a secured and
									intuitive mobile experience.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									QA <br />
									Practice
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									Our AI-driven & Analytics-led software that assure empowering speed for unhindered
									productivity with uncompromised quality for your business.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>
									NICHE
									<br /> Software
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
									Seek out to your potential targets and market with our niche software solutions,
									built to cater your unique business needs.
								</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>
			<Container className='mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center mb-2 pt-5'>
					{/* <Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='position-relative'> */}
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Planning
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Proper planning and calculation of our clients business’ strengths and weaknesses to
								develop a niche software that achieves all organizational goals.
							</p>
						</Fade>
					</Col>
					{/* <Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'> */}
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={DESIGN} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-2'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image
								className='mmt-block-solution w-100 mt-3'
								src={DEVELOPMENT}
								alt='no-img'
							></Image>
						</Fade>
					</Col>
					<Col md lg={7} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Analysis
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Analyzing the software’s performance at different stages of development and
								understanding the additional requirements for its optimization.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-2'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Design
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Formulating & building the architecture of the niche software and remove the
								possible flaws by setting a standard.
							</p>
						</Fade>
					</Col>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-2'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={ONLINE} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={7} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Development & Implementation
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								In this stage, the actual process of developing software starts followed by
								implementation, where the product’s performance is evaluated
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-2'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Testing
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								MMT’s technical team tests the software for identifying the errors and bugs. They
								document all the issues (if any) and resolve faster before launch.
							</p>
						</Fade>
					</Col>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={SALES} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-2'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={ONLINE} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={7} className='position-relative'>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>
								Maintenance
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Throughout the maintenance period, the software is upgraded to its recent-most
								version from time to time for adapting it to the latest changes
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center text-center justify-content-center pb-5'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							{/* <Button className='btn btn-green px-5 py-3 font-600 w-100'>
								Let's solve your problem 
							</Button> */}
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

export default NICHESoftwareCards;
