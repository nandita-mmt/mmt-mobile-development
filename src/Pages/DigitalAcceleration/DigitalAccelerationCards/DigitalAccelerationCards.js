import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { BiCircle } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { getDigitalAccelerationAPI } from '../../../services/digitalacceleration';

import MAIN from '../../../Assets/Images/DigitalAcceleration/digital-card-top.svg';
import BOTTOM from '../../../Assets/Images/DigitalAcceleration/digital-banner2.webp';
import IMG from '../../../Assets/Images/Knowledge/know-arrow.svg';

import './DigitalAccelerationCards.scss';

const MAX_LENGTH = 130;

const DigitalAccelerationCards = () => {
	const [cardDigitalData, setCardDigitalData] = useState([]);
	const [slicedData, setSlicedData] = useState([]);
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (e, id) => {
		e.preventDefault();
		const filterData = cardDigitalData.filter(data => data?.id === id);
		console.log(333, filterData);
		setSlicedData(filterData);
		setTarget(e.target);
		setShow(!show);
	};

	useEffect(() => {
		const fetchData = async () => {
			const res = await getDigitalAccelerationAPI();
			console.log(123, res);
			setCardDigitalData(res);
		};
		fetchData();
	}, []);

	return (
		<div className='DigitalAccelerationCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className=''>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center mb-0'>Digital Acceleration</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image>{' '} */}
						<Fade bottom>
							<p className='text-center mt-4 font-400 lht-27'>
								Strategies That Shape The Future Of Your Business
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center pb-3 '>
					<Col
						md
						lg={4}
						className='position-relative d-flex justify-content-center justify-content-md-start'
					>
						<Fade bottom>
							<Image className='mmt-block-canvas my-4' src={MAIN} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={6} className='position-relative'>
						<Fade bottom>
							<p className='text-center text-lg-start mt-3 font-400 lht-27'>
								People’s understanding of technology and innovations has experienced a paradigm
								shift during the scathing years of pandemic. Overnight, the human civilisation ha
								seen how internet has crept up multiple levels in their day-to-day functionalities
								both in personal and professional aspects.
							</p>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start pt-4 font-400 lht-27'>
								This evolved disposition of technology has led us into identifying the areas and
								needs of business transformation and the technologies as its backbone. We are
								constantly investing ourselves into gaining more knowledge and upskill our fortes to
								ideate business scenarios of the future.
							</p>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start pt-4 font-400 lht-27'>
								The faster we ideate, the more you thrive in action and become a disruptor, without
								being disrupted!
							</p>
						</Fade>
					</Col>
				</Row>
			</Container>
			<div className='mmt-body-background'>
				<Container fluid='md' className='mmt-papercard-container w-100 h-100'>
					<Row className='mb-5'>
						<Col md lg={12} className='position-relative'>
							<Fade bottom>
								<h1 className='mb-0 mt-5 text-center font-200 font-main'>
									High Performing Transformation Solutions To Make Your Business Evolution-Ready For
									Tomorrow
								</h1>
							</Fade>
							{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
							<p className='text-center mt-4 font-400 lht-27'>
								MagicMinds Technologies assists clients from different sectors to achieve their
								commercial as well as operational excellence through merging our technology
								expertise and business consultation. Our strengths lie in the unique capabilities of
								design thinking, testing, piloting and creating solutions and services that game
								changing for consistent business growth.
							</p>
							<div className='d-flex flex-column flex-md-row justify-content-center align-items-start'>
								<div className='mx-4 d-flex flex-column justify-content-start align-items-start'>
									<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
										<div>
											<BiCircle className='icon-circ-purp' size={15} />
										</div>
										<p className=' mb-0 font-400'>Digital Business Consulting</p>
									</div>
									<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
										<div>
											<BiCircle className='icon-circ-purp' size={15} />
										</div>
										<p className=' mb-0 font-400'>Digital Innovation Labs</p>
									</div>
									<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
										<div>
											<BiCircle className='icon-circ-purp' size={15} />
										</div>
										<p className=' mb-0 font-400'>Customer Experience Design and Engineering</p>
									</div>
								</div>
								<div className='mx-4 d-flex flex-column justify-content-start align-items-start'>
									<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
										<div>
											<BiCircle className='icon-circ-purp' size={15} />
										</div>
										<p className=' mb-0 font-400'>Cognitive Automation</p>
									</div>
									<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
										<div>
											<BiCircle className='icon-circ-purp' size={15} />
										</div>
										<p className=' mb-0 font-400'>Digital Architecture and Platform Advisory</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='justify-content-center align-items-center pt-3 mb-5'>
						<Col md lg={6}>
							<NavLink exact className='customNavLink' to={'/contact-us'}>
								<Button className='font-600 w-100 py-4 btn btn-green'>
									Consult with our Digital Acceleration Expert
								</Button>
							</NavLink>
						</Col>
					</Row>
					<Row className='pb-3 pt-3 mb-5'>
						{cardDigitalData.map((crd, i) => {
							return (
								<Col lg={4} key={i}>
									<Card className='mmt-DigitalAcceleration-crd my-3'>
										<Card.Body className='px-4 py-5'>
											<Card.Title className='mmt-acceleration-title font-700 font-avg'>
												{crd.Title}
											</Card.Title>
											<Fade bottom>
												<Card.Text className='font-300 mt-4'>
													{crd.description.length > MAX_LENGTH ? (
														<>{`${crd.description.substring(0, MAX_LENGTH)}...`}</>
													) : (
														crd.description
													)}
												</Card.Text>
											</Fade>
											<Button
												className='mt-4 btn btn-trans d-flex flex-row justify-content-center align-items-center'
												onClick={e => handleClick(e, crd.id)}
											>
												<p className='purp decor mb-0'>Read More</p>
												<span>
													<img src={IMG} alt='no-img' className='mmt-button-arrow ms-2' />
												</span>
											</Button>
										</Card.Body>
									</Card>
								</Col>
							);
						})}
					</Row>
					<div ref={ref}>
						{slicedData.map((data, i) => {
							return (
								<Overlay
									show={show}
									target={target}
									placement='top'
									container={ref}
									containerPadding={20}
									rootClose={true}
									onHide={() => setShow(false)}
									key={i}
								>
									<Popover id='popover-contained'>
										<Popover.Content>
											<div className='d-flex flex-row justify-content-between align-items-start'>
												<h4 className='text-start'>{data.Title}</h4>
												<GrClose
													className='mmt-close-btn mt-2'
													onClick={() => setShow(false)}
													size={16}
												/>
											</div>
											<p className='mt-4'>{data.description}</p>
											<div className='mmt-pop-img-dv mt-4 font-avg '>
												<Image className='mmt-pop-img' src={BOTTOM} alt='no-img' />
											</div>
										</Popover.Content>
									</Popover>
								</Overlay>
							);
						})}
					</div>
				</Container>
			</div>
			<Container fluid='md' className='mmt-papercard-container w-100 h-100'>
				<Row className=''>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='mb-0 font-xl font-200 text-center'>
								Delve Deep Into MMT’s Digital Acceleration Services
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mt-4 mb-5'>
					<Col md lg={7} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-bottom mt-3' src={BOTTOM} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={5} className='position-relative py-3'>
						<Fade bottom>
							<h4 className='font-600 text-center text-lg-start'>
								At MagicMinds, we work as our client’s strategic partner.
							</h4>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								We plan a diagnosis for our client’s existing technological architecture and empower
								them with a robust IT environment where they can adapt seamlessly with new changes
								and innovations, aligned with their business needs.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='justify-content-center align-items-center pt-4 pb-5 mb-5'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='font-600 w-100 py-4 btn btn-green'>
								Consult with our Digital Acceleration Expert
							</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default DigitalAccelerationCards;
