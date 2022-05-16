import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

import './ImmigrationBanner.scss';

const ImmigrationBanner = () => {
	return (
		<div className='ImmigrationBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-start h-100'>
						<Col>
							<div className='font-xl text-center font-200 white '>
								Accelerating Every Business With The Power Of :
								<span className='font-xl font-500 white '>
									<Typewriter
										options={{
											strings: [
												'Artificial Intelligence & Machine Learning',
												'Blockchain',
												'Core Tech',
											],
											autoStart: true,
											loop: true,
											pauseFor: 2000,
										}}
									/>
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default ImmigrationBanner;
