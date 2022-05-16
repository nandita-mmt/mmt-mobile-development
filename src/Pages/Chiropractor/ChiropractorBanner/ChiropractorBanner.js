import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import BNRIMG from '../../../Assets/Images/Chiropractor/banner-main.webp';
import SECIMG from '../../../Assets/Images/Chiropractor/banner-second.webp';

import './ChiropractorBanner.scss';

const ChiropractorBanner = () => {
	return (
		<div className='ChiropractorBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-start justify-content-center h-100'>
						<Col md lg={7} className='py-5 my-5'>
							<h1 className='font-xl font-200 white'>Chiropractor Digital Marketing Agency</h1>
							<h5 className='font-300 white mt-4'>
								Get Ahead Of The Competition With Innovative Solutions
							</h5>
							<Button className='btn btn-green mt-4 font-600 px-4 py-2 font-flat'>
								Get My FREE Proposal
							</Button>
						</Col>
						<Col md lg={5} className='mmt-chiro-bnr-img-dv position-relative'>
							<Image className='mmt-chiro-bnr-img' src={BNRIMG} alt='no-img'></Image>
							<Image className='mmt-chiro-bnr-second' src={SECIMG} alt='no-img'></Image>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ChiropractorBanner;
