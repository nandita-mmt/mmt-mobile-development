import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import DEMO from '../../../Assets/Images/innovation/ino-vid.webp';
// import IMG from '../../../Assets/Images/Knowledge/know-arrow.svg';

import './KnowledgeIndustryCards.scss';

const KnowledgeIndustryCards = () => {
	return (
		<div className='KnowledgeIndustryCards'>
			<Container className='mmt-papercard-container w-100 h-100 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>Unique web designs converting users</h1>
						</Fade>
						<p className='font-300 text-center mt-4'>
							MagicMinds Technologies' web practice stands on the strong pillars of supporting,
							designing, building and evolving. Our skilled developers deliver intuitive and speedy
							web portals, websites and other solutions in the vertical that digitally transform the
							online presence of organizations with plethora of benefits.
						</p>
						<p className='font-300 text-center mt-4'>
							We specialize in rendering next-generation websites that help you to sail smoothly
							through the constantly-evolving technological changes.
						</p>
					</Col>{' '}
				</Row>
				{/* <Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Law</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Law companies are embracing contemporary marketing strategies to communicate with
								their clients in real-time. How are we assisting them? Simply by using our unique
								brand positioning tactics to improve their web presence. And the outcomes? Happy
								clients, happier us!
							</p>
						</Fade>
						<Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/law' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span>
										<img src={IMG} alt='no-img' className='mmt-button-arrow' />
									</span>
								</Link>
							</div>
						</Fade>
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<h1
								className='img-text text-lg-end text-center'
								style={{ backgroundImage: `url(${DEMO})` }}
							>
								L
							</h1>
						</Fade>
					</Col>
				</Row> */}
				
				<Row className='align-items-center justify-content-center pt-5 pb-5'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>We help industries embrace digital transformation by blending admirable innovations with disruptive technology</h1>
							<p className='text-center mt-4 font-400 lht-27'>Online presence matters for every brand and every business vertical. We are living in a digital age where digital transformation is the new normal. Therefore, every business and industry type should have an interactive and user-friendly website and app to assist more and more clients effectively. </p>
							<p className='text-center mt-4 font-400 lht-27'>Our skilled web and mobile app developers along with creative designers worked with diverse client profiles across different businesses verticals across the USA, India, UK and Canada, to design and create wonderful websites and mobile development that look and work awesome on all size devices from desktop computers to smartphones.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>L</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Legal</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Grow your client base or make your legal case organisation more straightforward with our law firm web and app development and marketing services.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
									</p>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Astrology</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Give a digital push to the astrology services and take it to a global level for more customer reach and increased revenue with MMT services.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>A</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>L</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Real-Estate</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Transform your Real-estate business with MMT's futuristic web, app and 360 marketing services and feel the difference we create for your business</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Finance and Banking</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Carving the next-gen banking and finance culture to deliver value with MMT's proven industry skills and innovative solutions to bring digital transformation</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>F</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>H</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Health and Wellness</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We bring technology and wellness together to help businesses grow through intuitive websites, feature-rich mobile apps and result-oriented marketing solutions.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Travel and Hospitality</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Make travelling easy with an exceptional website and a mobile app loaded with features that define your travel platform and market it around the globe with MMT.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>T</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>E</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Education &amp; eLearning </h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Take education to the next level and shape up and scale your eLearning platform with improved technology, trends and platform with Magicmind Technologies.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Logistics &amp; Transport</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Take your transport business to a global level and simplify your logistics with better operational efficiency and automation with MMT services and solutions.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>L</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>I</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Immigration</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Feature-rich software solutions to empower the immigration consultants and firms with more flexibility through our solutions and visibility with 360 marketing services.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Automotive</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We deliver customized automotive web and mobile app development Services and provide result-driven marketing solutions to catch up with the future of mobility.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>A</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>M</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Media &amp; Entertainment </h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We offer next-level media &amp; entertainment web and app development services, winning strategies and innovative marketing solutions that open new doors of growth</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Retail &amp; eCommerce</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Go online and grow online. Match up to the pace of changing market with our web &amp; app development solutions along with our marketing services to grow your reach.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>R</h1></Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1 className='img-text text-lg-start text-center' style={{ backgroundImage: `url(${DEMO})` }}>I</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>IT &amp; Tech</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We offer full-cycle development, digital transformation solutions to IT and Tech companies and help them improve brand visibility with our 360 marketing services.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/healthcare-&-fitness' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center mmt-knowledge-individual'>
					<Col xs={{ span: 12, order: 2 }} md={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom><h1 className='font-xl text-center text-lg-start font-200'>Restaurant &amp; Food Service</h1></Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Uplift your restaurant business and redefine the dining experience for your customers and create on-demand solutions with MMT's services and Appetyzer.</p>
						</Fade>
						{/* <Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/real-estate' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span><img src={IMG} alt='no-img' className='mmt-button-arrow' /></span>
								</Link>
							</div>
						</Fade> */}
					</Col>
					<Col xs={{ span: 12, order: 1 }} md={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom><h1 className='img-text text-lg-end text-center' style={{ backgroundImage: `url(${DEMO})` }}>R</h1></Fade>
					</Col>
				</Row>

				{/* <Row className='align-items-start justify-content-center'>
					<Col md={5} className='position-relative'>
						<Fade bottom>
							<h1
								className='img-text text-lg-start text-center'
								style={{ backgroundImage: `url(${DEMO})` }}
							>
								A
							</h1>
						</Fade>
					</Col>
					<Col md={7} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl text-center text-lg-start font-200'>Astrology</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>
								Concentrate on aligning the stars of your clients while we align your Google
								rankings for an improved online presence. We can help you shape your brand identity
								using high-end mobile applications such as iOS, Android, Hybrid and more.
							</p>
						</Fade>
						<Fade bottom>
							<div className='d-flex flex-row justify-content-lg-start justify-content-center align-items-center mt-4'>
								<Link to='/astrology' className='btn btn-white mmt-know-btn' src={IMG} alt='no-img'>
									<span>
										<img src={IMG} alt='no-img' className='mmt-button-arrow' />
									</span>
								</Link>
							</div>
						</Fade>
					</Col>
				</Row> */}
				<Row className='align-items-center justify-content-center mt-5 pt-5'>
					<Col lg={12}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center pt-5 mb-0'>
								Ready To Start? Connect With Us Today!
							</h1>
						</Fade>
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center my-5'>
					<Col lg={6}>
						<Link exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 font-16 w-100'>
								Let's solve your problem 
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default KnowledgeIndustryCards;
