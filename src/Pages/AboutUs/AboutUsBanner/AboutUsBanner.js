import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import USER from '../../../Assets/Images/AboutUs/user.svg';
import USERS from '../../../Assets/Images/AboutUs/users.svg';
import CLIENT from '../../../Assets/Images/AboutUs/client.svg';

import './AboutUsBanner.scss';

const AboutUsBanner = () => {
	return (
		<div className='AboutUsBanner'>
			<div className='mmt-about-bnr-blur'>
				<Container className='py-3'>
					<Row className='align-items-center'>
						<Col lg={9}>
							<h1 className='font-300 font-xl text-lg-start white py-2'>Don't just sell. Transform, with Magicmind Technologies</h1>
						</Col>
						<Col lg={3} className='py-2'>
							<div className='mmt-paper-heading p-3'>
								<Fade bottom>
									<div className='mmt-client-count px-2'>
										<div className=''>
											<h1 className='font-main mb-0 font-100' style={{ color: '#FFBA0D' }}>
												100
											</h1>
											<p className='font-200 white'>Clients</p>
										</div>
										<Image src={USER} alt='no-img' />
									</div>
								</Fade>
								<Fade bottom>
									<div className='mmt-client-count px-2'>
										<div className=''>
											<h1 className='font-main mb-0 font-100' style={{ color: '#2DA5FF' }}>
												34
											</h1>
											<p className='font-200 white'>Teams</p>
										</div>
										<Image src={USERS} alt='no-img' />
									</div>
								</Fade>
								<Fade bottom>
									<div className='mmt-client-count px-2'>
										<div className=''>
											<h1 className='font-main mb-0 font-100' style={{ color: '#7EFF4B' }}>
												100
											</h1>
											<p className='font-200 white'>Solutions</p>
										</div>
										<Image src={CLIENT} alt='no-img' />
									</div>
								</Fade>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default AboutUsBanner;