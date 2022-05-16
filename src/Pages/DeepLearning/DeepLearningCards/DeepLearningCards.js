import React, { useState, useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../../config/api/apiEndpoints';
import { getDeepLearningAPI } from '../../../services/deeplearning';

import BRAIN from '../../../Assets/Images/DeepLearning/deep-top.webp';
import DEEPSOLUTION from '../../../Assets/Images/DeepLearning/deep-solution.webp';
import DEEPSOLUTION2 from '../../../Assets/Images/DeepLearning/deep-solution2.webp';
import IMG from '../../../Assets/Images/Knowledge/know-arrow.svg';

import './DeepLearningCards.scss';

const MAX_LENGTH = 130;

const DeepLearningCards = () => {
	const [cardDeepLearningData, setCardDeepLearningData] = useState([]);
	const [slicedData, setSlicedData] = useState([]);
	const [show, setShow] = useState(false);
	const [target, setTarget] = useState(null);
	const ref = useRef(null);

	const handleClick = (e, id) => {
		e.preventDefault();
		const filterData = cardDeepLearningData.filter(data => data?.id === id);
		console.log(333, filterData);
		setSlicedData(filterData);
		setTarget(e.target);
		setShow(!show);
	};

	useEffect(() => {
		const fetchData = async () => {
			const res = await getDeepLearningAPI();
			setCardDeepLearningData(res);
		};
		fetchData();
	}, []);
	return (
		<div className='DeepLearningCards'>
			<Container fluid='md' className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className=''>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Deep Learning, Artificial Intelligence and Machine Learning
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mt-4 mb-5 pb-3'>
					<Col
						md
						lg={5}
						className='position-relative d-flex justify-content-center align-items-center pt-4 px-5'
					>
						<Fade bottom>
							<Image className='mmt-block-canvas w-100' src={BRAIN} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={6} className='position-relative'>
						<Fade bottom>
							<p className='text-center text-lg-start mt-5 font-400 lht-27'>
								<span className='font-800'>Deep Learning, Artificial Intelligence</span> and
								<span className='font-800'>Machine</span> Learning have created quite a buzz in
								recent years. The digital age is ever-changing, and humans are finding it
								increasingly difficult to understand changes in extensive data with each new update
								on marketing platforms. Humans have found it easier to handle complex problems
								because of new technology and advancements in
								<span className='font-800'>Artificial Intelligence (AI)</span>. Deep learning has
								proven to be a blessing for many marketers because it can swiftly process large
								amounts of data and produce a “<span className='font-800'>hyper-targeted</span>”
								answer. Deep Learning is here to stay in digital marketing.
							</p>
						</Fade>
					</Col>
				</Row>
			</Container>
			<div className='mmt-body-background'>
				<Container fluid='md' className='mmt-papercard-container w-100 h-100'>
					<Row className=''>
						<Col md lg={12} className='position-relative'>
							<Fade bottom>
								<h1 className='mt-2 text-center font-200 font-main'>
									Deep Learning is an area of machine learning{' '}
									<span className='font-vladimir' style={{ color: '#F7931A' }}>
										Right!
									</span>
								</h1>
							</Fade>
							{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
							<p className='text-center mt-4 font-400 lht-27'>
								For the time being, using machine learning techniques to streamline the sales
								process has been widespread. This move is being adopted by many sales and marketing
								teams to improve their return on investment. Machine Learning may also help to
								enhance the possibilities of communicating with potential customers in the most
								effective way possible, resulting in a higher conversion rate over time.
							</p>
							<p className='text-center mt-4 font-400 lht-27'>
								{' '}
								Deep Learning is an area of machine learning that deals with artificial neural
								networks, which are algorithms inspired by the function and structure of the brain.
								Machine learning in marketing evaluates how a specific viewer responds to numerous
								call-to-actions and gives them a hyper-targeted answer. The pattern people select
								while browsing through emails, websites, or any paid advertisements may provide
								insight into their behaviour. It can be time-consuming and inefficient for marketing
								staff to evaluate many data sets, but machine learning techniques can help by doing
								rapid checks on the data.
							</p>
							<p className='text-center mt-4 font-400 lht-27'>
								{' '}
								When it comes to marketing and advertising products, services and brands, more and
								more businesses are turning to deep learning. Ad networks and publishers are using
								deep learning to generate real-time bidding (RTB) advertising, data-driven
								predictive advertising and precisely targeted display advertising to leverage their
								content.
							</p>
							<h4 className='mt-4 mb-5 text-center font-700 font-flat'>
								Let’s take a look at some real-life case scenarios!
							</h4>
						</Col>
					</Row>
					<Row className='pb-3 mb-5'>
						{cardDeepLearningData.map((crd, i) => {
							return (
								<Col lg={4} key={i}>
									{/* badri */}
									{/* <a href=""> */}
									<Card className='mmt-blockchain-crd my-2 px-2' 	onClick={e => handleClick(e, crd.id)}>
										<Card.Body className='px-4 py-5'>
											<Card.Title className='font-700'>
												<Fade bottom>
													<div className='mmt-company-div d-flex flex-row justify-content-start align-items-center'>
														{crd.img.map((img, index) => {
															return (
																<Image
																	key={index}
																	src={BASE_URL + img.url}
																	alt='no-img'
																	className='mmt-company me-3'
																></Image>
															);
														})}
													</div>
												</Fade>
											</Card.Title>
											<Fade bottom>
												<Card.Text className='font-300 mt-3'>
													{crd.Propy.length > MAX_LENGTH ? (
														<>{`${crd.Propy.substring(0, MAX_LENGTH)}...`}</>
													) : (
														crd.Propy
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
									{/* </a> */}
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
												<div className='mmt-company-div d-flex flex-row justify-content-start align-items-center'>
													{data.img.map((img, index) => {
														return (
															<Image
																key={index}
																src={BASE_URL + img.url}
																alt='no-img'
																className='mmt-company-popup me-3'
															></Image>
														);
													})}
												</div>
												<div className='mmt-close-btn-dv'>
													<GrClose
														className='mmt-close-btn ms-3 mt-2'
														onClick={() => setShow(false)}
														size={16}
													/>
												</div>
											</div>
											<p className='mt-4'>{data.Propy}</p>
											<div className='mmt-pop-img-dv mt-4 font-avg '>
												<Image className='mmt-pop-img' src={DEEPSOLUTION2} alt='no-img' />
											</div>
										</Popover.Content>
									</Popover>
								</Overlay>
							);
						})}
					</div>

					<Row className=''>
						<Col md lg={12} className='position-relative'>
							<Fade bottom>
								<h1 className='font-xl font-200 text-center'>MMT Deep Learning Solutions</h1>
							</Fade>
							{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						</Col>
					</Row>
				</Container>
			</div>
			<Container fluid='md' className='mmt-papercard-container w-100 h-100'>
				<Row className='align-items-center justify-content-center pt-4 mb-5'>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<Image
								className='mmt-block-solution w-100 mt-3'
								src={DEEPSOLUTION}
								alt='no-img'
							></Image>
						</Fade>
					</Col>
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 5, order: 2 }}
						className='position-relative py-4'
					>
						<Fade bottom>
							<h5 className='text-center text-lg-start font-800'>IBM Deep Learning Platform</h5>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-3 font-400 lht-27'>
								Technical innovators turn to the IBM Blockchain Platform, the leading Hyperledger
								Fabric platform, to build, operate, govern and grow blockchain solutions across any
								computing environment through Red Hat® OpenShift®.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center pb-5 mb-5'>
					<Col
						xs={{ span: 12, order: 2 }}
						lg={{ span: 5, order: 1 }}
						className='position-relative py-4'
					>
						<Fade bottom>
							<h5 className='text-center text-lg-start font-800'>IBM Deep Learning Platform</h5>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-3 font-400 lht-27'>
								Technical innovators turn to the IBM Blockchain Platform, the leading Hyperledger
								Fabric platform, to build, operate, govern and grow blockchain solutions across any
								computing environment through Red Hat® OpenShift®.
							</p>
						</Fade>
					</Col>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image
								className='mmt-block-solution mt-3 w-100'
								src={DEEPSOLUTION2}
								alt='no-img'
							></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='justify-content-center align-items-center pb-5 mb-5'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='font-600 w-100 px-5 py-4 btn btn-green'>
								Contact Our Blockchain Expert
							</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default DeepLearningCards;
