import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import VIDEOWRAP from '../../../Assets/Images/Testimonial/video-wrap.svg';

import './TestCustomer.scss';

const TestCustomer = () => {
	return (
		<div className='TestCustomer py-5'>
			<Container className='my-5 pb-5'>
				<Row className='align-items-center justify-content-center'>
					<Col>
						<h1 className='font-xl font-200 text-center'>How We Put The Smile On Their Faces!</h1>
						<div className='w-100 mmt-test-vid-div d-flex flex-column justify-content-center align-items-center position-relative'>
							<Image
								className='mmt-text-img position-absolute w-100'
								src={VIDEOWRAP}
								alt='no-img'
							></Image>
							<div className='mmt-react-player'>
								<ReactPlayer
									className='w-100 h-100'
									url='https://www.youtube.com/embed/x_09wO13zt4'
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TestCustomer;
