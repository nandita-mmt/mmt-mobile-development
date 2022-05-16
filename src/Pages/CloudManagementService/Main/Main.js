import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
import DOTS from '../../../Assets/Images/Common/list-dot.svg';
//import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import BackupandDisasterRecovery from '../../../Assets/Images/CloudManagementServices/BackupandDisasterRecovery.png';
import BusinessSolutionServices from '../../../Assets/Images/CloudManagementServices/BusinessSolutionServices.png';
import CloudDeployment from '../../../Assets/Images/CloudManagementServices/CloudDeployment.png';
import CloudOperations from '../../../Assets/Images/CloudManagementServices/CloudOperations.png';
import CloudOptimization from '../../../Assets/Images/CloudManagementServices/CloudOptimization.png';
import Customization from '../../../Assets/Images/CloudManagementServices/Customization.png';
import FlexibleCloudPlatform from '../../../Assets/Images/CloudManagementServices/FlexibleCloudPlatform.png';
import HostingMonitoringandOrchestration from '../../../Assets/Images/CloudManagementServices/HostingMonitoringandOrchestration.png';
import PredictiveCloudConsumptionAnalytics from '../../../Assets/Images/CloudManagementServices/PredictiveCloudConsumptionAnalytics.png';
import ProactiveSupport from '../../../Assets/Images/CloudManagementServices/ProactiveSupport.png';
import RobustITInfrastructure from '../../../Assets/Images/CloudManagementServices/RobustITInfrastructure.png';
import ServiceManagement from '../../../Assets/Images/CloudManagementServices/ServiceManagement.png';


const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: `What are Managed Service Providers(MSPs)?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-4 font-400 lht-27'>Managed Service Providers (MSPs) are an outsourced third-party company or strategic partners that manages your IT requirements and functions and handles the company's IT operations by enabling IT agility and lowering fixed costs.</p>
					</>
				)
			},
			{
				term: `How much do you charge for Managed Services?`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-4 font-400 lht-27'>It really depends on the service levels and your goals. That said, we do have different tiered structures that offer different services at different levels, which define the work hours, fees and response times. We will work within the framework of your needs, budget, and requirements</p>
					</>
				)
			},
			{
				term: `I have a few more questions that aren't listed here!`, 
				desc: (
					<>
						<p className='text-center text-lg-start mt-4 font-400 lht-27'>Oh no! If your questions are not listed here, feel free to contact us and we will be more than happy to answer your queries.</p>
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
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>We deliver cloud. You deliver masterpieces</h2>
							<h4 className='font-400 text-center'>Managed Cloud Services</h4>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Faster innovation, smarter and flexible operations, disrupting markets, innovative ways of connecting with customers and creating business value is all possible with one big move - to the cloud.</p>
							<p className='font-300 text-start mt-4'>That said, migrating to the cloud, either public or private, is just the beginning. "Cloud Managed Services" offer you a comprehensive cloud management support only when the complete responsibility of your cloud operations is handed over to Cloud Managed Service Providers (MSPs).</p>
							<p className='font-300 text-start mt-4'>Without a proven managed cloud service provider, your business will require a more resource-intensive model of support to build network infrastructure, manage applications, and enhance business processes. Increasing cloud adoption across industries is offering a due boost to the Cloud Service Providers (CSPs).</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5'>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-3'>MMT Managed Cloud Services</h2>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>MMT designs, builds, and manages comprehensive cloud solutions to fit your needs and budget to deliver scalability, agility, and rapid deployment capabilities, that empowers businesses to capture the transformative value of cloud and explore new possibilities.</p>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Capture the full benefits of MMT's cloud Managed Services (CMS) and leave the complexities of managing workloads to us. We manage your cloud infrastructure efficiently and effectively to increase business ROI and the scalability of your cloud infrastructure.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mb-5'>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
						<Col md lg={12}>
							<Fade bottom>
								<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Benefits of Cloud Managed Services</h2>
								<h4 className='font-400 text-center mt-3'>Manage, Optimise and Enhance Management Efficiency with Cloud Managed Services</h4>
							</Fade>
						</Col>
					</Row>

					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Optimize Costs</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>With pay-as-you-go cloud managed services - no long-term contracts or complex licensing. Charges will be based on usage — not on hours and resources. Pay only for the services you consume.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Consolidated Services</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>The new integrated cloud and infrastructure operations management platform helps to migrate and manage your entire cloud ecosystem into one easy-to-use shared service model.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Workload Automation</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Leverage the power of intelligent automation while using fewer resources with and gain a faster and more cost-effective route to cloud-based automation.</p>
							</div>
							<div className='mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Predictive Analytics</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Modernise and simplify the complexity of cloud infrastructure with predictive analytics that empowers business to make better, faster, and more well-informed decisions.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Scalability</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Managed cloud services proactively explore and identify enhancements and accommodate rapid changes and help firms stay productive, improve system availability and eliminate detrimental downtime.</p>
							</div>
						</OwlCarousel>
					</Row>
				</Container>
			</div>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our End to End Services</h2>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Hosting, Monitoring and Orchestration</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Integrate all cloud software and hardware into a unified analytics platform. Magicmind cloud managed services will seamlessly integrate your IT infrastructure into an easy-to-use platform where you can monitor and modify assets as well as track results.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={HostingMonitoringandOrchestration} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={BackupandDisasterRecovery} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Backup and Disaster Recovery as a Service (DRaaS)</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Maintaining a secondary disaster recovery site is expensive and complex. Protect your data and easily recover lost data stored on secondary sites with our cloud managed services.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Cloud Deployment</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>We design and deploy an end-to-end application development and transform your application management. We provide detailed reports on  the current state of your applications, implementation plans, activities performed, and measured results for timely decision-making.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={CloudDeployment} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={CloudOptimization} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Cloud Optimization</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Optimising cloud applications and infrastructure with Magicmind can help you reduce the cost of managing traditional legacy applications, eliminate unnecessary hardware, and save financial capital in both the short term and the long run.</p>
						</Fade>
						<Fade bottom>
							<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
								<Button className='btn btn-green px-4 py-2 font-400 w-8'>Know More</Button>
							</NavLink>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start card-ends justify-content-center mb-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Predictive Cloud Consumption Analytics</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our predictive cloud analytics tool forecast, plan, optimise and allocate across various channels. Allow your business to stabilise its financial future with our self-assessing and learning analytical frameworks designed specifically to unlock exponential business value.</p>
						</Fade>
						<Fade bottom>
							<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
								<Button className='btn btn-green px-4 py-2 font-400 w-8'>Know More</Button>
							</NavLink>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution mt-3 w-100' src={PredictiveCloudConsumptionAnalytics} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={RobustITInfrastructure} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Robust IT Infrastructure</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Magicmind cloud management services allows you to have a healthy IT environment by offering only high-grade equipment and solutions and keeping all your IT systems up-to-date with regular software updates and immediate security patches installations.</p>
						</Fade>
					</Col>
				</Row>
			</Container>

			<Container className='card-fill-bottom-wrapper cust-pt-0 mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4 remove-padding'>
					<Col md lg={12}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Why Magicmind Managed Cloud Services?</h2>
							<p className='font-400 text-center mt-3'>Magicmind Cloud Managed Services includes enterprise information management applications, cloud infrastructure and managed services operations.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Cloud operations</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Manages all infrastructure and operations, including platform, application, system, security, performance, availability and capacity management using best practises.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={CloudOperations} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={BusinessSolutionServices} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Business solution services</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Manages Information Management applications as well as providing support for customizations and integrations, application upgrades, service requests and more.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Proactive support</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Detects and escalates performance and service disruptions in addition to 24x7 support and maintenance to detect any issues and provide ad-hoc support services.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={ProactiveSupport} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={ServiceManagement} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Service management</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Service Managers oversee all aspects of the cloud managed services program, from project initiation to implementation for streamlined communications with a single point of contact.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Customization</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Our application experts support unique application requirements, including migration, customization, integrations, workflows, templates and more.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={Customization} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={FlexibleCloudPlatform} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Flexible cloud platform</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Scale globally with cloud partners such as Google Cloud, Microsoft Azure or Amazon Web Services</p>
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