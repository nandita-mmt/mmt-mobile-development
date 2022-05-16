import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';
import SALES from '../../../../Assets/Images/CoreTech/core-bottom.webp';
import PHP from '../../../../Assets/Images/CoreTech/php.webp';
import CI from '../../../../Assets/Images/CoreTech/ci.webp';
import SYMP from '../../../../Assets/Images/CoreTech/symphony.webp';
import LARA from '../../../../Assets/Images/CoreTech/laravel.webp';
import YI from '../../../../Assets/Images/CoreTech/yi.webp';
import PYTH from '../../../../Assets/Images/CoreTech/python.webp';

import './ImmigrationCards.scss';

const ImmigrationCards = () => {
	const responsive = {
		0: {
			items: 1,
		},
		576: {
			items: 3,
		},
		992: {
			items: 4,
		},
		1200: {
			items: 5,
		},
	};
	const responsiveTxt = {
		0: {
			items: 1,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 4,
		},
	};
	return (
		<div className='ImmigrationCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='mmt-custom-top align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Putting Immigration Consultancy Services at the forefront of the evolving field
								empowered by Blockchain, AI-ML & Core Tech
							</h1>
						</Fade>

						<Fade bottom>
							<h2 className='font-600 text-center pt-4 mt-5'>Are You ready For The Evolution?</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4 '>
								Vision is the harbinger of insight and insight gives birth to faith. At MagicMinds
								Technologies, we equip Immigration Consulting Service ventures with solutions or
								insights with which you can envision a future of possibilities and take next steps
								with the faith towards success and growth.
							</p>
						</Fade>
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center py-4'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 w-100'>
								Evolve With Our Solutions
							</Button>
						</NavLink>
					</Col>
				</Row>

				{/* FIRST ZIGZAG ROW */}
				<Row className='align-items-center justify-content-center'>
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 1 }}
						className='position-relative py-5'
					>
						<Fade bottom>
							<h2 className='text-center text-lg-start font-500'>
								The Potential Uses Of Blockchain In Immigration Consulting
							</h2>
						</Fade>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className=' mb-0 font-400'>Authenticating Customer Identification Data</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>
										Providing Transparency In Every Stage Of Visa Application
									</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>Real-time Updates On Approvals</p>
								</div>
							</div>
						</Fade>
					</Col>

					<Col
						xs={{ span: 12, order: 1 }}
						lg={{ span: 4, order: 2 }}
						className='position-relative d-flex justify-content-center align-items-center'
					>
						<Image className='mmt-block-solution mt-3 w-75' src={SALES} alt='no-img'></Image>
					</Col>
				</Row>
				{/* SECOND ZIGZAGROW */}
				<Row className='align-items-center justify-content-center'>
					<Col
						md
						lg={4}
						className='position-relative d-flex justify-content-center align-items-center'
					>
						<Image className='mmt-block-solution mt-3 w-75' src={SALES} alt='no-img'></Image>
					</Col>
					<Col md lg={6} className='position-relative py-5'>
						<Fade bottom>
							<h2 className='text-center text-lg-start font-500'>
								The Uses Of AI-ML In Immigration Consulting
							</h2>
						</Fade>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className=' mb-0 font-400'>Analysis Of Risky Fraudulent Applications</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>
										Streamlining Data Transfer Channels Between Agencies & Government
									</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>
										Mitigates Risks Like Racial Discrimination Or Late Decision Making
									</p>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
				{/* THIRD ZIGZAG ROW */}
				<Row className='align-items-center justify-content-center'>
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 6, order: 1 }}
						className='position-relative py-5'
					>
						<Fade bottom>
							<h2 className='text-center text-lg-start font-500'>
								The Uses Of Core Tech In Immigration Consulting
							</h2>
						</Fade>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className=' mb-0 font-400'>Digital Marketing Services</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>Virtual Experience Products</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>Immersive Cognitive Solutions</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start'>
									<div>
										<BiCircle className='icon-circ-purp' size={15} />
									</div>
									<p className='mb-0 font-400'>Product Engineering Solutions</p>
								</div>
							</div>
						</Fade>
					</Col>
					<Col
						xs={{ span: 12, order: 1 }}
						lg={{ span: 4, order: 2 }}
						className='position-relative d-flex justify-content-center align-items-center'
					>
						<Image className='mmt-block-solution mt-3 w-75' src={SALES} alt='no-img'></Image>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Where Do You Stand With New-Age tech’s Possibilities For The Immigration Consultancy
								Sector?
							</h1>
						</Fade>

						<Fade bottom>
							<h2 className='font-600 text-center pt-4 mt-5'>Don’t Know</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4 '>
								Let us be your guiding light. Let us open the box of wonders for you.
							</p>
						</Fade>
						<Row className='align-items-center justify-content-center py-4'>
							<Col md lg={6}>
								<NavLink exact className='customNavLink' to={'/contact-us'}>
									<Button className='btn btn-green px-5 py-3 font-600 w-100'>Learn With Us.</Button>
								</NavLink>
							</Col>
						</Row>
						<Fade bottom>
							<h2 className='font-600 text-center pt-2'>Ambiguous</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4 '>
								We’ll clear the cloud for you. Walk with us to explore the new possibilities.
							</p>
						</Fade>
						<Row className='align-items-center justify-content-center py-4'>
							<Col md lg={6}>
								<NavLink exact className='customNavLink' to={'/contact-us'}>
									<Button className='btn btn-green px-5 py-3 font-600 w-100'>Learn With Us.</Button>
								</NavLink>
							</Col>
						</Row>
						<Fade bottom>
							<h2 className='font-600 text-center pt-2'>Aware With No Action Plan</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-4 '>
								We’ll take it from here. We’ll draft the perfect plan your Immigration Consultancy
								business.
							</p>
						</Fade>
						<Row className='align-items-center justify-content-center py-4'>
							<Col md lg={6}>
								<NavLink exact className='customNavLink' to={'/contact-us'}>
									<Button className='btn btn-green px-5 py-3 font-600 w-100'>Learn With Us.</Button>
								</NavLink>
							</Col>
						</Row>
					</Col>{' '}
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='mmt-resp-font-xl font-200 text-center'>Businesses We Assist</h1>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-center mt-5 pt-3'>
								We assist businesses of every size from all verticals. Deploying industry-best
								processes, innovative tech solutions and effective technologies that empower
								ventures of all sizes envision a new path of functionality for the future.
							</p>
						</Fade>
					</Col>{' '}
					<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
						<div className='mmt-know-menu'>
							<Nav variant='pills' className='mmt-subroute-dv'>
								<Nav.Link eventKey='first' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>Startups </h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='second' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>SMBs</h3>
									</Fade>
								</Nav.Link>
								<Nav.Link eventKey='third' className='mmt-know-project'>
									<Fade bottom>
										<h3 className='mb-0 text-center font-500'>Large Enterprises</h3>
									</Fade>
								</Nav.Link>
							</Nav>
						</div>
						<Row className='mmt-knowledge-row h-100'>
							<div className='my-5'>
								<Tab.Content>
									<Tab.Pane eventKey='first'>
										<OwlCarousel
											items={4}
											dots={false}
											autoplay={true}
											loop={true}
											margin={10}
											nav={false}
											responsive={responsive}
											className='owl-carousel owl-theme'
										>
											<div className='item'>
												<h4>
													<Image src={PHP} alt='no-img'></Image>
												</h4>
											</div>
											<div className='item'>
												<h4>
													<Image src={LARA} alt='no-img'></Image>
												</h4>
											</div>
											<div className='item'>
												<h4>
													<Image src={CI} alt='no-img'></Image>
												</h4>
											</div>
											<div className='item'>
												<h4>
													<Image src={YI} alt='no-img'></Image>
												</h4>
											</div>
											<div className='item'>
												<h4>
													<Image src={SYMP} alt='no-img'></Image>
												</h4>
											</div>
											<div className='item'>
												<h4>
													<Image src={PYTH} alt='no-img'></Image>
												</h4>
											</div>
										</OwlCarousel>
										;
									</Tab.Pane>
									<Tab.Pane eventKey='second'>
										<OwlCarousel
											items={4}
											dots={false}
											autoplay={true}
											loop={true}
											margin={10}
											nav={false}
											className='owl-carousel owl-theme'
										>
											<div className='item'>
												<h4>1</h4>
											</div>
											<div className='item'>
												<h4>2</h4>
											</div>
											<div className='item'>
												<h4>3</h4>
											</div>
											<div className='item'>
												<h4>4</h4>
											</div>
											<div className='item'>
												<h4>5</h4>
											</div>
										</OwlCarousel>
									</Tab.Pane>
									<Tab.Pane eventKey='third'>
										<OwlCarousel
											items={4}
											dots={false}
											autoplay={true}
											loop={true}
											margin={10}
											nav={false}
											className='owl-carousel owl-theme'
										>
											<div className='item'>
												<h4>1</h4>
											</div>
											<div className='item'>
												<h4>2</h4>
											</div>
											<div className='item'>
												<h4>3</h4>
											</div>
											<div className='item'>
												<h4>4</h4>
											</div>
											<div className='item'>
												<h4>5</h4>
											</div>
										</OwlCarousel>
									</Tab.Pane>
								</Tab.Content>
							</div>
						</Row>
					</Tab.Container>
				</Row>
			</Container>
			<Container className='mmt-papercard-container'>
				<Row className='mmt-custom-top align-items-center justify-content-center pb-5'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='mmt-resp-font-xl font-200 text-center'>
								Products & Services We Offer
							</h1>
						</Fade>
					</Col>{' '}
				</Row>
			</Container>
			<div className='mmt-about-service my-5 '>
				<Container className='mmt-papercard-container'>
					<Row className='align-items-center justify-content-center '>
						<OwlCarousel
							items={4}
							dots={false}
							autoplay={false}
							loop={true}
							nav={true}
							responsive={responsiveTxt}
							className='owl-carousel owl-theme'
						>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 immigration-card-header text-center text-lg-start'>
									Engaging
									<br />
									Apps
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									We might be tech-savvy, but we don’t rely on robots to address issues. Our live
									executives dedicatedly assist to connect our clients to the right person for all
									queries.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 immigration-card-header text-center text-lg-start'>
									SEO
									<br />
									Optimisation
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									We have a great track record in handling the IT infrastructure for our clients.
									For years, we have been seamlessly looking after their software maintenance,
									development, management and renewals.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 immigration-card-header text-center text-lg-start'>
									Digital
									<br />
									Consultancy
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									At MMT, we have take pride in working with some of industry’s passionately
									talented young professionals who provide the most accurate and effective addresses
									of tech-based issues.
								</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 immigration-card-header text-center text-lg-start'>
									OOS
									<br />
									 Software
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									Our bond stays between our clients and us. Unlike many ‘dumbsourcing’
									organisation, we never pass on our clients’ project requisites to any other firm.
									We are made of 100% in-house talents.
								</p>
							</div>
							{/* <div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 text-center text-lg-start'>
									Simplified Project
									<br />
									Management
								</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>
									MagicMinds Technologies has a significant experience in working with changing
									technologies. Since we are constantly upgrading our knowledge, we can seamlessly
									work on any project with complex tech.
								</p>
							</div> */}
						</OwlCarousel>
					</Row>
				</Container>
			</div>
			<Container className='mmt-papercard-container extra-marg w-100 h-100 my-5 '>
				<Row className='align-items-center justify-content-center pb-5'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 w-100'>Learn With Us.</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ImmigrationCards;
