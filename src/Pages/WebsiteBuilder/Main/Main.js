import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
// STYLE
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { BiCircle } from 'react-icons/bi';
import OwlCarousel from 'react-owl-carousel';
import Fade from 'react-reveal/Fade';
// Assets
import DOTS from '../../../Assets/Images/Common/list-dot.svg';
import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';
import design from "../../../Assets/Images/website-builder/design-n-build.webp";
import promote from "../../../Assets/Images/website-builder/promote-business.webp";
import read from "../../../Assets/Images/website-builder/read-to-experiance.webp";
import blog from "../../../Assets/Images/website-builder/own-blog.webp";
import seo from "../../../Assets/Images/website-builder/seo.webp";
import responsiveDesign from "../../../Assets/Images/website-builder/responsive-design.webp";
import promoteBusiness from "../../../Assets/Images/website-builder/promote-business.webp";
import contentDelivery from "../../../Assets/Images/website-builder/content-delivery-networ-cdn.webp";
import freeSsl from "../../../Assets/Images/website-builder/free-ssl-certificate.webp";
import impenetrableSecurity from "../../../Assets/Images/website-builder/impenetrable-security.webp";
import quickPublishing from "../../../Assets/Images/website-builder/quick-publishing.webp";
import updatesOfSecurity from "../../../Assets/Images/website-builder/updates-of-security.webp";

const Main = () => {
	const [cardFaqData, setCardFaqData] = useState([]);

	useEffect(() => {
		const faqData = [
			{
				term: 'Duis quis mauris et arcu',
				desc: 'Duis vitae feugiat quam. Proin sit amet blandit elit. Etiam sit amet lorem sollicitudin, faucibus est ut, egestas neque. Integer pretium libero magna, at ultricies risus maximus vitae. '
			},
			{
				term: 'Aenean facilisis turpis',
				desc: 'Duis lobortis lobortis porttitor. Sed a auctor urna. Vivamus quis ipsum vitae libero convallis blandit eget nec leo. Pellentesque eu ligula id lorem accumsan venenatis eu id lectus. Donec ac mi non nibh molestie cursus.'
			},
			{
				term: 'Duis lobortis lobortis porttitor',
				desc: 'Nulla ut diam nec lorem feugiat malesuada ac id nunc. Duis sem velit, placerat sit amet feugiat ac, pellentesque a diam.'
			}
		];

		setCardFaqData(faqData);
	}, []);

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

	return (
		<div className='default-page-main'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>Build Future-Ready Websites With No-Code Advantage</p>
							<p className='font-300 text-start mt-4'>Explore WOXI, MagicMind's no-code, no-hassle, simple drag and drop website builder that gives an edge over your competitors with the freedom to create, design, and develop futuristic websites that stand out from the rest.</p>
							<p className='font-300 text-start mt-4'>A creative platform that offers functionality and creativity, beyond templates. Creating a website with 'WOXI', is a marketing wonder and never an engineering challenge.</p>
							<p className='font-300 text-start mt-4'>Start building a website with prebuilt themes or wireframes, or build from a blank canvas with our easy to use drag and drop website builder.</p>
							{/* <p className='font-300 text-start mt-4'>Design and build your own high-quality websites without the hassle of coding and grow your business effortlessly with Website Builder</p> */}

						</Fade>
					</Col>
				</Row>
			</Container>

			<div id="carousel-parent" className='mmt-about-service mt-5 mb-5'>
				<h2 className="text-center">Create Future-Ready No-Code Websites You Can Be Proud of</h2>
				<p className="text-center">Where Coding & Creativity Will Sync In Your Way</p>
				<Container className='mmt-papercard-container remove-padding'>
					<Row className='align-items-center justify-content-center'>
						<OwlCarousel items={3} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
							className='owl-carousel owl-theme bord-lft'>
							<div className='green mmt-car-content px-3 py-3 mmt-about-service-in'>
								{/* <h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Drag and Drop</h3> */}
								<div class="images"><img src={design} /></div>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Design and build your own high-quality websites without the hassle of coding and grow your business effortlessly with WOXI Website Builder.</p>
							</div>
							<div className='green mmt-car-content px-3 py-3 mmt-about-service-in'>
								{/* <h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Professionally Designed and Stunning Templates</h3> */}
								<div class="images"><img src={promote} /></div>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Promote business or showcase your products and services in your own perspective by working on this uniquely liberal platform that lets you push your imagination and design a portal exactly the way you want it to be!</p>
							</div>
							<div className='green mmt-car-content px-3 py-3 mmt-about-service-in'>
								{/* <h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Advanced SEO</h3> */}
								<div class="images"><img src={read} /></div>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Be ready to experience the breath-taking outcomes that pose a perfect blend of creativity, functionality and an enriching user experience.</p>
							</div>
							{/* <div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Client CMS Editing</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Give your clients full or restricted access to change, edit and update parts of their website.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Animations</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Built-in animations add visual interest to your site design and make it feel as good as it looks.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Blogging</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Publish blog posts and keep your visitors coming back for more.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Online Store</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Create fully-featured online stores with no transaction fees.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Multi-Language</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Target international visitors with simple and flexible multi-language options.</p>
							</div>
							<div className='green mmt-car-content px-4 py-5 mmt-about-service-in'>
								<h3 className='mt-5 font-700 tech-service-header text-center text-lg-start'>Mobile &amp; Tablet Friendly</h3>
								<p className='mb-5 font-300 text-center text-lg-start mt-4'>Sites look perfect on every device, and each layout can be modified separately.</p>
							</div> */}
						</OwlCarousel>
					</Row>
				</Container>
				<Container>
					<div className="row">
						<div className="col-lg-12 text-center mt-5">
							<Fade bottom>
								<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
									<Button className='btn btn-green px-4 py-2 font-400 w-8'>Start Free Trial</Button>
								</NavLink>
							</Fade>
						</div>
					</div>
				</Container>
				<div>
					<Container>
						<div class="row ">
							<div class="col-lg-12 text-center mt-5 mb-3">
								<h2>Steps to a Stunning Website</h2>
								<p><strong>Drag and Drop Ideas into a Beautifully Crafted Reality in No-time and No-code</strong></p>

							</div>
						</div>
					</Container>
					<Container className='mmt-papercard-container remove-padding'>
						<Row className='align-items-center justify-content-center'>
							<OwlCarousel items={4} dots={false} autoplay={false} loop={true} margin={0} nav={true} responsive={responsiveTxt} onTranslated={toggleColor}
								className='owl-carousel owl-theme bord-lft'>
								<div className='green mmt-car-content px-3 py-0 mmt-about-service-in'>
									<h3 className='mt-4 font-700 tech-service-header text-center text-lg-start'>Customize your site</h3>
									<div class="images"><img src={promoteBusiness} /></div>
									<p className='mb-5 font-300 text-center text-lg-start mt-4'>Pick a template and customize anything, answer a few questions and get a free website designed just for you.</p>
								</div>
								<div className='green mmt-car-content px-3 py-0 mmt-about-service-in'>
									<h3 className='mt-4 font-700 tech-service-header text-center text-lg-start'>Add advanced features</h3>
									<div class="images"><img src={blog} /></div>
									<p className='mb-5 font-300 text-center text-lg-start mt-4'>Starting your own blog, adding an online store? Add advanced and customized features that suit your business needs.</p>
								</div>
								<div className='green mmt-car-content px-3 py-0 mmt-about-service-in'>
									<h3 className='mt-4 font-700 tech-service-header text-center text-lg-start'>Edit your mobile view</h3>
									<div class="images"><img src={responsiveDesign} /></div>
									<p className='mb-5 font-300 text-center text-lg-start mt-4'>Make your website mobile friendly with our Mobile Editor feature with the power of boundless personalisation.</p>
								</div>
								<div className='green mmt-car-content px-3 py-0 mmt-about-service-in'>
									<h3 className='mt-4 font-700 tech-service-header text-center text-lg-start'>Optimise for search engines</h3>
									<div class="images"><img src={seo} /></div>
									<p className='mb-5 font-300 text-center text-lg-start mt-4'>Insert a few basic details of your location, website and keywords to get a personalised SEO plan for incredible online rank</p>
								</div>
							</OwlCarousel>
						</Row>
					</Container>
				</div>
			</div>

			<Container className='mmt-papercard-container w-100 h-100 pt-5 mt-5'>
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Create A Website With The 100% Freedom Of Design</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4 mb-3'>Give your creative imagination a spark to build a functional stunner with custom domain name for your business and brand</p>
							<p className='font-300 text-start mt-0 mb-0 font-700 mb-3'>Card Mentioning Drag & Drop and others*</p>

							<p className='font-300 text-start mt-0 mb-0 font-700 mb-3'>Creative Freedom & Flexibility Like Never Before</p>
							<p className='font-300 text-start mt-0'>Discover what it feels to create something so functional, impressive and scalable without even a trace bit of complex coding from your side! Conceptualise and realise a bespoke website that is secured and robust, supported with an array of features backed by the latest platforms and frameworks.</p>
							<p className='font-300 text-start mt-0 mb-0 font-700 mb-3'>Build a free website that grows with your business</p>
							<p className='font-300 text-start mt-0 mb-0 font-700'>Woxi Is The One You've Been Looking For</p>

						</Fade>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Impenetrable Security</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Get 24/7 site monitoring, with hacker protection and automatic backups. Build a comprehensive and secured website that will keep your portal away from harmful cyber threats.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={impenetrableSecurity} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={contentDelivery} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Content Delivery Network (CDN)</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Enterprise-grade CDN to load images and video at lightning speed. Make your website ready to take any load with integrated content enhancing tools, contentment securing aspects, flexible setting & support for needed protocols.</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start cust-pt-0 justify-content-center mb-5 pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Quick Publishing</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Integrated directly into our platform to make site updates quick & easy. On completion of your concept, followed with just a few clicks, you can instantly publish your website and make it ready to go live for your audience.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={quickPublishing} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start stack-order justify-content-center mb-5'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100 mt-3' src={freeSsl} alt='no-img'></Image>
						</Fade>
					</Col>

					<Col md lg={7} className='card-fill backdrop-green position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Free SSL Certificate</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Give your website visitors confidence by loading sites securely with SSL (https). Why risk you customer and client data when you can automatically secure your website with WOXI SSL? Get rid of pesky threats that make your company website a risky portal.</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start cust-pt-0 justify-content-center pt-5'>
					<Col xs={{ span: 12, order: 2 }} lg={{ span: 7, order: 1 }} className='card-fill position-relative'>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl text-center text-lg-start font-200'>Updates of Security</h2>
						</Fade>
						<Fade bottom>
							<p className='text-center text-lg-start mt-4 font-400 lht-27'>Get automatic security upgrades to protect all the sites across the network. Spend no extra time in manual searching for the updates as WOXI will do the job for you.</p>
						</Fade>
					</Col>

					<Col xs={{ span: 12, order: 1 }} lg={{ span: 5, order: 2 }} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-solution w-100' src={updatesOfSecurity} alt='no-img'></Image>
						</Fade>
					</Col>
				</Row>
			</Container>
			<Container>
				<div className="row mb-5">
					<div className="col-lg-12 text-center mt-5 mb-5">
						<Fade bottom>
							<NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
								<Button className='btn btn-green px-4 py-2 font-400 w-8'>Start Free Trial</Button>
							</NavLink>
						</Fade>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Main;