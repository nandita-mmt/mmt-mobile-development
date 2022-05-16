import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { BiCircle } from 'react-icons/bi';

// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';
import BIGIMG from '../../../Assets/Images/FeatureProject/hukoomi-new-min.webp';

import './FeatureProjectCards.scss';

const FeatureProjectCards = () => {
	return (
		<div className='FeatureProjectCards'>
			<Container fluid='md' className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='mb-5'>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-start'>The Challenge for us</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-1' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='text-start mt-4 font-400 lht-27'>
							Hukoomi is a government portal powered by one of the core ministries of the Government
							of Qatar. The principal purpose of the portal was to create an omni-channel experience
							for residents of the country & visitors around the usage of government services.
							<span className='font-800'>
								The portal should make the government services thoroughly accessible in a
								convenient, efficient, & transparent manner through a significant transformation of
								e-governance.
							</span>
						</p>
						<p className='text-start mt-5 font-400 lht-27'>
							Few of the major challenges were to craft a portal which is easy & convenient to
							transit & to find artifacts on, with a fluent user-centric navigation approach. We
							were assigned with a task to create lasting recall values & trustworthiness to prompt
							users to seek the portal for assistance whenever they would want to interact with
							government entities online. The portal was required to provide a curated,
							comprehensive & personalized experience for a specific sub-persona.
						</p>
					</Col>
				</Row>
				<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
					<Row className='mmt-knowledge-row h-100'>
						<Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className=''>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Discover</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Define</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
										<Fade bottom>
											<h4 className='font-600 text-start mb-0'>Services</h4>
										</Fade>
										<Row className='mmt-project-details pt-2 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start  mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>Content Strategy</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Web Design</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Photography</p>
											</Col>
										</Row>
										<Row className='mmt-project-details pb-4 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start  mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>Copy Writing</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Wordpress Development</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Creative Direction</p>
											</Col>
										</Row>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Design</h1>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Discover</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Define</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
										<Fade bottom>
											<h4 className='font-600 text-start mb-0'>Services</h4>
										</Fade>
										<Row className='mmt-project-details pt-2 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start  mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>Content Strategy</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Web Design</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Photography</p>
											</Col>
										</Row>
										<Row className='mmt-project-details pb-4 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start  mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>copy Writing</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Wordpress Development</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Creative Direction</p>
											</Col>
										</Row>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Design</h1>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Discover</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start text-lg-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Define</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 text-start text-lg-start'>
												With an assembled team of experts, we leveraged decade old customer data
												from the ministry's contact centre to gather first hand observations with
												the portal's usage around Qatar Government Services.
											</p>
										</Fade>
										<Fade bottom>
											<h4 className='font-600 text-start mb-0'>Services</h4>
										</Fade>
										<Row className='mmt-project-details pt-2 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start  mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>Content Strategy</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Web Design</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Photography</p>
											</Col>
										</Row>
										<Row className='mmt-project-details pb-4 w-100 d-flex flex-row align-items-start'>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start mb-0'
											>
												<BiCircle className='icon-circ' />
												<p className=' mb-0 font-400'>copy Writing</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Wordpress Development</p>
											</Col>
											<Col
												md
												lg={4}
												className='d-flex flex-row pt-1 justify-content-start align-items-start'
											>
												<BiCircle className='icon-circ' />
												<p className='mb-0 font-400'>Creative Direction</p>
											</Col>
										</Row>
									</div>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-start'>
										<Fade bottom>
											<h1 className='font-300 font-xl text-start mb-0'>Design</h1>
										</Fade>
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Col>
						<Col xs={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} className='mmt-know-menu'>
							<Nav
								variant='pills'
								className='mmt-subroute-dv d-flex align-items-start justify-content-start'
							>
								<Nav.Item>
									<Nav.Link eventKey='first' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>01</p>
											<p className='mb-0 text-start font-500'>Discover</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>02</p>
											<p className='mb-0 text-start font-500'>Define</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>03</p>
											<p className='mb-0 text-start font-500'>Design</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
				</Tab.Container>
				<Row className='align-items-center justify-content-center my-5'>
					<Col>
						<Image className='mmt-hukoomi-big-img' src={BIGIMG} alt='no-img'></Image>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FeatureProjectCards;
