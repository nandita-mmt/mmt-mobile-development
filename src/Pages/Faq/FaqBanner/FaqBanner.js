import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './FaqBanner.scss';

const FaqBanner = () => {
	return (
		<div className='FaqBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>How can we help?</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Find advice and answers from our Support team! Browse through the questions most
							frequently asked by our customers.
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default FaqBanner;
