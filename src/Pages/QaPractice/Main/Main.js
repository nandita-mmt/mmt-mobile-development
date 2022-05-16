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
import AcceptanceTestingNonFunctional from '../../../Assets/Images/QaPractice/AcceptanceTestingNonFunctional.png';
import AccessibilityTesting from '../../../Assets/Images/QaPractice/AccessibilityTesting.png';
import AdHocTesting from '../../../Assets/Images/QaPractice/AdHocTesting.png';
import AlphaTestingManual from '../../../Assets/Images/QaPractice/AlphaTestingManual.png';
import AutomationTesting from '../../../Assets/Images/QaPractice/AutomationTesting.png';
import BlackBoxTesting from '../../../Assets/Images/QaPractice/BlackBoxTesting.png';
import EndToEndTesting from '../../../Assets/Images/QaPractice/EndToEndTesting.png';
import FunctionalTestingManual from '../../../Assets/Images/QaPractice/FunctionalTestingManual.png';
import IntegrationTestingManual from '../../../Assets/Images/QaPractice/IntegrationTestingManual.png';
import LoadTestingNonFunctional from '../../../Assets/Images/QaPractice/LoadTestingNonFunctional.png';
import MonkeyTesting from '../../../Assets/Images/QaPractice/MonkeyTesting.png';
import PerformanceTestingNonFunctional from '../../../Assets/Images/QaPractice/PerformanceTestingNonFunctional.png';
import RegressionTestingManual from '../../../Assets/Images/QaPractice/RegressionTestingManual.png';
import SanityTestingManual from '../../../Assets/Images/QaPractice/SanityTestingManual.png';
import SecurityTestingManual from '../../../Assets/Images/QaPractice/SecurityTestingManual.png';
import SmokeTestingManual from '../../../Assets/Images/QaPractice/SmokeTestingManual.png';
import StressTestingNonFunctional from '../../../Assets/Images/QaPractice/StressTestingNonFunctional.png';
import UnitTestingFunctionalOrManual from '../../../Assets/Images/QaPractice/UnitTestingFunctionalOrManual.png';

const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'Does every website or application require testing?', 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Yes, undoubtedly. Testing is basically a process to make certain that you deliver an exceptional end product to users.</p>
					</>
				)
			},
			{
				term: `How are websites or apps tested in Magicmind Technologies?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Our magicians at Magicmind, perform both website testing and mobile app testing. They follow a proper process where they evaluate the system and the functionality of the product. We provide both automation testing and manual testing.</p>
					</>
				)
			},
			{
				term: `What are the industries where you provide the testing services?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>As a leading service provider in mobile app testing and website testing, Magicmind cover all industries, be it legal, wellness and healthcare, finance, travel and hospitality, entertainment, astrology,  eLearning, eCommerce, and much more.</p>
					</>
				)
			},
			{
				term: `I already have a website/app, am I eligible to avail of your QA services?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Yes, you are. We do not have such a policy where we only provide testing services to websites/apps that we built. Even if you have an existing website/app, we can test your product under our mobile app testing and website testing services.</p>
					</>
				)
			},
			{
				term: `How much will it cost to test my website/app?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>The testing cost isn't the same for all websites or apps. There are many factors that define the cost of quality analysis or testing services ranging from project nature, complexity, scope, and more.</p>
					</>
				)
			},
			{
				term: `How long does it take to run a testing process?`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Well, it again depends on various factors. Surely, it is not an overnight job. A lot of things such as the project complexity, types of bugs found, and more together define the duration of mobile app testing or website testing process.</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`, 
				desc: (
					<>
						<p className='font-300 text-center text-lg-start mb-0'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
					</>
				)
			},
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Quality - The best advertisement for your product</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Business is not just about building an exceptional website or mobile app but also about maintaining its efficiency through QA testing process so that business doesn't lose out on conversions or suffer a revenue loss.</p>
							<p className='font-300 text-start mt-4'>Quality analysis or testing is an integral part of a website development process for a bug-free and high  performing app or website. In simple terms, quality testing ensures seamless performance and increased sales.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='card-fill backdrop-green align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT QA Services</h2>
						</Fade>

						<Fade bottom>
							<p className="font-300 text-start mt-4 text-center">MMT QA and agile testing services offers tailor-made solutions to clients that best work for their businesses. We conduct meticulous agile testing to refine the overall performance of the website and app, deliver quality products and make your businesses flourish.</p>
							<p className='font-300 text-start mt-4'>Being a next-generation website and mobile app agile testing company, we deal in both manual testing and automation testing, following an agile approach that includes all types of mobile app and website testing.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-4'>Our Quality Assurance process</h2>
						</Fade>
						<Fade bottom>
							<div className='generic-card-3 pt-2'>
								<div className='generic-card'>
									<h3 className='heading'>Requirements analysis</h3>
									<ul>
										<li>Review the product specifications</li>
										<li>Review the wireframes and UI design</li>
										<li>Refine the initial effort estimation</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Test Planning</h3>
									<ul>
										<li>Define the objectives of testing</li>
										<li>Identify testing tools, techniques, and best practises</li>
										<li>Estimate time and effort for the project</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Test design</h3>
									<ul>
										<li>Identify test conditions based on product specifications</li>
										<li>Create and prioritise test cases</li>
										<li>Identify test data to support the test cases</li>
										<li>Set up test environments and required tools</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Test implementation and execution</h3>
									<ul>
										<li>Create test suites and place them within a test execution schedule</li>
										<li>Execute test cases and log the outcome (pass, fail, blocked, etc.)</li>
										<li>Compare actual results with the expected ones and report incidents</li>
										<li>Analyse what the cause is for the encountered incidents</li>
										<li>Repeat the test activities when the incidents are solved.</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Reporting the results</h3>
									<ul>
										<li>Report test runs and results</li>
										<li>Write test summary reports to the project stakeholders</li>
									</ul>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Exit criteria and test closure</h3>
									<ul>
										<li>Analyse if more testing is needed</li>
										<li>Ensure that all incidents are resolved</li>
										<li>Check that all planned deliverables are signed off</li>
									</ul>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why choose MMT?</h2>
								<p className='font-300 text-start mt-4 text-700'>We breathe technology, run on creativity and focus on quality.</p>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Agile Methodology</h3>
								<p className='font-300 text-center text-lg-start'>While quality brings in validation, it cannot impair the software development process and its pace. Therefore, we follow the Agile testing methodology which is much faster and dynamic in nature to resolve issues fast and ensure better-quality.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Up-to-date QA Process</h3>
								<p className='font-300 text-center text-lg-start'>We march hand-in-hand with the latest technologies and make sure our QA process includes the latest tools and processes, so your product receives the best services. Our QA magicians are up-to-date with their know-hows about the QA process.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>An inventory of testing devices</h3>
								<p className='font-300 text-center text-lg-start'>The quality of our software testing services is dependent on the variety of devices our team can perform their testing on. That's why we maintain a diverse assortment of testing devices that is constantly updated with the latest releases.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Manual and automated testing</h3>
								<p className='font-300 text-center text-lg-start'>We create test cases based on the requirements, execute the test cases and analyse the results, add and track the defects and again verify if the bugs have been fixed. We switch from manual to automated testing depending on the project and its resources.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Debugging and error correction</h3>
								<p className='font-300 text-center text-lg-start'>We try to break the app and to cover as many test cases as possiblet. We run the test cases and if an issue is found, we report the bug to the development team. Once the bug is fixed, we re-test it to confirm the fix and only then move on with the test cases.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>MMT Agile Testing Services</h2>
							<p className='font-300 text-start mt-4 text-700'>Our QA experts run a number of tests on every piece of your website to make sure that your customers get the best quality final product. From manual to automation, performance testing to integration testing, and more advance testing, we have got it covered.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Unit Testing &mdash; Functional or Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Unit testing is a crucial manual testing used to test each and every unit of a mobile application or a website. It is considered as the first phase of functional testing. Our QA team employs unit testing to identify the bugs early in the development cycle.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={UnitTestingFunctionalOrManual} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SecurityTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Security testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Since the performance and the efficacy of any website or mobile app depends on its security, we perform security testing to discover any bug, risk, weakness in your application or website and ensure the best security of your product.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Performance testing &mdash; Non-functional</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Performance testing checks the speed, response time, stability, scalability, resource usage, and overall performance of a software application under a particular workload. Our QA experts identify and eliminate performance bottlenecks in a software application.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={PerformanceTestingNonFunctional} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={IntegrationTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Integration Testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our QA magicians test the components of the product and verify that individual modules of code work together properly as a group as expected. Through integration testing, testers ensure these components operate and communicate together seamlessly.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Regression Testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Regression testing ensures that the old code still works once the latest code changes are released and ascertains it does not affect the existing functionalities of a product. This. Our QA experts run end-to-end regression testing to ensure the best performance of your product.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={RegressionTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={SmokeTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Smoke Testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We perform minimal tests to run on each deployed software build to check whether or not the website or mobile app is stable or not. Our QA experts verify the main functionality of a component or system and gives confirmation to the QA team to deploy further testing.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Sanity Testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our QA professionals perform sanity testing on new versions of stable builds to validate either new functionality or bug fixes and ensure that the code changes that were implemented are working as expected.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={SanityTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AlphaTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Alpha Testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Alpha testing uses internal team members or representative group of consumers evaluate the product before its release in the market. Alpha testing provides an immediate subset of testers to root out major bugs before the software is seen by external users. </p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Stress Testing &mdash; Non- functional</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>The goal of stress testing is to measure software on its robustness and error handling capabilities under extremely heavy load conditions, and to ensure that the product doesn't crash under crunch situations.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={StressTestingNonFunctional} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={LoadTestingNonFunctional} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Load Testing &mdash; Non-functional</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>At Magicmind, our QA professionals test the performance of a software application under a specific expected load to determine how the software application behaves while being accessed by multiple users simultaneously and if further performance updates are needed.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Functional testing &mdash; Manual</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Functional website testing and mobile app testing is a part of our core software testing services to check the functionality of a website and verify the reliability and functionality of each feature of the product and improve the performance of your website or app.  </p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={FunctionalTestingManual} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AcceptanceTestingNonFunctional} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Acceptance testing &mdash; Non-functional</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Acceptance testing involves reviewing the feature-complete application flow and end-to-end experience, based on function processing and user requirements. This is done to ensure that the end user can achieve the goals set in the business requirements.  </p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Black box testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Black box testing checks the functionality of the website and application keeping the users' needs in mind. Although, the code is not visible to testers in black box testing, our QA team use both valid and invalid input to test all the possible combinations of actions of users.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={BlackBoxTesting} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AccessibilityTesting} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Accessibility testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Accessibility testing services involves audits and guidance to assess through comprehensive breakdown of designs and features to identify if your digital product is easy to use and inclusive for all users and if it is updated according to current standards and regulations.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Ad-hoc Testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Since ad-hoc testing detect a bigger number of bugs, we run ad-hoc testing randomly at any stage of the testing cycle to determine the software quality and discover any software issues that may have been missed during a traditional and formal testing process.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={AdHocTesting} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={MonkeyTesting} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Monkey Testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Monkey testing is a type of Ad-hoc testing conducted at the level of unit testing to check if the application or the software is able to withstand crashes by providing random inputs and checking the behaviour and eliminate any bugs that may have a higher impact.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>End to End Testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>End to end testing in the software development lifecycle (SDLC) is done test the functionality and performance of an application under product-like circumstances and data to replicate live settings to simulate what a real user scenario looks like from start to finish.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={EndToEndTesting} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={AutomationTesting} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Automation Testing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our automation testing services help businesses to focus more on the performance and efficiency of their website by testing the website's functionality along with its behaviour. Automating testing ensures your website is bug-free before going live for users.</p>
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
												{faq.desc}
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