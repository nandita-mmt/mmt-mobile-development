import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import FRONT from '../../../Assets/Images/DigitalAcceleration/banner-r8-frnt.svg';

import './DigitalAccelerationBanner.scss';

const DigitalAccelerationBanner = () => {
	return (
		<div className='DigitalAccelerationBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-start h-100'>
						<Col md lg={9} className='py-4'>
							<h1 className='font-xl font-200 white'>
								Digital Disruption Ideas, Concepts, Designs & Solutions Carved To Transform Business
								Capabilities & Capacities
							</h1>
						</Col>
						<Col md={0} lg={3} className='mmt-img-back pt-3'>
							<Image className='w-75' src={FRONT} alt='no-img'></Image>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default DigitalAccelerationBanner;
