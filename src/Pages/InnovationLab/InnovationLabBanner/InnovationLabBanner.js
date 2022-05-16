import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './InnovationLabBanner.scss';

const InnovationLabBanner = () => {
	return (
		<div className='InnovationLabBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 mmt-heading-font white'>Innovation Lab</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Thrashing ‘Dumbsourcing’, One Brilliant Thought At A Time
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default InnovationLabBanner;
