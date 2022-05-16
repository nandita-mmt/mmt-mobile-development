import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './TestBanner.scss';

const TestBanner = () => {
	return (
		<div className='TestBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>Trust- The Biggest Wealth For Us</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Working hard to set up a new benchmark In providing client satisfaction
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default TestBanner;
