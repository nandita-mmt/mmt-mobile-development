import React from 'react';
import { Helmet } from "react-helmet";
import { useHistory } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../Components/FormController/FormikControl';
import './MobileLanding.scss';
import BANNER01 from "../../Assets/Images/MobileLanding/banner-01.png";
import ICON01 from "../../Assets/Images/MobileLanding/icon-01.png";
import ICON02 from "../../Assets/Images/MobileLanding/icon-02.png";
import ICON03 from "../../Assets/Images/MobileLanding/icon-03.png";
import ICON04 from "../../Assets/Images/MobileLanding/icon-04.png";
import BASICICON from "../../Assets/Images/MobileLanding/basic-icon.png";
import STANDARDICON from "../../Assets/Images/MobileLanding/standard-icon.png";
import PREMIUMICON from "../../Assets/Images/MobileLanding/premium-icon.png";
import RAJPALACE from "../../Assets/Images/MobileLanding/01.jpg";
import BONGOPAY from "../../Assets/Images/MobileLanding/02.jpg";
import SHRESTA from "../../Assets/Images/MobileLanding/03.jpg";
import SETTINGNEEDS from "../../Assets/Images/MobileLanding/04.jpg";
import APPSTOREICON from "../../Assets/Images/MobileLanding/app-store-icon.png";
import PLAYSTOREICON from "../../Assets/Images/MobileLanding/play-strore-icon.png";
import LARAVELICON from "../../Assets/Images/MobileLanding/laravel-icon.png";
import REACTICON from "../../Assets/Images/MobileLanding/react-icon.png";
import MYSQL from "../../Assets/Images/MobileLanding/mysql.png";
import APPICON from "../../Assets/Images/MobileLanding/app-icon.png";
import SWIFTICON from "../../Assets/Images/MobileLanding/swift-icon.png";
import KOTLINICON from "../../Assets/Images/MobileLanding/kotlin-icon.png";
import COCOATOUCHICON from "../../Assets/Images/MobileLanding/cocoa-touch-icon.png";
import COREDATAICON from "../../Assets/Images/MobileLanding/core-data-icon.png";
import WORDPRESSICON from "../../Assets/Images/MobileLanding/wordpress-icon.png";
import NODEJSICON from "../../Assets/Images/MobileLanding/node-js-icon.png";
import EXPRESSICON from "../../Assets/Images/MobileLanding/express-icon.png";
import T01 from "../../Assets/Images/MobileLanding/t-01.png";
import T02 from "../../Assets/Images/MobileLanding/t-02.png";
import T03 from "../../Assets/Images/MobileLanding/t-03.png";
import T04 from "../../Assets/Images/MobileLanding/t-04.png";
import T05 from "../../Assets/Images/MobileLanding/t-05.png";
import T08 from "../../Assets/Images/MobileLanding/t-08.png";
import T09 from "../../Assets/Images/MobileLanding/t-09.png";
import HTMLLOGO from "../../Assets/Images/MobileLanding/html_logo.svg";
import CSSLOGO from "../../Assets/Images/MobileLanding/css_logo.svg";
import BOOTSTAPLOGO from "../../Assets/Images/MobileLanding/bootstrap_logo.svg";
import STRAPILOGO from "../../Assets/Images/MobileLanding/strapi_logo.svg";
import REACTJS from "../../Assets/Images/MobileLanding/react_js.svg";
import ANGULARJSLOGO from "../../Assets/Images/MobileLanding/angular_js_logo.svg";
import VUEJSLOGO from "../../Assets/Images/MobileLanding/vue_js_logo.svg";
import EMBERLOGO from "../../Assets/Images/MobileLanding/ember_logo.svg";
import JAVALOGO from "../../Assets/Images/MobileLanding/java_logo.svg";
import PHPLOGO from "../../Assets/Images/MobileLanding/php_logo.svg";
import DOTNETLOGO from "../../Assets/Images/MobileLanding/dotnet_logo.svg";
import SWAGGERLOGO from "../../Assets/Images/MobileLanding/swagger_logo.svg";
import LAMBDALOGO from "../../Assets/Images/MobileLanding/lambda_logo.svg";
import CLOUDFUNCTIONSLOGO from "../../Assets/Images/MobileLanding/cloud_functions_logo.svg";
import PUBSUBLOGO from "../../Assets/Images/MobileLanding/pub_sub_logo.svg";
import NODEJSLOGO from "../../Assets/Images/MobileLanding/node_js_logo.svg";
import MONGODBLOGO from "../../Assets/Images/MobileLanding/mongo_db_logo.svg";
import MYSQLLOGO from "../../Assets/Images/MobileLanding/my_sql_logo.svg";
import POSTGRELOGO from "../../Assets/Images/MobileLanding/postgre_logo.svg";
import ORACLELOGO from "../../Assets/Images/MobileLanding/oracle_logo.svg";
import SQLSERVERLOGO from "../../Assets/Images/MobileLanding/sql_server_logo.svg";
import FIREBASELOGO from "../../Assets/Images/MobileLanding/firebase_logo.svg";
import DYNAMODBLOGO from "../../Assets/Images/MobileLanding/dynaom_db_logo.svg";
import BIGQUERYLOGO from "../../Assets/Images/MobileLanding/big_query_logo.svg";
import WORDPRESSLOGO from "../../Assets/Images/MobileLanding/wordpress_logo.svg";
import LARAVELLOGO from "../../Assets/Images/MobileLanding/laravel_logo.svg";
import ZENDFRAMEWORKLOGO from "../../Assets/Images/MobileLanding/zend_framework_logo.svg";
import CODEIGNITERLOGO from "../../Assets/Images/MobileLanding/codeigniter_logo.svg";
import JENKINSLOGO from "../../Assets/Images/MobileLanding/jenkins_logo.svg";
import CHEFLOGO from "../../Assets/Images/MobileLanding/chef_logo.svg";
import KUBERNETESLOGO from "../../Assets/Images/MobileLanding/kubernetes_logo.svg";
import ANSIBLELOGO from "../../Assets/Images/MobileLanding/ansible_logo.svg";
import AWSLOGO from "../../Assets/Images/MobileLanding/aws_logo.svg";
import GOGGLECLOUDLOGO from "../../Assets/Images/MobileLanding/google_cloud_logo.svg";
import AZURELOGO from "../../Assets/Images/MobileLanding/azure_logo.svg";
import TABLEAULOGO from "../../Assets/Images/MobileLanding/tableau_logo.svg";
import GOOGLEDATASTDIOLOGO from "../../Assets/Images/MobileLanding/google_data_studio_logo.svg";
import AZUREPOWERBILOGO from "../../Assets/Images/MobileLanding/azure_power_bi_logo.svg";
import C01 from "../../Assets/Images/MobileLanding/c01.png";
import C02 from "../../Assets/Images/MobileLanding/c02.png";
import C03 from "../../Assets/Images/MobileLanding/c03.png";
import C04 from "../../Assets/Images/MobileLanding/c04.png";
import C05 from "../../Assets/Images/MobileLanding/c05.png";
import C06 from "../../Assets/Images/MobileLanding/c06.png";
import FLAG01 from "../../Assets/Images/MobileLanding/flag-01.png";
import FLAG02 from "../../Assets/Images/MobileLanding/flag-02.png";
import FLAG03 from "../../Assets/Images/MobileLanding/flag-03.png";
import FLAG04 from "../../Assets/Images/MobileLanding/flag-04.png";
import FICON01 from "../../Assets/Images/MobileLanding/f-icon-01.png";
import FICON02 from "../../Assets/Images/MobileLanding/f-icon-02.png";
import FICON03 from "../../Assets/Images/MobileLanding/f-icon-03.png";
import FICON04 from "../../Assets/Images/MobileLanding/f-icon-04.png";
import LOGO2 from '../../Assets/Images/Banner/logo-dark.svg';
import ReactGA from "react-ga4";
import axios from 'axios';
import { MAILER_BASE_URL, leadgen, login_url } from "../../config/api/apiEndpoints";



const MobileLanding = () => {
	const history = useHistory();
	const [showLogo, setShowLogo] = React.useState('eight');
	const [selectedUUID, setSelectedUUID] = React.useState(['faqOne'])
	const getSelectedUUID = (uuid) => {
		setSelectedUUID(uuid)
	}
	ReactGA.initialize("UA-215914578-1");
	const initialValues = {
		Name: '',
		phone: '',
		email: '',
		company: '',
		message: '',
		newsletter_subscription: false
	};

	const validationSchema = Yup.object().shape({
		Name: Yup.string().required('Enter your Name'),
		phone: Yup.string().required('Enter your phone number').min(12, 'to short'),
		email: Yup.string().email('Enter valid email').required('Email is required'),
		company: Yup.string().required('Enter company Name'),
		message: Yup.string().required('Enter your message'),
	});
	const handleSubmit = async (value, { resetForm }) => {
		ReactGA.event({
			category: "MMT APP LP",
			action: "APP LP Lead"
		});
		const header = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		const user_cred = { identifier: 'roy@magicminds.io', password: 'Yehs7xRNsRtgtkj' };
		const login_data = await axios.post(login_url, JSON.stringify(user_cred), { headers: header });
		value["newsletter_subscription"] = document.getElementById('newsletter_subscription').checked;
		header['Authorization'] = 'Bearer ' + login_data.data.jwt
		value["leadgen_type"] = "1"
		axios.post(leadgen, JSON.stringify(value), { headers: header });
		console.log(login_data.data);
		axios.post(MAILER_BASE_URL + "/sendemail.php", value)
		history.push("/thank-you");
	}

	const stopHrefRedirect = (e) => {
		e.preventDefault();
	}
	/* Carousel */
	const responsiveTxt = { 0: { items: 1 }, 992: { items: 4 } };
	const toggleColor = () => {
		const className = 'hover-green';
		const isActiveSlideGreen = $('#carousel-parent').find('.owl-item.active').children('.mmt-car-content').hasClass('green');

		if (isActiveSlideGreen) {
			document.getElementById('carousel-parent').classList.remove(className);

		} else {
			document.getElementById('carousel-parent').classList.add(className);
		}
	}
	// const toggleNavClass = () => {

	// }
	return (<div className="default-page-template">
		<Helmet>
			<title>Hire On Demand Native IOS, Android Mobile App Developer Canada</title>
			<meta name="description" content="Hire IOS & Android Mobile App Development Experts from Magicminds. We follow a strong wireframe and UI/UX framework to deliver timebound and smooth development." />

		</Helmet>
		<div class="header-container">
			<div className='container'>
				<div className="row justify-content-between align-items-center">
					<div className="col-lg-4 col-md-3 col-sm-4 col-5">
						<a href="#header-logo-redirect" onClick={stopHrefRedirect}><img src={LOGO2} alt="" className="img-fluid" /></a>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-5">
						<a href="#enquiry" className="btn btns_custom float-end">Hire Consultants</a>
					</div>
				</div>
			</div>
		</div>
		<div className="fixed-sidebtn-container">
			<div className="fixed-sidebtn">
				<a href="#enquiry" className="btn btns_custom float-end" >Hire Consultants</a>
			</div>
		</div>
		<div className='content-wrapper'>
			<section className="banner">
				<div className="container">
					<div className="row justify-content-lg-end align-items-center">
						<div className="col-lg-6 col-md-6 col-sm-12 col-12 pt-5">
							<div className="banner-text text-lg-start text-md-center text-center">
								<h2>We are Experts in</h2>
								<h1>iOS & Android</h1>
								<h2>Mobile App Development</h2>
								<p>We are an award-winning mobile app development company that
									enables thriving startups & giant enterprises to solve complex business
									challenges through mobility solutions.</p>
								<h4>Build , Market & Grow</h4>
								{/* <a href="#enquiry" className="btn btns_custom">Hire Consultants</a> */}
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12 ddd pt-5">
							<div className="heading white">
								<h2>Let’s Talk About Your Project</h2>								
							</div>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ dirty, isSubmitting }) => {
									return (
										<Form noValidate className='w-100 mb-3'>
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='text'
															name='Name'
															placeholder='Name*'
															required={true}
															value={''}
														/>
														{/* <input type="text" required placeholder="Name*" className="form-control"/> */}
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='phone'
															name='phone'
															className="form-control"
															prefixInputName='countryPrefix'
															// placeholder='Enter phone number'
															placeholder='Phone Number*'
															required={true}
															value={''}
														/>
														{/* <input type="number" required placeholder="Phone number*" className="form-control"/> */}
													</div>
												</div>
												<div className="col-lg-6">

													<div className="form-group">
														<FormikControl
															control='email'
															name='email'
															placeholder='Email address*'
															required={true}
															value={''}
														/>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='text'
															name='company'
															placeholder='Company name*'
															required={true}
															value={''}
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<FormikControl
															control='textarea'
															name='message'
															placeholder='Message*'
															required={true}
															value={''}
														/>
													</div>
												</div>												
												<div className="col-lg-12 text-right float-end">
													<input type="submit" value="Send Message" disabled={!dirty || isSubmitting} />
												</div>
											</div>
										</Form>
									);
								}}
							</Formik>

						</div>
					</div>
				</div>
			</section>

			<section className="engagement">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="heading col-lg-12 text-center">
							<h2>How to start the Engagement</h2>
							<p>We are flexible and can help you at different stages with customized services</p>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<h3>1</h3>									
								</div>
								<h5>Discovery</h5>
								<p>We will help you in creating intuitive UI & UX for your product</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<h3>2</h3>									
								</div>
								<h5>Documentation Phase</h5>
								<p>We will help you to analyse the gap and perform a granular analysis 
of the requirement</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<h3>3</h3>									
								</div>
								<h5>UI & UX Consulting</h5>
								<p>We will design, develop & deploy your product in this model</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<h3>4</h3>									
								</div>
								<h5>Development & Deployment</h5>
								<p>We design, develop & deploy your product in this model</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<h3>5</h3>									
								</div>
								<h5>Quality Management System</h5>
								<p>We will help you in creating intuitive UI & UX for your product</p>
							</div>
						</div>
					</div>

				</div>
			</section>
			<section className="benefits">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="heading col-lg-12 text-center white">
							<h2>Benefits of Magicmind</h2>
							<p>We are flexible and can help you at different stages with customized services</p>
						</div>
						<div className="col-lg-12">
							<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
								className='owl-carousel owl-theme benefitss'>
								{/* <div className="owl-theam owl-carousel benefitss"> */}
								<div className="item">
									<div className="secion text-center">
										<img src={ICON01} alt="" />
										<h3>Dedicated Developers</h3>
									</div>
								</div>
								<div className="item">
									<div className="secion text-center">
										<img src={ICON02} alt="" />
										<h3>Flexible hiring Models</h3>
									</div>
								</div>
								<div className="item">
									<div className="secion text-center">
										<img src={ICON03} alt="" />
										<h3>Simple transparent Pricing</h3>
									</div>
								</div>
								<div className="item">
									<div className="secion text-center">
										<img src={ICON04} alt="" />
										<h3>Agile Methodology</h3>
									</div>
								</div>
								{/* </div> */}
							</OwlCarousel>
						</div>

					</div>
				</div>
			</section>
			<section className="affordable-price">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="heading col-lg-12 text-center">
							<h2>Affordable Pricing</h2>
							<p>Simple and Transparent pricing I Fully signed NDA I Code security I Easy exit Policy</p>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<img src={BASICICON} alt="" />
								</div>
								<div className="text">
									<h3>$20 <span>Hourly (USD)</span></h3>
									<p>We'll provide a fully signed NDA for your Project's confidentiality</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<img src={STANDARDICON} alt="" />
								</div>
								<div className="text">
									<h3>$3200 <span>Monthly (USD)</span></h3>
									<p>We'll provide a fully signed NDA for your Project's confidentiality</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-xs-10 col-12">
							<div className="section text-center">
								<div className="icon">
									<img src={PREMIUMICON} alt="" />
								</div>
								<div className="text">
									<h3>$15000 <span>Monthly (USD)</span></h3>
									<p>Build a SCRUM team of 5 Developers</p>
								</div>
							</div>
						</div>
						<div className="col-lg-12 text-center">
							<a href="#enquiry" className="btn btns_custom">Book your free trial</a>
						</div>
					</div>
				</div>
			</section>
			<section className="Projects destination">
				<div className="">
					<div className="row justify-content-between align-items-center">
						<div className="heading col-lg-12 text-center">
							<h2>Our Few Deliveries</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 ps-lg-4 px-md-4 px-4">
							<div className="row per-Projects">
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 px-0">
									<div className="destination-image">
										<img src={RAJPALACE} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6 col-12 pr-0 pl-0">
									<div className="destination-section">
										<h3>Raj Palace</h3>
										<ul>
											<li className="d-flex align-items-center store">
												<h5>Platforms :</h5>
												<div className="d-flex align-items-center">
													<img src={APPSTOREICON} alt="" />
													<p>App store</p>
												</div>
												<div className="d-flex align-items-center">
													<img src={PLAYSTOREICON} alt="" />
													<p>Play store</p>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<h5>Frameworks :</h5>
												<img src={LARAVELICON} alt="" />
												<img src={REACTICON} alt="" />
											</li>
											<li className="d-flex align-items-center">
												<h5>Database :</h5>
												<img src={MYSQL} alt="" />
											</li>
											<li className="">
												<h5>Features:</h5>
												<p>A versatile restaurant management software built by Magicmind Technologies.</p>
												<p>Five Modules comprising of Admin Panel, Customer Application, Waiter Application, Kitchen Application & Delivery Executive Application</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 pe-lg-4 px-md-4 px-4">
							<div className="row per-Projects">
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 pr-0 px-0">
									<div className="destination-image">
										<img src={BONGOPAY} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6 col-12 pr-0 pl-0">
									<div className="destination-section">
										<h3>BongoPay</h3>
										<ul>
											<li className="d-flex align-items-center store">
												<h5>Platforms :</h5>
												<div className="d-flex align-items-center">
													<img src={APPSTOREICON} alt="" />
													<p>App store</p>
												</div>
												<div className="d-flex align-items-center">
													<img src={PLAYSTOREICON} alt="" />
													<p>Play store</p>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<h5>Language :</h5>
												<img src={APPICON} alt="" />
												<img src={SWIFTICON} alt="" />
												<img src={KOTLINICON} alt="" />
											</li>
											<div className="d-flex align-items-center justify-content-between frameworks-database">
												<li className="d-flex align-items-center">
													<h5>Frameworks :</h5>
													<img src={COCOATOUCHICON} alt="" />
												</li>
												<li className="d-flex align-items-center mt-0">
													<h5>Database :</h5>
													<img src={MYSQL} alt="" />
													<img src={COREDATAICON} alt="" />
												</li>
											</div>
											<li className="">
												<h5>Features:</h5>
												<p>A safe and secured digital wallet built by Magicmind Technologies.</p>
												<p>Simple, fail-safe, and attractive user interface that provides a free-flowing & impressive user experience.</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 ps-lg-4 px-md-4 px-4">
							<div className="row per-Projects shresta">
								<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6 col-12 pr-0 px-0">
									<div className="destination-section">
										<h3>Shresta</h3>
										<ul>
											<li className="d-flex align-items-center store">
												<h5>Platforms :</h5>
												<div className="d-flex align-items-center">
													<img src={APPSTOREICON} alt="" />
													<p>App store</p>
												</div>
												<div className="d-flex align-items-center">
													<img src={PLAYSTOREICON} alt="" />
													<p>Play store</p>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<h5>CMS:</h5>
												<img src={WORDPRESSICON} alt="" />
											</li>
											<li className="d-flex align-items-center">
												<h5>Database :</h5>
												<img src={MYSQL} alt="" />
											</li>
											<li className="">
												<h5>Features:</h5>
												<p>A speedy and versatile online grocery ordering-delivering app built by Magicmind Technologies</p>
												<p>Order a variety of groceries from this all-in-one app that is based on user-friendly modules providing a gliding user experience.</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 px-0">
									<div className="destination-image text-lg-end text-md-end">
										<img src={SHRESTA} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 pe-lg-4 px-md-4 px-4">
							<div className="row per-Projects setting-needs">
								<div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-6 col-12 pr-0 pl-0">
									<div className="destination-section">
										<h3>Setting Needs</h3>
										<ul>
											<li className="d-flex align-items-center store">
												<h5>Platforms :</h5>
												<div className="d-flex align-items-center">
													<img src={APPSTOREICON} alt="" />
													<p>App store</p>
												</div>
												<div className="d-flex align-items-center">
													<img src={PLAYSTOREICON} alt="" />
													<p>Play store</p>
												</div>
											</li>
											<li className="d-flex align-items-center">
												<h5>Language :</h5>
												<img src={NODEJSICON} alt="" />
												<img src={SWIFTICON} alt="" />
												<img src={KOTLINICON} alt="" />
											</li>
											<div className="d-flex align-items-center justify-content-between frameworks-database">
												<li className="d-flex align-items-center">
													<h5>Frameworks :</h5>
													<img src={EXPRESSICON} alt="" />
													<img src={COCOATOUCHICON} alt="" />
												</li>
												<li className="d-flex align-items-center mt-0">
													<h5>Database :</h5>
													<img src={MYSQL} alt="" />
												</li>
											</div>
											<li className="">
												<h5>Features:</h5>
												<p>A rental services app for all types of products made by Magicmind Technologies.</p>
												<p>Rent or browse any type of product via this simple and clean user interface app that is available as a mobile application and website.</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-6 col-12 px-0">
									<div className="destination-image text-lg-end text-md-end">
										<img src={SETTINGNEEDS} alt="" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			<section className="technology">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="heading col-lg-12 text-center white">
							<h2>Technologies we Play with</h2>
							<p>The experience of working with a team where there are no strings of risk-factor attached</p>
						</div>
						<div className="col-lg-12">


							<ul className="d-flex align-items-center justify-content-between nav">
								<li ><a href="#eight" onClick={(e) => { e.preventDefault(); setShowLogo('eight') }} className={showLogo === 'eight' ? "active" : ""}>Mobile development</a></li>
								<li><a href="#two" onClick={(e) => { e.preventDefault(); setShowLogo('one') }} className={showLogo === 'one' ? "active" : ""}>Web development</a></li>
								<li><a href="#two" onClick={(e) => { e.preventDefault(); setShowLogo('two') }} className={showLogo === 'two' ? "active" : ""}>App layer</a></li>
								<li><a href="#three" onClick={(e) => { e.preventDefault(); setShowLogo('three') }} className={showLogo === 'three' ? "active" : ""}>Database</a></li>
								<li><a href="#four" onClick={(e) => { e.preventDefault(); setShowLogo('four') }} className={showLogo === 'four' ? "active" : ""}>Framework</a></li>
								<li><a href="#five" onClick={(e) => { e.preventDefault(); setShowLogo('five') }} className={showLogo === 'five' ? "active" : ""}>Devops</a></li>
								<li><a href="#six" onClick={(e) => { e.preventDefault(); setShowLogo('six') }} className={showLogo === 'six' ? "active" : ""}>Hosting</a></li>
								<li><a href="#seven" onClick={(e) => { e.preventDefault(); setShowLogo('seven') }} className={showLogo === 'seven' ? "active" : ""}>Visulisztion</a></li>
							</ul>
							{showLogo === 'eight' && <div className="logos" id="eight">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T01} alt="" /></a>
										<h4>Objective C</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T02} alt="" /></a>
										<h4>Swift</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T03} alt="" /></a>
										<h4>Flutter</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T04} alt="" /></a>
										<h4>Kotlin</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T05} alt="" /></a>
										<h4>React Native</h4>
									</li>
									{/* <!-- <li className="text-center">
											<a href="#na" onClick={stopHrefRedirect}><img src="images/t-06.png" alt=""/></a>
											<h4>Xamarin</h4>
										</li>
										<li className="text-center">
											<a href="#na" onClick={stopHrefRedirect}><img src="images/t-07.png" alt=""/></a>
											<h4>PhoneGap</h4>
										</li> --> */}
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T08} alt="" /></a>
										<h4>Ionic</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={T09} alt="" /></a>
										<h4>Java</h4>
									</li>
								</ul>
							</div>}
							{showLogo === 'one' && <div className="logos" id="one">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={HTMLLOGO} alt="" /></a>
										<h4>HTML</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={CSSLOGO} alt="" /></a>
										<h4>CSS</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={BOOTSTAPLOGO} alt="" /></a>
										<h4>Bootstrap</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={STRAPILOGO} alt="" /></a>
										<h4>Strapi</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={REACTJS} alt="" /></a>
										<h4>React Js</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={ANGULARJSLOGO} alt="" /></a>
										<h4>Angular JS</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={VUEJSLOGO} alt="" /></a>
										<h4>Vue Js</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={EMBERLOGO} alt="" /></a>
										<h4>Ember</h4>
									</li>
								</ul>
							</div>}
							{showLogo === 'two' && <div className="logos" id="two">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={JAVALOGO} alt="" /></a>
										<h4>Java</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={PHPLOGO} alt="" /></a>
										<h4>Php</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={DOTNETLOGO} alt="" /></a>
										<h4>.Net</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={SWAGGERLOGO} alt="" /></a>
										<h4>Swagger</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={LAMBDALOGO} alt="" /></a>
										<h4>Lambda</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={CLOUDFUNCTIONSLOGO} alt="" /></a>
										<h4>Cloud</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={PUBSUBLOGO} alt="" /></a>
										<h4>Pub Sub</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={NODEJSLOGO} alt="" /></a>
										<h4>Node Js</h4>
									</li>

								</ul>
							</div>}
							{showLogo === 'three' && <div className="logos" id="three" >
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={MONGODBLOGO} alt="" /></a>
										<h4>Mongo DB</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={MYSQLLOGO} alt="" /></a>
										<h4>My SQL</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={POSTGRELOGO} alt="" /></a>
										<h4>Postgre SQL</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={ORACLELOGO} alt="" /></a>
										<h4>Oracle</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={SQLSERVERLOGO} alt="" /></a>
										<h4>SQL Server</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={FIREBASELOGO} alt="" /></a>
										<h4>Firebase</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={DYNAMODBLOGO} alt="" /></a>
										<h4>Dynamo DB</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={BIGQUERYLOGO} alt="" /></a>
										<h4>Big Query</h4>
									</li>
								</ul>
							</div>}
							{showLogo === 'four' && <div className="logos" id="four">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={WORDPRESSLOGO} alt="" /></a>
										<h4>Wordpress</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={LARAVELLOGO} alt="" /></a>
										<h4>Laravel</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={ZENDFRAMEWORKLOGO} alt="" /></a>
										<h4>Zend</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={CODEIGNITERLOGO} alt="" /></a>
										<h4>Codeigniter</h4>
									</li>
								</ul>
							</div>}

							{showLogo === 'five' && <div className="logos" id="five" >
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={JENKINSLOGO} alt="" /></a>
										<h4>Jenkins</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={CHEFLOGO} alt="" /></a>
										<h4>CHEF</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={KUBERNETESLOGO} alt="" /></a>
										<h4>Kubernates</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={ANSIBLELOGO} alt="" /></a>
										<h4>Ansible</h4>
									</li>
								</ul>
							</div>}
							{showLogo === 'six' && <div className="logos" id="six">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={AWSLOGO} alt="" /></a>
										<h4>AWS</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={GOGGLECLOUDLOGO} alt="" /></a>
										<h4>Google Cloud</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={AZURELOGO} alt="" /></a>
										<h4>Azure</h4>
									</li>
								</ul>
							</div>}
							{showLogo === 'seven' && <div className="logos" id="seven">
								<ul className="d-flex align-items-center justify-content-center">
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={TABLEAULOGO} alt="" /></a>
										<h4>Tableau</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={GOOGLEDATASTDIOLOGO} alt="" /></a>
										<h4>Google Data Studio</h4>
									</li>
									<li className="text-center">
										<a href="#na" onClick={stopHrefRedirect}><img src={AZUREPOWERBILOGO} alt="" /></a>
										<h4>Azure Power</h4>
									</li>
								</ul>
							</div>}
						</div>
					</div>
				</div>
			</section>
			<section className="achievements">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="heading col-lg-12 text-center">
							<h2>Our Pride</h2>
							<p>Explore the feathers in our hat</p>
						</div>
						<div className="col-lg-12">
							<div className="achievements-logos">
								<ul className="d-flex align-items-center justify-content-center flex-wrap">

									<li className="text-center">
										<img src={C01} alt="" />
									</li>
									<li className="text-center">
										<img src={C02} alt="" />
									</li>
									<li className="text-center">
										<img src={C03} alt="" />
									</li>
									<li className="text-center">
										<img src={C04} alt="" />
									</li>
									<li className="text-center">
										<img src={C05} alt="" />
									</li>
									<li className="text-center">
										<img src={C06} alt="" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="global-presentation">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="heading col-lg-12 text-center white">
							<h2>Our global Presence</h2>
							<p>Transforming businesses across time zones</p>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="section text-center">
								<div className="flag">
									<img src={FLAG01} alt="" />
								</div>
								<h3>USA</h3>
								<div className="text">

									<p>1526 LOMA AVE LONG BEACH, CA, 90804, US</p>
									<div className="anchore">
										<a href="tel:+18559624420">Call us : +1 855 962 4420</a>
										<a href="mailto:hello@magicminds.io">Mail us : hello@magicminds.io</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="section text-center">
								<div className="flag">
									<img src={FLAG02} alt="" />
								</div>
								<h3>INDIA</h3>
								<div className="text">
									<p>Ambuja Ecostation Business Tower BP 7, Unit No: 601 | 6th Floor Street Number 9 | BP Block, Sector V, Kolkata, West Bengal 700091</p>
									<div className="anchore">
										<a href="tel:+919903987999">Call us : +91 9903987999</a>
										<a href="mailto:hello@magicminds.io">Mail us : hello@magicminds.io</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="section text-center">
								<div className="flag">
									<img src={FLAG03} alt="" />
								</div>
								<h3>UK</h3>
								<div className="text">
									<p>27 Old Gloucester Street London WC1N 3AX</p>
									<div className="anchore">
										<a href="tel:+18559624420">Call us : +1 855 962 4420</a>
										<a href="mailto:hello@magicminds.io">Mail us : hello@magicminds.io</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="section text-center">
								<div className="flag">
									<img src={FLAG04} alt="" />
								</div>
								<h3>CANADA</h3>
								<div className="text">
									<p>1918 St Regis Dorval, QC H9P 1H6,Canada</p>
									<div className="anchore">
										<a href="tel:1866 502 0604">Call us : 1866 502 0604</a>
										<a href="mailto:hello@magicminds.io">Mail us : hello@magicminds.io</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="faqs">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="heading col-lg-12 text-center">
							<h2>FAQ</h2>
							<p>Still have questions? Let’s talk </p>
						</div>
						<div className="col-lg-12">

							<Accordion preExpanded={['faqOne']} onChange={getSelectedUUID} allowZeroExpanded={true}>
								<AccordionItem uuid="faqOne" className='card' key="faqOne">
									<AccordionItemHeading className='card-header'>
										<AccordionItemButton className=''>
											<button
												className={`btn-block text-left ${selectedUUID[0] !== 'faqOne' ? 'collapsed' : ''}`}
												type="button" >
												<font>Who will own the source code ?</font>
											</button>
										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<div className="card-body">
											After delivering the app to the client we handover the source code. So, the client ultimately owns the source code as the Intellectual Property rights are reserved for the client.
										</div>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid="faqTwo" className='card' key="faqTwo">
									<AccordionItemHeading className='card-header'>
										<AccordionItemButton className="">
											<button
												className={`btn-block text-left ${selectedUUID[0] !== 'faqTwo' ? 'collapsed' : ''}`}
												type="button" >
												<font>Why should you choose Magicmind Technologies?</font>
											</button>

										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<div className="card-body">
											You should choose Magicmind as we are a group of highly experienced agile and scalable developers who are working to digitally transform our client’s business with lightweight scalable software which are interactive in nature and also maximize security and minimize risks.
										</div>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid="faqThree" className='card' key="faqThree">
									<AccordionItemHeading className='card-header'>
										<AccordionItemButton className="">
											<button
												className={`btn-block text-left ${selectedUUID[0] !== 'faqThree' ? 'collapsed' : ''}`}
												type="button" >
												<font>How would the development process be?</font>
											</button>

										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<div className="card-body">
											We follow a particular work flow when it comes to development process, which include phases like-
											<ul>
												<li>
													<p>•	Proposal phase</p>
												</li>
												<li>
													<p>•	Discovery Phase</p>
												</li>
												<li>
													<p>•	UI/UX</p>
												</li>
												<li>
													<p>•	Development</p>
												</li>
												<li>
													<p>•	User Acceptance test</p>
												</li>
												<li>
													<p>•	Delivery of app</p>
												</li>
												<li><p>•	And ultimately source code handover.</p></li>
											</ul>
										</div>
									</AccordionItemPanel>
								</AccordionItem>

								<AccordionItem uuid="faqFour" className='card' key="faqFour">
									<AccordionItemHeading className='card-header'>
										<AccordionItemButton className="">
											<button
												className={`btn-block text-left ${selectedUUID[0] !== 'faqFour' ? 'collapsed' : ''}`}
												type="button" >
												<font>Do you build native and/or hybrid apps?</font>
											</button>

										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<div className="card-body">
											Well, that is something we decide after completely understanding the requirement of our clients. Native is used when the app is interacting a lot with the hardware, secured and it would only work on that platform. Hybrid is like the best of both the world as it is a very affordable platform and works on multiple platforms. We have the expertise and experience in developing both, so its up to the client and the requirement.
										</div>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid="faqFive" className='card' key="faqFive">
									<AccordionItemHeading className='card-header'>
										<AccordionItemButton className="">
											<button
												className={`btn-block text-left ${selectedUUID[0] !== 'faqFive' ? 'collapsed' : ''}`}
												type="button" >
												<font>Do you provide app maintenance services post deployment?</font>
											</button>

										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<div className="card-body">
											We have an Annual Maintenance Contract (AMC) in place which allows our clients to enter a contract with us for a period of one year for a specified amount of maintenance hours which is chargeable. If the stipulated maintenance hour is not exhausted it will be added to the next year’s maintenance hours, without any added charge.
										</div>
									</AccordionItemPanel>
								</AccordionItem>

							</Accordion>
						</div>
					</div>
				</div>
			</section>
			<section className="information-form" id="enquiry">
				<div className="container">
					<div className="row justify-content-between align-items-start">
						<div className="col-lg-6 ddd">
							<div className="heading white">
								<h2>Let’s Talk About Your Project</h2>
								<p>How Can We Help?</p>
							</div>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ dirty, isSubmitting }) => {
									return (
										<Form noValidate className='w-100 mb-3'>
											<div className="row">
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='text'
															name='Name'
															placeholder='Name*'
															required={true}
															value={''}
														/>
														{/* <input type="text" required placeholder="Name*" className="form-control"/> */}
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='phone'
															name='phone'
															className="form-control"
															prefixInputName='countryPrefix'
															// placeholder='Enter phone number'
															placeholder='Phone Number*'
															required={true}
															value={''}
														/>
														{/* <input type="number" required placeholder="Phone number*" className="form-control"/> */}
													</div>
												</div>
												<div className="col-lg-6">

													<div className="form-group">
														<FormikControl
															control='email'
															name='email'
															placeholder='Email address*'
															required={true}
															value={''}
														/>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<FormikControl
															control='text'
															name='company'
															placeholder='Company name*'
															required={true}
															value={''}
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<FormikControl
															control='textarea'
															name='message'
															placeholder='Message*'
															required={true}
															value={''}
														/>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-check">
														<input type="checkbox" className="" name="newsletter_subscription" id="newsletter_subscription" />
														<label className="form-check-label" htmlFor='newsletter_subscription'>Get monthly Updates and Newsletters for latest technologies insights.</label>
													</div>
												</div>
												<div className="col-lg-12 text-right">
													<input type="submit" value="Send message" disabled={!dirty || isSubmitting} />
												</div>
											</div>
										</Form>
									);
								}}
							</Formik>

						</div>
						<div className="col-lg-6 form-right">
							<div className="heading">
								<h2>Explore Solutions</h2>
								<p>Other related services</p>
							</div>
							<ul>
								<li className="d-flex align-items-start">
									<span><img src={FICON01} alt="" /></span>
									<div>
										<h3>Restaurant Management Software-Appetyzer</h3>
										<p>An app that simplifies food ordering-delivering and real-time tracking at the fingertips.</p>
									</div>
								</li>
								<li className="d-flex align-items-start">
									<span><img src={FICON02} alt="" /></span>
									<div>
										<h3>Ecommerce Modules</h3>
										<p>A proprietary multi-vendor platform for the ease of buying and selling a wide range of products from the catalogue.</p>
									</div>
								</li>
								<li className="d-flex align-items-start">
									<span><img src={FICON03} alt="" /></span>
									<div>
										<h3>Website Builder - Woxi</h3>
										<p>A comprehensive cloud platform for new-age entrepreneurs to create apps with seamless, accessible and intelligent drag and drop tools.</p>
									</div>
								</li>
								<li className="d-flex align-items-start">
									<span><img src={FICON04} alt="" /></span>
									<div>
										<h3>Custom Software Development</h3>
										<p>Design, create, deploy and maintain customized software to fit your requirements.</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>)
};
export default MobileLanding;