import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
import DOTS from '../../../Assets/Images/Common/list-dot.svg';
//import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import BlockchainAsAServiceBaaSSolutions from '../../../Assets/Images/BlockChain/BlockchainAsAServiceBaaSSolutions.png';
import BlockchainSecurity from '../../../Assets/Images/BlockChain/BlockchainSecurity.png';
import BlockchainTechnologyConsultation from '../../../Assets/Images/BlockChain/BlockchainTechnologyConsultation.png';
import BlockchainTesting from '../../../Assets/Images/BlockChain/BlockchainTesting.png';
import CryptoCurrencyDevelopment from '../../../Assets/Images/BlockChain/CryptoCurrencyDevelopment.png';
import CryptoExchangeDevelopment from '../../../Assets/Images/BlockChain/CryptoExchangeDevelopment.png';
import CryptoTokenDevelopment from '../../../Assets/Images/BlockChain/CryptoTokenDevelopment.png';
import CryptoWalletDevelopment from '../../../Assets/Images/BlockChain/CryptoWalletDevelopment.png';
import CustomBlockchainAppDevelopment from '../../../Assets/Images/BlockChain/CustomBlockchainAppDevelopment.png';
import DecentralizedApplicationDevelopment from '../../../Assets/Images/BlockChain/DecentralizedApplicationDevelopment.png';
import EndToEndDAppSolutions from '../../../Assets/Images/BlockChain/EndToEndDAppSolutions.png';
import MMTBlockchainDevelopmentSolutions from '../../../Assets/Images/BlockChain/MMTBlockchainDevelopmentSolutions.png';
import PublicAndPrivateBlockchain from '../../../Assets/Images/BlockChain/PublicAndPrivateBlockchain.png';
import SmartContractsDevelopment from '../../../Assets/Images/BlockChain/SmartContractsDevelopment.png';
import WhyBlockchainDevelopment from '../../../Assets/Images/BlockChain/WhyBlockchainDevelopment.png';
import WhyMMTBlockchainDevelopmentServices from '../../../Assets/Images/BlockChain/WhyMMTBlockchainDevelopmentServices.png';



const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: `What are the advantages of Blockchain in the mobile app industry?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-0 font-400 lht-27'>Blockchain is revolutionising the mobile app industry in different ways such as:</p>
						<ul className='list-row-2'>
							<li className='list-col font-400 text-lg-start lht-27'>Providing a more secure and transparent environment.</li>
							<li className='list-col font-400 text-lg-start lht-27'>Offering multiple user access but safeguarding digital information.</li>
							<li className='list-col font-400 text-lg-start lht-27'>Improving the overall ROI.</li>
							<li className='list-col font-400 text-lg-start lht-27'>Penetrating remote areas.</li>
							<li className='list-col font-400 text-lg-start lht-27'>Protecting the system from potential bugs, crashes, errors, and other issues.</li>
						</ul>
					</>
				)
			},
			{
				term: `What are the business applications of Blockchain?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-0 font-400 lht-27'>Here are some of the business applications of Blockchain technology to consider:</p>
						<ul className='list-row-2'>
							<li className='list-col font-400 text-lg-start lht-27'>Smart Contract</li>
							<li className='list-col font-400 text-lg-start lht-27'>Cloud Storage</li>
							<li className='list-col font-400 text-lg-start lht-27'>Supply-Chain Communications &amp; Proof-of-Provenanc</li>
							<li className='list-col font-400 text-lg-start lht-27'>Crypto Payments</li>
							<li className='list-col font-400 text-lg-start lht-27'>Electronic Voting</li>
						</ul>
					</>
				)
			},
			{
				term: `How to hire the right Blockchain development company?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-0 font-400 lht-27'>The decision to hire the right blockchain app development company varies based on factors like your requirement, experience of the company in dealing with the same requirement, team size, portfolio, industry exposure, ratings &amp; reviews, etc.</p>
					</>
				)
			},
			{
				term: `How much does it cost for blockchain app development?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-0 font-400 lht-27'>The cost of blockchain app development depends on various factors such as the complexity of application, number of stakeholders interacting with the app, industry compliances, etc. So, it is better to get an estimate while analysing these factors.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-0 font-400 lht-27'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>Secure, Sustainable and decentralised ecosystem is the future</h2>
						</Fade>
						<Fade bottom>
							<p className='font-400 text-start mt-4'>Blockchain technology is changing the business landscape and is the disruptive future that can make your business process highly secure, scalable, and transparent. Simply put, it is a novel approach to data security by storing data in a difficult or impossible to alter, hack, or cheat method.</p>
							<p className='font-400 text-start mt-4'>Irrespective of the business industries, the blockchain technology can support a wide array of applications for all types of domains, such as banking, finance, healthcare, eLearning, eCommerce, travel, insurance, or more.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center cust-pt-0 justify-content-center mb-5 pt-0'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Why Blockchain Development?</h2>
						</Fade>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Automation</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Lower replication of data</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Higher transparency</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Faster transactions</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Robust data security</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Less data storage cost</p>
								</div>
							</div>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={WhyBlockchainDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='mb-5 align-items-center justify-content-center'>
					<Col md lg={11} className='position-relative'>
						<Fade bottom>
							<h1 className='text-center font-200 font-main'>MMT Blockchain Development Services</h1>
							<p className='text-center mt-4 font-400 lht-27'>Magicmind Technologies is recognized for its exemplary blockchain development solutions and services using agile methodology. Our disruptive tech stack supports blockchain application development using a standard approach.</p>
							<p className='mt-4 text-center font-400'>We decentralize applications, attain high security, and even create a network where verifiable and traceable transactions can be done at ease. Embrace MMT Blockchain Development Services to develop dApp and enable the growth of your business in this digital world.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The MMT Process</h2>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Define</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Kick off the development process by discussing and defining the system requirements, and making initial tech decisions to move to the next-step.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Design</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Our magicians start off with determining and designing your product's first look, model the user experience and user journey, features and accordingly plan for the release.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Deliver</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Moving forward, MMT starts with detailed, development-ready specs, time and cost estimates, a launch plan, and a team of MMT magicians ready to execute your plan.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Develop</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Throughout the product development phase, MMT follows agile methodology and conduct quality assurance checks ensuring we develop and deliver nothing but the best.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Services</h2>
							<p className='text-center mt-4 font-400 lht-27'>Magicmind Technologies is one of the top blockchain development company that offers a wide range of block development services and decentralised solutions to boost the trust, transparency, scalability, and security to the business ecosystem.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Blockchain Technology Consultation</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We provide exceptional, cutting-edge, and futuristic blockchain solutions to businesses  and conduct comprehensive maintenance and testing services to ensure optimal performance of applications and integrations.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BlockchainTechnologyConsultation} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CustomBlockchainAppDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Custom Blockchain App Development </h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Based on your objectives and requirements, we design and develop protected, trusted, scalable and tailor-made blockchain application development services, for both public and private, to exchange data records and other transaction information.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Blockchain-as-a-Service (BaaS) solutions </h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We develop BaaS solutions by embedding automated workflows into existing applications and creating internal &amp; external breach-resistant applications for preventing fraud &amp; cyber-attacks while managing sensitive data.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BlockchainAsAServiceBaaSSolutions} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SmartContractsDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Smart Contracts Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our team of smart contract developers craft immutable and accurate smart contracts to supply decentralised web solutions which make the business ecosystem conflict-free.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Decentralised Application Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We develop bespoke decentralised applications or DApps and integrate them into existing enterprise systems that empower businesses to leverage a protected, secure environment for collaboration and diverse high security business transactions.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={DecentralizedApplicationDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={EndToEndDAppSolutions} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>End To End DApp Solutions</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>From DApp ideation, design, coding, development, testing to the final Launch, we offer all sorts of DApps development assistance under blockchain development services to deliver reliable, flawless, and robust decentralised apps.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Crypto Exchange Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We develop highly scalable Cryptocurrency Exchange Software to manage cryptocurrency global trading and blockchain-based digital assets protected by a layered architecture to secure digital exchange data and assets.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={CryptoExchangeDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CryptoWalletDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Crypto Wallet Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>As part of our Blockchain Development Services, we create Crypto wallet Dapps that hold hundreds of cryptocurrencies, while carrying information related to your wallet balance and purchase history.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>CryptoCurrency Development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We offer custom cryptocurrency development services by designing and developing advanced crypto-coins. We employ the latest technologies and trends to build an independent and secure digital currency.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={CryptoCurrencyDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CryptoTokenDevelopment} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Crypto-token-development</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our team of blockchain developers also offers the service of digital tokenization. The tokens we create can be used to represent asset values to be traded as cryptocurrency, and loyalty points, instead of cash.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Blockchain Security</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We develop blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for shared and distributed ledgers while transforming how businesses conduct transactions globally.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BlockchainSecurity} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={PublicAndPrivateBlockchain} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Public &amp; Private Blockchain</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We develop both public and private blockchain systems for businesses that process many transactions per second or very few transactions. All of our systems and blockchain technology software are customised to your business needs.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Blockchain Testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We deliver focused blockchain performance testing services for blockchain applications. Based on the requirements and development, we build a blockchain testing strategy to define the testing type and approach for your application.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BlockchainTesting} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-0'>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>MMT Blockchain Development Solutions</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center cust-pt-0 justify-content-center mb-5 pt-0'>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 1 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={MMTBlockchainDevelopmentSolutions} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 2 }} className='position-relative'>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Inventory Tracking</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Identification &amp; Security</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Enabling Smart Contracts</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Boosting Loyalty Programs</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Strengthening Consultation</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Authenticating KYC/AML Data</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Safe-Guarding Autonomous Data</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Recording Smart Contracts Details</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Real-Time Recording of Medical Records</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Streamlining Supply Chain Management</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Data Standardisation &amp; Legacy Integration</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Safeguarding Rights of Intellectual Property</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Authenticating Customer Identification Data</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Real-Time Verification of Financial Documents</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Empowering Real-Time Collateralisation of Assets</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Enhanced Prevention Against Sensitive Data Fraudulence </p>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-0'>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>Why MMT Blockchain Development Services?</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center cust-pt-0 justify-content-center mb-5 pt-0'>
					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={WhyMMTBlockchainDevelopmentServices} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='position-relative'>
						<Fade bottom>
							<div className='mmt-project-details pb-4 px-4 d-flex flex-column align-items-start'>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Cost Effective</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Agile Development Process</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Bespoke Strategies and Solutions</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Vast Industry Experience</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Round the Clock Support</p>
								</div>
								<div className='d-flex flex-row justify-content-start align-items-start mt-2 mb-0'>
									<div><BiCircle className='icon-circ-purp' size={15} /></div>
									<p className=' mb-0 font-400'>Quality Assurance and Testing</p>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
				
				<Row className='justify-content-center align-items-center pb-5 mb-5'>
					<Col md lg={6}>
						<p className='text-center font-700'>Want to be future-ready with Blockchain Development Services?</p>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='w-100 font-600 px-5 py-4 btn btn-green'>Tap into the Future</Button>
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