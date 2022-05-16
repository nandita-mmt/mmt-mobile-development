import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './DeepLearningBanner.scss';

const DeepLearningBanner = () => {
	return (
		<div className='DeepLearningBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-start h-100'>
						<Col md lg={9}>
							<h1 className='font-xl font-200 white'>Impact Innovation Framework DeepLearning</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default DeepLearningBanner;
