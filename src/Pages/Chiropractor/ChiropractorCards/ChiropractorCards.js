import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import '../../../Components/FooterAccordian/FooterAccordian.scss';

import INOVID from '../../../Assets/Images/innovation/ino-vid.webp';
import PLAY from '../../../Assets/Images/innovation/play-button.svg';
import REDLINE from '../../../Assets/Images/Chiropractor/chiropractor-line.svg';
import ACCORDIMG from '../../../Assets/Images/Chiropractor/chiro-accord-img.webp';
import STAR from '../../../Assets/Images/Chiropractor/star.svg';
import PATH from '../../../Assets/Images/Loader/circle.svg';
import PATH1 from '../../../Assets/Images/Loader/second-path.svg';
import PATH2 from '../../../Assets/Images/Loader/third-path.svg';
import PATH3 from '../../../Assets/Images/Loader/fourth-path.svg';

import './ChiropractorCards.scss';

const ChiropractorCards = () => {
	return (
		<div className='ChiropractorCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='mb-5'>
					<Col md lg={6} className='position-relative'>
						<Fade bottom>
							<p className='lht-27 font-400 text-center'>
								An increasing number of people are turning to chiropractic care as a therapeutic
								option for chronic pain. It’s no surprise that the chiropractic sector is constantly
								expanding and is anticipated to do so in the upcoming years.In 2017,{' '}
								<span className='font-flat font-600'>the sector was worth $12.26 billion,</span> and
								over 80,000 chiropractors are expected to work in the country in the upcoming years.
								Despite these factors, chiropractors are struggling to attract patients and retain
								them. The question is ‘why is that’?
							</p>
						</Fade>
					</Col>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<p className='mt-4 lht-27 font-400 text-center'>
								Let’s face the fact, medical practitioners are not marketing professionals! They
								don’t have a dedicated team of marketing experts to attract, convert and retain the
								patients. All they can rely on is the age-old technique of ‘word of mouth’. Other
								factors such as government regulations, reduction of insurance coverage,
								preconceived notions, and not to forget, the lack of a strategic marketing plan have
								all contributed largely to their business struggles.
							</p>
							<p className='mt-4 lht-27 font-400 text-center'>
								It is true that traditional marketing methods such as print and electronic are
								outdated. However, there is no place for uncertainty in digital marketing as it is
								quantified and deliberate. To promote their business, organizations are increasingly
								adopting this mode of marketing to reach their target customers at large. And, the
								healthcare industry is no exception.
							</p>
							<p className='mt-4 lht-27 font-400 text-center'>
								You can always hire a top-ranked digital marketing agency if marketing is not your
								forte. Consider teaming with us for a solid marketing plan that is sure to deliver
								genuine results and drive leads. We provide a full range of{' '}
								<span className='font-flat font-600'>
									marketing services, including search engine optimization, web design,
									pay-per-click advertising, and social media management. Simply put, we are your
									one-stop solution for all marketing needs!
								</span>
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center pb-5 mb-5'>
					<Col md lg={8} className='position-relative'>
						<Fade bottom>
							<div className='mt-4 mmt-chiro-player position-absolute w-100'>
								<ReactPlayer
									className='mmt-chiro-player w-100 h-100'
									url='https://www.youtube.com/watch?v=LCCiwPEdEpg'
									playing={true}
									playIcon={
										<Button className='mmt-play-btn'>
											<Image className='w-100 h-100' src={PLAY} alt='no-img'></Image>
										</Button>
									}
									light={INOVID}
									controls={true}
								/>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
			<div className='mmt-chiro-main-cont'>
				<div className='mmt-banner-spin'>
					<Image className='mmt-banner-main-path' src={PATH} alt='no-img'></Image>
					<Image className='mmt-banner-second-path' src={PATH1} alt='no-img'></Image>
					<Image className='mmt-banner-third-path' src={PATH2} alt='no-img'></Image>
					<Image className='mmt-banner-fourth-path' src={PATH3} alt='no-img'></Image>
				</div>
				<Container>
					<Row className='py-5 mb-5'>
						<Col md lg={4} className='position-relative'>
							<Fade bottom>
								<h1 className='font-200 font-main white'>Take a Look at our Offerings</h1>
								<Image className='my-3 mmt-red-img' src={REDLINE} alt='no-img'></Image>
							</Fade>
							<Fade bottom>
								<h4 className='pt-3 mt-5 white font-400'>
									As a chiropractor, you have to take care of a lot of things such as catering to
									the needs and demands of the patients, keeping a record of their progress and
									whatnot. Amidst all these, finding new patients can be a bit daunting. Fret not;
									we have got you covered!
								</h4>
							</Fade>
							<Fade bottom>
								<p className='pt-3 mt-5 white font-400'>
									Our chiropractor digital marketing professionals will assist you in developing a
									marketing strategy for your brand and provide your company with the tools it
									requires to succeed. Let’s see what we have for you!
								</p>
							</Fade>
							<Fade bottom>
								<Button className='btn btn-green mt-5 font-600 px-4 py-3 font-flat w-100'>
									Let's Talk
								</Button>
							</Fade>
						</Col>
						<Col md lg={7} className=''>
							<div className='d-flex flex-row justify-content-center align-items-center w-100'>
								<div className='mmt-card-chiro-one h-100 d-flex flex-column justify-content-start align-items-center m-1'>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
								</div>
								<div className='mmt-card-chiro-two h-100 d-flex flex-column justify-content-start align-items-center m-1'>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
								</div>
								<div className='mmt-card-chiro-three h-100 d-flex flex-column justify-content-start align-items-center m-1'>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
									<div className='mmt-chiro-cont-div'></div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className='mt-5'>
				<Row className='mb-5'>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Why choose us as your Chiropractor Digital Marketing Agency?
							</h1>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center align-items-lg-start  mb-5 pb-4'>
					<Col md lg={5} className='position-relative'>
						<Fade bottom>
							<Accordion preExpanded={['a']}>
								<AccordionItem uuid='a' className='mmt-mobile-footer-ind'>
									<AccordionItemHeading className='bg-trans'>
										<AccordionItemButton>
											<div className='d-flex flex-row justify-content-start align-items-center'>
												<h5 className='font-700 me-5 mb-0'>
													We Can Help Your Business Move To The Next Level
												</h5>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className='mb-4 font-400'>
											Chiropractor marketing can be a daunting task if not done correctly. However,
											you have come to the right place! We can help move your business of serving
											people to the next level with the right marketing tactics and ideas. We value
											our clients; we pay great attention to every detail and use suitable marketing
											campaigns to reap greater benefits.
										</p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid='b' className='mmt-mobile-footer-ind'>
									<AccordionItemHeading className='bg-trans'>
										<AccordionItemButton>
											<div className='d-flex flex-row justify-content-start align-items-center'>
												<h5 className='font-700 me-5 mb-0'>We Deliver Measurable Results</h5>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className='mb-4 font-400'></p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid='c' className='mmt-mobile-footer-ind'>
									<AccordionItemHeading className='bg-trans'>
										<AccordionItemButton>
											<div className='d-flex flex-row justify-content-start align-items-center'>
												<h5 className='font-700 me-5 mb-0'>
													We Help You Gain An Edge Over The Competition
												</h5>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className='font-400 mb-4'></p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid='d' className='mmt-mobile-footer-ind'>
									<AccordionItemHeading className='bg-trans'>
										<AccordionItemButton>
											<div className='d-flex flex-row justify-content-start align-items-center'>
												<h5 className='font-700 me-5 mb-0'>We Meet Deadlines</h5>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className='font-400 mb-4'></p>
									</AccordionItemPanel>
								</AccordionItem>
								<AccordionItem uuid='e' className='mmt-mobile-footer-ind'>
									<AccordionItemHeading className='bg-trans'>
										<AccordionItemButton>
											<div className='d-flex flex-row justify-content-start align-items-center'>
												<h5 className='font-700 me-5 mb-0'>We Are Transparent</h5>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<p className='font-400 mb-4'></p>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</Fade>
					</Col>
					<Col md lg={6} className='position-relative h-100'>
						<Fade bottom>
							<Image className='mmt-block-accord float-end' src={ACCORDIMG} alt='no-img'></Image>
						</Fade>
						<div className='mmt-accord-txt p-3'>
							<div className='mmt-img-dv'></div>
							<div className='mmt-review-dv'>
								<p className='text-left font-300 mt-2 font-micro mb-0'>
									Magicmind has helped us achieve a great Brand identity. We are lucky to have such
									a prestigious platform by our side.
								</p>
								<p className='text-left font-400 mt-2 mb-2 font-micro'>
									Chloe Jonas <span style={{ color: '#009CDC' }}>Australia</span>
								</p>
								<Image className='w-50' src={STAR} alt='no-img'></Image>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center pb-5 mb-5'>
					<Col md lg={7} className='position-relative'>
						<Fade bottom>
							<Button className='btn btn-green mt-4 font-600 px-5 py-4 font-flat w-100'>
								Get My FREE Digital Marketing Proposal
							</Button>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ChiropractorCards;
