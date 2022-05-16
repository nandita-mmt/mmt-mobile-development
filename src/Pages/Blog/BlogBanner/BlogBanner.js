import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './BlogBanner.scss';

const BlogBanner = () => {
	return (
		<div className='BlogBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='h-100 position-relative'>
					<div className='mmt-paper-heading'>
						<Fade bottom>
							<h1 className='font-300 font-xl white'>Blog</h1>
						</Fade>
						<Fade bottom>
							<h5 className='font-300 font-weight-bolder white'>Connecting ideas and people</h5>
						</Fade>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default BlogBanner;
