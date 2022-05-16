import React from 'react';
// import Image from 'react-bootstrap/Image';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';

import './AboutUsCards.scss';

const AboutUsCards = () => {
	// const responsiveTxt = {
	// 	0: {
	// 		items: 1,
	// 	},
	// 	767: {
	// 		items: 2,
	// 	},
	// 	992: {
	// 		items: 3,
	// 	},
	// 	1200: {
	// 		items: 4,
	// 	},
	// };

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
		<div className='AboutUsCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5'>
				<Row className='align-items-center justify-content-center pt-5'>
					<Col md lg={11}>
						<Fade bottom>
							<h1 className='mb-0 font-xl font-200 text-center'>
								Flexibility. Craftsmanship. Teamwork. Trust.
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>{' '}
				</Row>

				<Row className='align-items-center justify-content-center pb-5 mb-5'>
					<Col md lg={11}>
						<div className='mmt-co-founder w-100 h-100 position-relative'>
							<div className='mmt-co-founder-img'></div>
							<div className='mmt-co-founder-detail'>
								<Fade bottom>
									<p className='text-start font-300'>We create Smart, Futuristic, and Scalable Digital Solutions through gamut of revolutionary technology. Magicmind Technologies redefines the digital experience by harmonizing people, innovation, and creativity.</p>
									<p className='text-start font-300'>We develop your far-sighted vision into an engineered reality by offering tailor made IT services that suits your requirements. We provide disruptive, revolutionary and cutting-edge technology and the best talent to develop and deliver exceptional results.</p>
								</Fade>
							</div>
						</div>
					</Col>
				</Row>
			</Container>

			<div className='default-page-template'>
				<div className='default-page-main'>
					<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
						<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
							<Col md lg={11}>
								<Fade bottom>
									<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Magicmind Technologies - In an affair with creativity and innovation</h2>
								</Fade>
								<Fade bottom>
									<p className='font-300 text-start mt-4'>Being a design-led, technology-driven company with a creative bend for innovation, we put our creative minds to work to provide think out-of-the-box solutions to the most compelling challenges and transform the way your company creates value.</p>
									<p className='font-300 text-start mt-4'>We employ the best tools for sense-making, meaning making, simplifying processes, and improving customer experiences. We design framework for addressing complex human-centred challenges and making the best possible decisions.</p>
								</Fade>
							</Col>
						</Row>
							
						<Row className='align-items-center text-center justify-content-center pt-1 pb-4 remove-padding'>
							<Col md lg={9}>
								<Fade bottom>
									<p className='mb-3 font-300 text-center px-4 mt-0'>We are ready to create magic. Are you?</p>
									<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
										<Button className='btn btn-green py-2 font-600 w-40'>Shoot us a message now!</Button>
									</NavLink>
								</Fade>
							</Col>
						</Row>
					</Container>

					<div id="carousel-parent" className='mmt-about-service mb-5'>
						<Container className='mmt-papercard-container remove-padding'>
							<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
								<Col md lg={9}>
									<Fade bottom>
										<h2 className='mmt-web-resp-txt text-center font-xl font-200 text-center mb-0'>We are "The Magicians"</h2>
										<p className='mb-5 font-300 text-center px-4 mt-4'>We are here to sprinkle magic of innovation and deliver wonders that is powered by technology and inspired by people.</p>
									</Fade>
								</Col>
							</Row>

							<Row className='align-items-center justify-content-center'>
								<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
									className='owl-carousel owl-theme bord-lft'>
									<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
										<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Balance</h3>
										<p className='mb-5 font-300 text-center text-lg-start mt-4'>We have perfected the balance between art and science, innovation and creativity, human touch, and technology. We are a company where innovation, creativity and technology that is made human.</p>
									</div>
									<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
										<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Experience</h3>
										<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our company's vast experience, proven expertise aids in providing exceptional delivery of bespoke solutions and services across diverse business verticals globally within reduced turnaround time.</p>
									</div>
									<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
										<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Excellence</h3>
										<p className='mb-5 font-300 text-center text-lg-start mt-4'>We invest in excellence and are obsessed with customer satisfaction by putting digital disruption in the top gear that transform businesses boosts revenue.</p>
									</div>
									<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
										<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Capabilities</h3>
										<p className='mb-5 font-300 text-center text-lg-start mt-4'>We've got the capabilities, expertise, and technologies to craft compelling experiences that set your brand apart from the competition and help your business grow. We make IT happen.</p>
									</div>
								</OwlCarousel>
							</Row>
						</Container>
					</div>
				</div>
			</div>

			<Container className=' pt-0 mb-5'>
				<Row className='align-items-center  text-center justify-content-center mt-1 py-5'>
					<Col md lg={6}>
						{/* <NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 w-100'>
							Let's solve your problem
							</Button>
						</NavLink> */}
						<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
							{/* <Button className='test btn btn-green px-5 py-3 font-600 w-100'> */}
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

export default AboutUsCards;
