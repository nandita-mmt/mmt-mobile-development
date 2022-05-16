import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import MailTo from '../MailTo/MailTo';
import { Image } from 'react-bootstrap';

import DOT from '../../Assets/Images/Common/list-dot.svg';

import './AppSidebar.scss';
//import { HashLink } from 'react-router-hash-link';

const AppSidebar = ({ open, handleToggle }) => {
	return (
		<div className={`AppSidebar ${open ? 'sn-app-expanded' : ''}`}>
			<Nav className={`sidenav ${open ? 'expanded' : ''}`}>
				<div
					style={{ zIndex: 1 }}
					className='d-flex flex-column flex-lg-row align-items-center justify-content-center w-100'
				>
					<div className='d-flex flex-column justify-content-start align-items-start h-100 mmt-gradient'>
						<Nav.Item className='sn-nav-item mt-4'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Home</span>
							</NavLink>
						</Nav.Item>
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/innovation-lab'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Innovation Lab</span>
							</NavLink>
						</Nav.Item>
						{/* <Nav.Item className='sn-nav-item'>
							<HashLink
								className='sn-nav-link salesNav '
								to={'/innovation-lab#framework'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Innovation Framework</span>
							</HashLink>
						</Nav.Item> */}
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/about-us'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>About Us</span>
							</NavLink>
						</Nav.Item>
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/our-team'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Our Team</span>
							</NavLink>
						</Nav.Item>
						{/* <Nav.Item className='sn-nav-item'>
							<HashLink
								// exact
								// activeClassName='is-active'
								className='sn-nav-link salesNav '
								to={'/#modus'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Modus Operandi</span>
							</HashLink>
						</Nav.Item> */}
						{/* <Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/our-work'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Our Work</span>
							</NavLink>
						</Nav.Item> */}
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/industries'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Industries</span>
							</NavLink>
						</Nav.Item>
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/careers'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Careers</span>
							</NavLink>
						</Nav.Item>
						<Nav.Item className='sn-nav-item'>
							<NavLink
								exact
								activeClassName='is-active-home'
								className='sn-nav-link salesNav '
								to={'/contact-us'}
								onClick={handleToggle}
							>
								<span className='white font-menu font-200 lht-50'>Contact Us</span>
							</NavLink>
						</Nav.Item>
					</div>
					<div className='h-100 mmt-white '>
						<div className='d-flex flex-column justify-content-start align-items-start'>
							<div className='w-100 d-flex flex-column flex-sm-row justify-content-start align-items-start'>
								<div className='mmt-flexible-wd d-flex flex-column justify-content-start align-items-start'>
									<h2 className='px-2 font-200 my-4'>Services</h2>
									<Nav.Item className='sn-nav-item-two p-0'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/cloud-management-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Cloud Management</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two p-0'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/blockchain-development-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Blockchain Development</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two p-0'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/web-development-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Website Development</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two p-0'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/mobile-app-development-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Mobile App Development</span>
										</NavLink>
									</Nav.Item>
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/deep-learning'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Deep Learning</span>
										</NavLink>
									</Nav.Item> */}
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/core-tech'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Core Tech</span>
										</NavLink>
									</Nav.Item> */}
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/digital-marketing-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Digital Marketing</span>
										</NavLink>
									</Nav.Item>
								</div>
								<div className='mmt-flexible-wd'>
									<p className='px-2 font-200 my-4 no-headline-spacer'></p>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/software-testing-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Software Testing</span>
										</NavLink>
									</Nav.Item>
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/digital-acceleration'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Digital Marketing</span>
										</NavLink>
									</Nav.Item> */}
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/graphics-design-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>UI &amp; Graphics</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/mvp-minimum-viability-product'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Minimum Viability Product</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/clone-app-development-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Clone App development</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/digital-transformation-services'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Digital Transformation</span>
										</NavLink>
									</Nav.Item>
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Digital Transformation</span>
										</NavLink>
									</Nav.Item> */}
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/web-practice'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Web Practice</span>
										</NavLink>
									</Nav.Item> */}
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/mobility-practice'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Mobility Practice</span>
										</NavLink>
									</Nav.Item> */}

									{/* test 
									<Nav.Item className='sn-nav-item-two'>

									{/* test */}
									{/* <Nav.Item className='sn-nav-item-two'>

										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/digital-acceleration-test'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Digital Acceleration1</span>
										</NavLink>

									</Nav.Item>
									*/}

									{/* </Nav.Item> */}

									
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/niche-software'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>NICHE Software</span>
										</NavLink>
									</Nav.Item> */}
								</div>
							</div>

							<div className='pb-2 w-100 d-flex flex-column flex-sm-row  justify-content-start align-items-start'>
								
							<div className='mmt-flexible-wd'>
								<h2 className='px-2 font-200 my-4'>Products</h2>
								<Nav.Item className='sn-nav-item-two'>
									<NavLink
										exact
										activeClassName='is-active'
										className='sn-nav-link salesNav '
										to={'/restaurant-management-software'}
										onClick={handleToggle}
									>
										<Image src={DOT} alt='no-img'></Image>
										<span className='ms-2 black'>App-etyzer</span>
									</NavLink>
								</Nav.Item>
								<Nav.Item className='sn-nav-item-two'>
									<NavLink
										exact
										activeClassName='is-active'
										className='sn-nav-link salesNav '
										to={'/ecommerce-platform'}
										onClick={handleToggle}
									>
										<Image src={DOT} alt='no-img'></Image>
										<span className='ms-2 black'>E-commerce platform</span>
									</NavLink>
								</Nav.Item>
								<Nav.Item className='sn-nav-item-two'>
									<NavLink
										exact
										activeClassName='is-active'
										className='sn-nav-link salesNav '
										to={'/drag-and-drop-website-builder'}
										onClick={handleToggle}
									>
										<Image src={DOT} alt='no-img'></Image>
										<span className='ms-2 black'>Website builder</span>
									</NavLink>
								</Nav.Item>
							</div>

								<div className='mmt-flexible-wd'>
									<h2 className='px-2 font-200 my-4'>Resources</h2>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/white-paper'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>White Paper</span>
										</NavLink>
									</Nav.Item>
									{/* <Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/our-team'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Our Team</span>
										</NavLink>
									</Nav.Item> */}
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/blog'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>Blog</span>
										</NavLink>
									</Nav.Item>
									<Nav.Item className='sn-nav-item-two'>
										<NavLink
											exact
											activeClassName='is-active'
											className='sn-nav-link salesNav '
											to={'/faqs'}
											onClick={handleToggle}
										>
											<Image src={DOT} alt='no-img'></Image>
											<span className='ms-2 black'>FAQ</span>
										</NavLink>
									</Nav.Item>
								</div>
							</div>

							<div className='mmt-sidebar-contact-link w-100 d-flex flex-column justify-content-start align-items-start'>
								<h4 className='px-2 font-300 mt-3 mb-0'>Get in touch</h4>
								<div className='w-100 d-flex flex-lg-row flex-column justify-content-start align-items-start'>
									<p className='ps-2 me-3 mb-0 black font-300 '>
										<span>Email:</span>
										<MailTo
											mailClassName='purp ms-2'
											label='hello@magicminds.io'
											mailto='mailto:hello@magicminds.io'
										/>
									</p>
									<p className='ps-2 black font-300'>
										<span>Mobile:</span>
										<a href='tel:+91 9903987999' className='ms-2 font-300 purp'>
											+91-9903987999
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Nav>
		</div>
	);
};

export default AppSidebar;