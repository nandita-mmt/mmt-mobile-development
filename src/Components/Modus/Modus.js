import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import TRUST from '../../Assets/Images/Modus/trust.svg';
import GREENSTAR from '../../Assets/Images/Modus/modus-green-star.svg';
import PINKSTAR from '../../Assets/Images/Modus/modus-pink-star.svg';
import { ReactComponent as DOWNARROW } from '../../Assets/Images/Footer/footer-bottom-arrow.svg';

import './Modus.scss';

const Modus = () => {
	return (
		<div id='modus' className='Modus'>
			<Container fluid='md' className='mb-5'>
				<Row className='pb-5'>
					<Col lg className='py-5 px-4'>
						<div className='d-flex flex-column justify-content-start align-items-center align-items-lg-start'>
							<div>
								<Fade bottom>
									<h1 className='font-300 font-xl text-center text-lg-start'>Modus Operandi</h1>
									<h3 className='font-700 text-center text-lg-start my-4'>
										Trust Us First And Then Invest, RISK-FREE!
									</h3>
									<p className='font-500 mt-3 pb-5 text-center text-lg-start'>
										For us, your confidence matters the most and that’s why, we have devised two
										ways in which you can invest to reap the maximum benefits from our project
										strategies.
									</p>
								</Fade>
							</div>
							<div className='position-relative d-flex justify-content-center align-items-center w-100'>
								<Link className='w-100' to='#'>
									<div className='mmt-modus-pink w-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 mb-5'>
										<Fade bottom>
											<h1 className='font-300 text-center black'>The First Trust Model:</h1>
											<h4 className='font-800 text-center pt-3 black'>You Invest As We Deliver</h4>
											<p className='font-500 mt-3 text-center black'>
												We start off with a mutually agreed SPRINT. After finishing the initial
												discussions on your project, we take a fortnight’s time to come up with our
												ideas and 1st concepts. If you like them then there we are, we start off
												with your journey to success, as you invest after that.
											</p>
										</Fade>
									</div>
								</Link>
								<Image className='mmt-pink-img' src={PINKSTAR} alt='no-img'></Image>
							</div>
						</div>
					</Col>
					<Col lg className='py-5 px-4'>
						<div className='d-flex flex-column justify-content-start align-items-end'>
							<Fade bottom>
								<Image src={TRUST} alt='no-img' className='mmt-trust-img float-end mb-5'></Image>
							</Fade>
							<div className='position-relative d-flex justify-content-center align-items-center  w-100'>
								<Link className='w-100' to='#'>
									<div className='mmt-modus-green  d-flex flex-column align-items-center justify-content-center py-5 px-4 my-5'>
										<Fade bottom>
											<h1 className='font-300 text-center black'>
												Heads You Win, Tails We Win Together
											</h1>
											<p className='font-500 mt-3 text-center lht-27 black'>
												Since your trust matters the most, we have a win-win investment model for
												you. Once you give a green signal, we will{' '}
												<strong className='font-700 font-flat'>ask 50%</strong> of your initial
												investment amount for developing and designing MVPs or a full-blown
												application – whatever you need. For the rest, we will work in exchange for
												an equitable share in your company’s equity or revenue earnings.
											</p>
										</Fade>
									</div>
								</Link>
								<Image className='mmt-green-img' src={GREENSTAR} alt='no-img'></Image>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='mmt-modus-bottom-resp align-items-center justify-content-center'>
					<Col className=''>
						<DOWNARROW
							fill='black'
							stroke='purple'
							style={{
								fill: '#000000',
								transform: 'rotate(128deg)',
								margin: '30 auto',
								left: 0,
								right: 0,
							}}
							className='position-absolute mb-4'
						/>
						<h2 className='mt-5  pt-5 text-center font-200'>What Do You Get?</h2>
						<p className='text-center font-300'>
							The experience of working with a team where there are{' '}
							<span className='font-700'>no strings of risk-factor attached.</span>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Modus;
