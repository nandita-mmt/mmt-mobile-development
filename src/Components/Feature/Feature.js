import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import MultiCarousel from '../MultiCarousel/MultiCarousel';

import CIRC from '../../Assets/Images/Feature/featured-circle.svg';
import CURVE from '../../Assets/Images/Feature/carousel-curve.svg';
import PATHTOP from '../../Assets/Images/Feature/feature-top-arrow.svg';
import PATHBOTTOM from '../../Assets/Images/Feature/Path-bottom.svg';

import './Feature.scss';

const Feature = () => {
	return (
		<div className='Feature pb-5 position-relative'>
			<Container fluid='md' className='my-5 resp-car-pad'>
				<Row className='pb-3'>
					<Col md lg={6} className='pb-5 px-4'>
						<Fade bottom>
							<h1 className='font-300 font-xl text-center text-lg-start white'>
								Featured Projects
							</h1>
							<p className='font-400 mt-3  text-center text-lg-start white'>
								The perfect combination of bullet-proof strategy, category-defining creativity, and
								impeccable execution. Learn more about how Magicmind Technologies Limited helps
								ambitious organizations move at the speed of culture.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className=''>
					<Col className='resp-car-pad'>
						<MultiCarousel />
					</Col>
				</Row>
			</Container>
			<Image src={PATHTOP} alt='no-img' className='mmt-top-path' />
			<Image src={PATHBOTTOM} alt='no-img' className='mmt-bottom-path' />
			<Image src={CIRC} alt='no-img' className='mmt-feature-circ' />
			<Image src={CURVE} alt='no-img' className='mmt-feature-curve' />
		</div>
	);
};

export default Feature;
