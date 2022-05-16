import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './NICHESoftwareBanner.scss';

const NICHESoftwareBanner = () => {
	return (
		<div className='NICHESoftwareBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-start h-100'>
						<Col md lg={9}>
							<h1 className='mmt-web-resp-txt font-xl font-200 white'>
								Responsive high performance niche software solutions Designed to help your business
								grow
							</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default NICHESoftwareBanner;
