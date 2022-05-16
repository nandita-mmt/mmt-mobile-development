import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './CareerBanner.scss';

const CareerBanner = () => {
	return (
		<div className='CareerBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>When You Do What You Love</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>It’s Not A Job Anymore! (Join Us)</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default CareerBanner;
