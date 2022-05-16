import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './KnowledgeIndustryBanner.scss';

const KnowledgeIndustryBanner = () => {
	return (
		<div className='KnowledgeIndustryBanner'>
			<Container className='h-100 position-relative'>
				<div className='mmt-paper-heading'>
					<Fade bottom>
						<h1 className='font-300 font-xl white'> Trusted By Industries Worldwide</h1>
					</Fade>
					<Fade bottom>
						<h5 className='font-300 font-weight-bolder white'>More Engagement, More Growth</h5>
					</Fade>
				</div>
			</Container>
		</div>
	);
};

export default KnowledgeIndustryBanner;
