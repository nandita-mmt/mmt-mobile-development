import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

import './Services.scss';

const Services = () => {
    return (
        <div className='services-component'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Services</h2>
						</Fade>
						<Fade bottom>
							<p className='font-700 text-center mt-4 mb-0'>We bring an array of Digital Solutions to the rescue.</p>
                            <p className='font-300 text-center mt-1 mb-5'>Since our inception, we offer innovative strategies and solutions and leave no stone unturned to provide you with a wide array of services.</p>

							<div className='generic-card-3 pt-2'>
								<div className='generic-card'>
									<h3 className='heading'>Web Development</h3>
									<p className='font-300 mt-1 mb-4'>Creating magic in designing and building futuristic, secure and scalable web applications, portals and solutions with MMT Web Development Services</p>
                                    <NavLink exact className='customNavLink' to={'/web-development-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Mobile Application Development</h3>
									<p className='font-300 mt-1 mb-4'>Harness the power of mobility with perfectly crafted, creative and innovative Mobile Application Development Solutions to deliver beyond outstanding customer experiences.</p>
                                    <NavLink exact className='customNavLink' to={'/mobile-app-development-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Digital Marketing</h3>
									<p className='font-300 mt-1 mb-4'>Climb the ladder of digital success through Magicmind Technologies 360 degree Digital Marketing to stand out and be remarkable beyond awareness, traffic and leads.</p>
                                    <NavLink exact className='customNavLink' to={'/digital-marketing-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>MVP Development</h3>
									<p className='font-300 mt-1 mb-4'>Empower Your Start-up and build your scalable and secure MVP applications to improve your businesses globally with Magic Mind Technologies</p>
                                    <NavLink exact className='customNavLink' to={'/mvp-minimum-viability-product'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Clone App Development</h3>
									<p className='font-300 mt-1 mb-4'>Give wings to your business idea and let it fly towards success with the most innovative clone app development company &ndash; MMT</p>
                                    <NavLink exact className='customNavLink' to={'/clone-app-development-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>QA Services</h3>
									<p className='font-300 mt-1 mb-4'>With rapid transformation comes the great responsibility of delivering flawless quality products which can be achieved through continuous testing with Magicmind Agile Quality Assurance Services.</p>
                                    <NavLink exact className='customNavLink' to={'/software-testing-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Cloud Managed Services</h3>
									<p className='font-300 mt-1 mb-4'>Create impactful, predictive, and adaptive digital transformations with Magicmind Cloud Managed Services for faster innovation, smarter and flexible operations with the big move to Cloud.</p>
                                    <NavLink exact className='customNavLink' to={'/cloud-management-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Digital Transformation</h3>
									<p className='font-300 mt-1 mb-4'>Embrace Magicmind's Digital Transformation services and solutions to advance your business through the power of technology and innovation.</p>
                                    <NavLink exact className='customNavLink' to={'/digital-transformation-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>Blockchain Development</h3>
									<p className='font-300 mt-1 mb-4'>Embrace Blockchain technology to transform your business and make the business ecosystem highly secure and sustainable with MMT Blockchain Development Services.</p>
                                    <NavLink exact className='customNavLink' to={'/blockchain-development-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
								<div className='generic-card'>
									<h3 className='heading'>UI and Graphics</h3>
									<p className='font-300 mt-1 mb-4'>Design is the core centre of any brand to emphasize, communicate and drive user engagement. Provide ingenious excellent service with our UI and Graphic Design Services.</p>
                                    <NavLink exact className='customNavLink' to={'/graphics-design-services'}>
                                        <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                                    </NavLink>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
        </div>
    );
};

export default Services;