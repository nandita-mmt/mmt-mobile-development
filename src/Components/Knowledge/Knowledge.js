import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Tab, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import { BiCircle } from 'react-icons/bi';

import IMG from '../../Assets/Images/Knowledge/know-arrow.svg';
import DEMO from '../../Assets/Images/innovation/ino-vid.webp';
// import CURVE from '../../Assets/Images/Knowledge/know-curve.svg';

import './Knowledge.scss';

const Knowledge = () => {
	return (
		<div className='Knowledge'>
			<Container fluid='md' className=''>
				<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
					<Row className='mmt-knowledge-row'>
						<Col xs={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className=''>
							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													L
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Law</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/law'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													H
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Healthcare & Fitness</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/healthcare-&-fitness'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													R
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Real Estate</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/real-estate'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='fourth'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													F
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Finance & Banking</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/finance-&-banking'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='fifth'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													A
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Automotive</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/automotive'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='sixth'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													A
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Astrology</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/astrology'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='seventh'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													T
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Travel & Hospitality</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/travel-&-hospitality'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey='eighth'>
									<div className='mmt-know-txt-wd d-flex flex-column align-items-center align-items-lg-start'>
										{/* <Image className='pt-5' src={CURVE} alt='no-img'></Image> */}
										<Fade bottom>
											<h1 className='pt-5 font-300 font-xl text-center text-lg-start mb-0'>
												Knowledge is the Ultimate Soft Power
											</h1>
										</Fade>
										<Fade bottom>
											<p className='font-500 mt-3 mb-0 text-center text-lg-start'>
												Magicmind deploys the industry-best processes, innovative technologies, and
												effective methodologies that can assist businesses in critical
												decision-making.
											</p>
										</Fade>
									</div>
									<div className='mmt-project-name-div flex-column flex-md-row justify-content-md-start justify-content-center  align-items-center'>
										<div className='mmt-project-name-img d-flex justify-content-center justify-content-lg-start px-2'>
											<Fade left>
												{/* <Image className='mmt-project-img' src={MASKH} alt='no-img'></Image> */}
												<h1
													className='img-text text-center'
													style={{ backgroundImage: `url(${DEMO})` }}
												>
													I
												</h1>
											</Fade>
										</div>
										<Fade bottom>
											<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
												<h3 className='font-600'>Immigration</h3>
												<h5 className='font-500'> We make patient care smart and interactive</h5>
												<div className='d-flex flex-row justify-content-start align-items-start mt-4 mb-0'>
													<BiCircle className='icon-circ' />
													<p className=' mb-0 font-400'>Engaging Apps</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>SEO Optimisation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Digital Branding Consultation</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-start'>
													<BiCircle className='icon-circ' />
													<p className='mb-0 font-400'>Object-Oriented Scalable Software</p>
												</div>
												<div className='d-flex flex-row justify-content-start align-items-center mt-4'>
													<Link
														to='/immigration'
														className='btn btn-light mmt-know-btn'
														src={IMG}
														alt='no-img'
													>
														<span>
															<img src={IMG} alt='no-img' className='mmt-button-arrow' />
														</span>
													</Link>
												</div>
											</div>
										</Fade>
									</div>
								</Tab.Pane>
							</Tab.Content>
						</Col>
						<Col
							xs={{ span: 12, order: 1 }}
							lg={{ span: 2, order: 2 }}
							className='mmt-know-menu p-0'
						>
							<Nav
								variant='pills'
								className='mmt-subroute-dv d-flex align-items-center justify-content-start'
							>
								<Nav.Item>
									<Nav.Link eventKey='first' className='mmt-know-project first-elem'>
										<Fade bottom>
											<p className='mb-0'>01</p>
											<p className='mb-0 text-center font-500'>Law</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>02</p>
											<p className='mb-0 text-center font-500'>Healthcare & Fitness</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>03</p>
											<p className='mb-0 text-center font-500'>Real Estate</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='fourth' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>04</p>
											<p className='mb-0 text-center font-500'>Finance & Banking</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='fifth' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>05</p>
											<p className='mb-0 text-center font-500'>Automotive</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='sixth' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>06</p>
											<p className='mb-0 text-center font-500'>Astrology</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='seventh' className='mmt-know-project'>
										<Fade bottom>
											<p className='mb-0'>07</p>
											<p className='mb-0 text-center font-500'>Travel & Hospitality</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='eighth' className='mmt-know-project last-elem'>
										<Fade bottom>
											<p className='mb-0'>08</p>
											<p className='mb-0 text-center font-500'>Immigration</p>
										</Fade>
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		</div>
	);
};

export default Knowledge;
