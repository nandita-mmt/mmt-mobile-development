import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import INNOBOTTOM from '../../../Assets/Images/InnovationLab/innovation-bottom.webp';

import './InnovationLabCards.scss';

const InnovationLabCards = () => {
	return (
		<div className='InnovationLabCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='align-items-center justify-content-center'>
					<Col md lg={11}>
						<Fade bottom>
							<p className='font-200 text-center'>
								Welcome to{' '}
								<span className='font-800 font-avg'>MagicMind Technologies’ Innovation Lab </span>{' '}
								where we stop you from ‘Dumbsourcing’ by not slaughtering your vision or your idea
								once you are done with discussing your project goals with us.
							</p>
							<p className='font-200 text-center'>
								Instead, we start off by earning your trust first and your investments, later. The
								brilliant young minds from our innovation lab are constantly brewing the most unique
								and fresh ideas that would bolster your business success and help you achieve its
								growth goals.
							</p>
							<p className='font-200 text-center'>
								At MMT, we actually throw the conventional concepts of outsourcing for a toss and
								intend to save our clients’, your, money, time and most important of all – Mental
								Peace.
							</p>
						</Fade>
					</Col>{' '}
				</Row>
				<Row id='framework' className='align-items-center justify-content-center pb-5 mb-5'>
					<Col md lg={11}>
						<Fade>
							<div className='mmt-co-founder w-100 h-100 position-relative'>
								<div className='mmt-co-founder-img'></div>
								<div className='mmt-co-founder-detail'>
									<h1 className='mmt-heading-font font-200'>Innovation Framework</h1>

									<p className='text-start font-300'>
										MagicMind Technologies recruits
										<span className='font-800 font-avg ms-1'>
											brilliant young minds who are passionate into brewing new concepts.
										</span>{' '}
										To the young MMTians, as we call them, we provide trainings and workshops where
										they come into the exposure of our experienced thinkers, working with us for
										years.
									</p>
									<p className='text-start font-300'>
										After a significant period of ‘attaining the enlightenment’, we throw them
										challenges to come up with an idea that no ones has ever thought of.
									</p>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mt-5 pt-5'>
					<Col md lg={11} className=''>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>What Do You Get From it?</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-3' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center pb-3 mt-4 mb-5'>
					<Col md lg={6} className='position-relative'>
						<Fade bottom>
							<Image className='mmt-block-canvas mt-3 w-100' src={INNOBOTTOM} alt='no-img'></Image>
						</Fade>
					</Col>
					<Col md lg={6} className='position-relative'>
						<Fade bottom>
							<p className='text-center text-lg-start mt-5 font-400 lht-27'>
								An assurance from <span className='font-700 font-avg'>MMT </span>where your project
								will be handled, managed and bolstered by the most talented individuals in the
								industry, where they break the glass ceiling of conventional outsourcing concepts
								and deliver world-class excellence by setting their own benchmarks, every time, for
								every project. Their sole purpose – To gain your trust with concepts that imbibe
								confidence within you, for us.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mb-3 pb-5'>
					<Col md lg={6}>
						<NavLink exact className='customNavLink' to={'/contact-us'}>
							<Button className='btn btn-green px-5 py-3 font-600 w-100'>
								Let's solve your problem 
							</Button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default InnovationLabCards;
