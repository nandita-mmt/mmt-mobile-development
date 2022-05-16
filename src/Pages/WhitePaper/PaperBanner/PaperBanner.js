import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './PaperBanner.scss';

const PaperBanner = () => {
	return (
		<div className='PaperBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>Our White Paper</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default PaperBanner;
