import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './CoreTechBanner.scss';

const CoreTechBanner = () => {
	return (
		<div className='CoreTechBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>Core Tech</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Trail-Blazing Business Solutions
							<br />
							Backed By The Most Advanced Tech
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default CoreTechBanner;
