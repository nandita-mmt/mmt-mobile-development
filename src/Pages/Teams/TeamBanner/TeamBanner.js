import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './TeamBanner.scss';

const TeamBanner = () => {
	return (
		<div className='TeamBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'>We're a Results Driven Team</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>
							Meet The Magic-Heads Of MagicMinds
						</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default TeamBanner;
