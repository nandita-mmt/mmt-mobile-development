import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './PrivacyPolicyBanner.scss';

const PrivacyPolicyBanner= () => {
	return (
		<div className='MobilityPractice'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-start h-100'>
						<Col md lg={9}>
							<h1 className='mmt-web-resp-txt font-xl font-200 white'>
							Digital Disruption Concepts, Carved to Transform Business Capabilities

							</h1>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default PrivacyPolicyBanner;
