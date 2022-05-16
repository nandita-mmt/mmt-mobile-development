import React from 'react';
import { Col, Image, Row, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';
import MailTo from '../MailTo/MailTo';
import { NavLink } from 'react-router-dom';
import { BsFillPinMapFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

import FooterAccordian from '../FooterAccordian/FooterAccordian';

import FB1 from '../../Assets/Images/Footer/f4.webp';
import FB2 from '../../Assets/Images/Footer/f2.webp';
import FB3 from '../../Assets/Images/Footer/f3.webp';
import FB4 from '../../Assets/Images/Footer/f1.webp';
import FC1 from '../../Assets/Images/Footer/fc1.webp';
import FC2 from '../../Assets/Images/Footer/fc2.webp';
import FC3 from '../../Assets/Images/Footer/fc3.webp';
import FC4 from '../../Assets/Images/Footer/fc4.svg';
import FC5 from '../../Assets/Images/Footer/fc5.svg';
import FC6 from '../../Assets/Images/Footer/fc6.svg';
import IND from '../../Assets/Images/Footer/ind-flag.webp';
import USA from '../../Assets/Images/Footer/usa-flag.webp';
import UK from '../../Assets/Images/Footer/uk-flag.webp';
import CAN from '../../Assets/Images/Footer/can-flag.webp';
import TOPARROW from '../../Assets/Images/Footer/footer-top-arrow.svg';
import LINECIRCLE from '../../Assets/Images/Footer/footer-line-circle.svg';
import BOTTOMARROW from '../../Assets/Images/Footer/footer-bottom-arrow.svg';
import FB from '../../Assets/Images/Footer/fb.svg';
import INSTA from '../../Assets/Images/Footer/insta.svg';
import TWIT from '../../Assets/Images/Footer/twitter.svg';
import LINK from '../../Assets/Images/Footer/linkdin.svg';
import YOU from '../../Assets/Images/Footer/youtube.svg';
import usaOfficeBackdrop from '../../Assets/Images/Footer/footer-usa-office.jpg';
import ukOfficeBackdrop from '../../Assets/Images/Footer/tower-bridge-office.jpg';
import canOfficeBackdrop from '../../Assets/Images/Footer/niagara-falls-office.jpg';
import kolOfficeBackdrop from '../../Assets/Images/Footer/maidan-office.jpg';

import './Footer.scss';

const Footer = () => {
	const mapRedirect = (country) => {
		let mapUrl = '';

		switch(country) {
			case 'in':
				mapUrl = 'https://g.page/AmbujaNeotiaEcostation?share';
				break;
			case 'usa':
				mapUrl = 'https://goo.gl/maps/cdCLUoZJy3FfAtSNA';
				break;
			default:
				mapUrl = '';
		}

		// open google map in a new tab
		if(mapUrl) {
			window.open(mapUrl);
		}
	};

	return (
		<div className='Footer'>
			<Container fluid='md' className='pb-5'>
				{/* Top Button Row */}
				<Row className='mmt-footer-pd-top white text-center position-relative'>
					<Image className='mmt-footer-top-arrow' src={TOPARROW} alt='no-img'></Image>
					<Image className='mmt-footer-bottom-arrow' src={BOTTOMARROW} alt='no-img'></Image>
					<Image className='mmt-footer-line-circle' src={LINECIRCLE} alt='no-img'></Image>
					<Col lg={12} xl={12} className='my-auto py-3 '>
						<Fade bottom>
							<h5 className="mk">LET'S BUILD SOMETHING GREAT!</h5>
						</Fade>
					</Col>
					<div className='footer-top-area'>
						<div className='footer-top-area-inner'>
							<div className='top-area-left'>
								<h4>Ready to turn your idea into an engineered masterpiece?</h4>
								<p>Take the <strong>Big Leap</strong></p>
							</div>
							<div className='top-area-right'>
								<div className='button-animation'>
									<Button className='modified-btn-circle'>
										<NavLink exact className='customNavLink' to={'/contact-us'}>
											<svg
												version='1.1'
												id='Layer_1'
												xmlns='http://www.w3.org/2000/svg'
												x='0px'
												y='0px'
												width='142.725px'
												height='144.667px'
												viewBox='0 0 142.725 144.667'
												enableBackground='new 0 0 142.725 144.667'
											>
												<path
													fill='#FFFFFF'
													d='M3.6850000000000023,73.25a68.25,68.25 0 1,0 136.5,0a68.25,68.25 0 1,0 -136.5,0'
												/>
											</svg>
											Launch Magic
											<span>
												<img
													src='https://earth.magicmindtechnologies.com/magicmind-new/static/media/footer-button-arrow.aa14b300.svg'
													alt='no-img'
													className='mmt-button-arrow'
												/>
											</span>
										</NavLink>
									</Button>
								</div>
							</div>
						</div>
					</div>
					{/* <Col lg xl={2} className='my-auto'></Col>
					<Col lg xl={6} className='my-auto py-3'>
						<Fade bottom>
							<p className='cust-subheading text-center text-lg-start mb-0'>Ready to turn your idea into an engineered masterpiece?</p>
							<h5 className='text-center text-lg-start'>Take the big leap</h5>
						</Fade>
					</Col>
					<Col lg xl={4} className='py-3'>
						<div className='button-animation'>
							<Button className='modified-btn-circle'>
								<NavLink exact className='customNavLink' to={'/contact-us'}>
									<svg
										version='1.1'
										id='Layer_1'
										xmlns='http://www.w3.org/2000/svg'
										x='0px'
										y='0px'
										width='142.725px'
										height='144.667px'
										viewBox='0 0 142.725 144.667'
										enableBackground='new 0 0 142.725 144.667'
									>
										<path
											fill='#FFFFFF'
											d='M3.6850000000000023,73.25a68.25,68.25 0 1,0 136.5,0a68.25,68.25 0 1,0 -136.5,0'
										/>
									</svg>
									Launch Magic
									<span>
										<img
											src='https://earth.magicmindtechnologies.com/magicmind-new/static/media/footer-button-arrow.aa14b300.svg'
											alt='no-img'
											className='mmt-button-arrow'
										/>
									</span>
								</NavLink>
							</Button>
						</div>
					</Col> */}
				</Row>

				<div id="footer-location-box">
					<div className='box'>
						<div className='backdrop' style={{backgroundImage: 'url(' + usaOfficeBackdrop + ')'}}></div>
						<div className='content'>
							<h4 className='title'>
								<Image src={USA} alt='flag-usa'></Image>
								USA (HQ)
							</h4>
							<ul>
								<li><div className='v-spacer'></div></li>
								<li className="address-list" onClick={() => mapRedirect('usa')}>
									<div className='list-icon'><BsFillPinMapFill /></div>
									<div className='list-body'>
										<p>1526 LOMA AVE LONG BEACH, CA, 90804, US</p>
									</div>
								</li>
								<li>
									<div className='list-icon'><BsTelephoneFill /></div>
									<div className='list-body'>
										<p><a href='tel:+91 9903987999'>+18559624420</a></p>
									</div>
								</li>
							</ul>
						</div>
						{/* <Image src={FB1} alt='no-image'></Image> */}
					</div>
					<div className='box'>
						<div className='backdrop' style={{backgroundImage: 'url(' + kolOfficeBackdrop + ')'}}></div>
						<div className='content'>
							<h4 className='title'>
								<Image src={IND} alt='flag-india'></Image>
								IND
							</h4>
							<ul>
								<li><div className='v-spacer'></div></li>
								<li className="address-list" onClick={() => mapRedirect('in')}>
									<div className='list-icon'><BsFillPinMapFill /></div>
									<div className='list-body'>
										<p>Ambuja Ecostation Business Tower BP 7, Unit No: 601 6th Floor Street Number 9 , BP Block, Sector V, Kolkata, West Bengal 700091</p>
									</div>
								</li>
								<li>
									<div className='list-icon'><BsTelephoneFill /></div>
									<div className='list-body'>
										<p><a href='tel:+91 9903987999'>+91 9903987999</a></p>
									</div>
								</li>
								<li>
									<div className='list-icon'>
										<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
											<path fill="#fff" d="M20 3H4C1.8 3 0 4.8 0 7v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm1.6 5.8-7.9 5.3c-.5.3-1.1.5-1.7.5s-1.2-.2-1.7-.5L2.4 8.8c-.4-.3-.5-.9-.2-1.4.3-.4.9-.5 1.4-.2l7.9 5.3c.3.2.8.2 1.1 0l7.9-5.3c.5-.3 1.1-.2 1.4.3.2.4.1 1-.3 1.3z" />
										</svg>
									</div>
									<div className='list-body'>
										<p>
											<MailTo
												mailClassName='white'
												label='hello@magicminds.io'
												mailto='mailto:hello@magicminds.io'
											/>
										</p>
									</div>
								</li>
							</ul>
						</div>
						{/* <Image src={FB1} alt='no-image'></Image> */}
					</div>
					<div className='box'>
						<div className='backdrop' style={{backgroundImage: 'url(' + ukOfficeBackdrop + ')'}}></div>
						<div className='content'>
							<h4 className='title'>
								<Image src={UK} alt='flag-uk'></Image>
								UK
							</h4>
							<ul>
								<li><div className='v-spacer'></div></li>
								<li>
									<div className='list-icon'><BsTelephoneFill /></div>
									<div className='list-body'>
										<p><a href='tel:+91 9903987999'>+448000119644</a></p>
									</div>
								</li>
							</ul>
						</div>
						{/* <Image src={FB1} alt='no-image'></Image> */}
					</div>
					<div className='box'>
						<div className='backdrop' style={{backgroundImage: 'url(' + canOfficeBackdrop + ')'}}></div>
						<div className='content'>
							<h4 className='title'>
								<Image src={CAN} alt='flag-canada'></Image>
								CAN
							</h4>
							<ul>
								<li><div className='v-spacer'></div></li>
								<li>
									<div className='list-icon'><BsTelephoneFill /></div>
									<div className='list-body'>
										<p><a href='tel:+91 9903987999'>+18559624420</a></p>
									</div>
								</li>
							</ul>
						</div>
						{/* <Image src={FB1} alt='no-image'></Image> */}
					</div>
				</div>

				{/* Office Location Row */}
				<Row id="mmt-old-footer" className='mmt-footer-office-row white my-5'>
					<Col lg xl={4} className='mmt-bg-india p-0'>
						<div className='mmt-footerback-dv'>
							<Image className='mmt-footeback-img' src={FB1} alt='no-img'></Image>
						</div>
						<div className='mmt-blur-div'></div>
						<div className='mmt-hover-top'></div>
						<div className='mmt-info-div pt-4 pb-5 px-2'>
							<Fade bottom>
								<div className='d-flex flex-row justify-content-start align-items-center my-3 z-4'>
									<div className='mmt-footer-flag me-3 z-4'>
										<Image className='w-100 z-4' src={IND} alt='no-image'></Image>
									</div>
									<h5 className='mb-0 z-4'>India Office</h5>
								</div>
								<p className='white font-300 mb-4 z-4'>
								Ambuja Ecostation Business Tower BP 7,
								 Unit No: 601  6th Floor Street Number 9
								  , BP Block, Sector V, Kolkata, West Bengal 700091
								</p>
								<h5 className='mb-0 z-4'>
									<a href='tel:+91 9903987999' className='white'>
										+91 9903987999
									</a>
								</h5>
								<p className='white font-300 mt-3 z-4'>
									<MailTo
										mailClassName='white'
										label='hello@magicminds.io'
										mailto='mailto:hello@magicminds.io'
									/>
								</p>
							</Fade>
						</div>
					</Col>
					<Col lg className='mmt-footer-office-center mmt-bg-usa p-0'>
						<div className='mmt-footerback-dv'>
							<Image className='mmt-footeback-img' src={FB2} alt='no-img'></Image>
						</div>
						<div className='mmt-blur-div'></div>
						<div className='mmt-hover-top'></div>
						<div className='mmt-info-div pt-4 pb-5 px-2'>
							<Fade bottom>
								<div className='d-flex flex-row justify-content-start align-items-center my-3 z-4'>
									<div className='mmt-footer-flag me-3 z-4'>
										<Image className='z-4 w-100' src={USA} alt='no-image'></Image>
									</div>
									<h5 className='mb-0 z-4'>USA Office</h5>
								</div>
								<p className='z-4 white font-300 mb-4'>1526 LOMA AVE  LONG BEACH, CA, 90804, US</p>
								<h5 className='z-4 white font-300'>
									<a href='tel:+18559624420' className='white'>
									+18559624420
									</a>
								</h5>
							</Fade>
						</div>
					</Col>
					<Col lg className='mmt-footer-office-center mmt-bg-uk p-0'>
						<div className='mmt-footerback-dv'>
							<Image className='mmt-footeback-img' src={FB3} alt='no-img'></Image>
						</div>
						<div className='mmt-blur-div'></div>
						<div className='mmt-hover-top'></div>
						<div className='mmt-info-div pt-4 pb-5 px-2'>
							<Fade bottom>
								<div className='d-flex flex-row justify-content-start align-items-center my-3 z-4'>
									<div className='mmt-footer-flag me-3 z-4'>
										<Image className='w-100 z-4' src={UK} alt='no-image'></Image>
									</div>
									<h5 className='mb-0 z-4'>UK Office</h5>
								</div>
								<p className='white font-300 mb-4 z-4'>  </p>
								<h5 className='z-4 white font-300'>
									<a href='tel:+448000119644' className='white'>
									+448000119644
									</a>
								</h5>
							</Fade>
						</div>
					</Col>
					<Col lg className='mmt-footer-office-center mmt-bg-cnd p-0'>
						<div className='mmt-footerback-dv'>
							<Image className='mmt-footeback-img' src={FB4} alt='no-img'></Image>
						</div>
						<div className='mmt-blur-div'></div>
						<div className='mmt-hover-top'></div>
						<div className='mmt-info-div pt-4 pb-5 px-2'>
							<Fade bottom>
								<div className='d-flex flex-row justify-content-start align-items-center my-3 z-4'>
									<div className='mmt-footer-flag me-3 z-4'>
										<Image className='w-100 z-4' src={CAN} alt='no-image'></Image>
									</div>
									<h5 className='mb-0 z-4'>Canada Office</h5>
								</div>
								<p className='white font-300 mb-4 z-4'>  </p>
								<h5 className='white font-300 z-4'>
									<a href='tel:+448000119644' className='white'>
									+18559624420
									</a>
								</h5>
							</Fade>
						</div>
					</Col>
				</Row>
				{/* Mobile Office Location */}
				<Row id="mmt-old-footer-accordian" className='mmt-mobile-footer-location'>
					<FooterAccordian />
				</Row>
				{/* Tie Company Row */}
				<Row className='mmt-footer-company-row align-items-center justify-content-center'>
					<Col
						xs={12}
						md={6}
						className='mmt-footer-company-div d-flex flex-row justify-content-center align-items-center'
					>
						<Image src={FC1} alt='no-img'></Image>
						<Image src={FC2} alt='no-img'></Image>
						<Image src={FC3} alt='no-img'></Image>
						<Image src={FC4} alt='no-img'></Image>
						<Image src={FC5} alt='no-img'></Image>
						<Image src={FC6} alt='no-img'></Image>
					</Col>
				</Row>
				{/* Copyright Row */}
				{/* <Row className='mmt-copyright mt-4'>
					<Col>
						<p className='white mb-0 text-center font-300'>
							Copyright @ 2021{' '}
							<NavLink exact to={'/'} className='white'>
								Magicmind Technologies
							</NavLink>{' '}
							| All Rights Reserved
						</p>
					</Col>
				</Row> */}
                <Row className='mmt-copyright mt-4'>
					<Col>
						<p className='white mb-0 text-center font-300'>
							<NavLink exact to={'/privacy-policy'} className='white'>
							Privacy Policy
							</NavLink>{' '}&nbsp;&nbsp;&nbsp;&nbsp;
							<NavLink exact to={'/terms-conditions'} className='white'>
							Terms Conditions
							</NavLink>
						</p>
					</Col>
				</Row>
               

				{/* Social Media Row */}
				<Row className='mmt-footer-social-row align-items-center justify-content-center mt-4'>
					<Col
						xs={12}
						md={6}
						className='mmt-footer-social-div d-flex flex-row align-items-center justify-content-center'
					>
						<a
							href='https://www.facebook.com/magicmindtechnologies'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={FB} alt='no-img'></Image>
						</a>
						<a
							href='https://www.linkedin.com/company/magicmind-technologies'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={LINK} alt='no-img'></Image>
						</a>
						<a
							href='https://www.instagram.com/magicmindtechnologies/'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={INSTA} alt='no-img'></Image>
						</a>
						<a href='https://twitter.com/MAGICMINDTECHN1' target='_blank' rel='noreferrer'>
							<Image src={TWIT} alt='no-img'></Image>
						</a>
						<a
							href='https://www.youtube.com/channel/UCEdhM1GaLV6-5sTAKLYmK0Q'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={YOU} alt='no-img'></Image>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
