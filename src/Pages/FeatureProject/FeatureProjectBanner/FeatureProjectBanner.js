import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import BGBANNER from '../../../Assets/Images/FeatureProject/Image-38.webp';

// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';

import './FeatureProjectBanner.scss';

const FeatureProjectBanner = () => {
	return (
		<div className='FeatureProjectBanner'>
			<Container fluid='md' className='mmt-papercard-container w-100 h-100 pt-3'>
				<Row className='justify-content-center align-items-center mmt-hookumi-heading mb-3'>
					<Col className='position-relative pb-3'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-start'>Hukoomi</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-1' src={TESTCURVE} alt='no-img'></Image> */}
						<Fade bottom>
							<p className='text-start mt-4 mb-4 font-400'>
								With Dynamic Contents, you can create personalized pages by populating data from
								various sources and design your own replicable portfolio layout.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='justify-content-center align-items-center'>
					<Col md lg={6} className='position-relative pb-3'>
						<h5 className='text-start font-300'>
							Category: <span className='font-600'>Branding & Web Design</span>
						</h5>
					</Col>
					<Col md lg={6} className='position-relative pb-3'>
						<h5 className='text-start font-300'>
							Link: <span className='font-600'>www.yourwebsite.com</span>
						</h5>
					</Col>
				</Row>
			</Container>
			<div className='mmt-feature-banner'>
				<div className='h-100 mmt-white-blur'>
					<Container fluid='md' className='mmt-white-cont  h-100'>
						<Row className='align-items-center justify-content-center h-100'>
							<Col className='h-100 position-relative'>
								<Carousel
									nextLabel=''
									prevLabel=''
									interval={5000}
									keyboard={true}
									indicators={false}
									fade
									className='mmt-hukumi-carousel'
								>
									<Carousel.Item>
										<Image className='d-block w-100 h-100' src={BGBANNER} alt='First slide' />
									</Carousel.Item>
									<Carousel.Item>
										<Image className='d-block w-100 h-100' src={BGBANNER} alt='First slide' />
									</Carousel.Item>
									<Carousel.Item>
										<Image className='d-block w-100 h-100' src={BGBANNER} alt='First slide' />
									</Carousel.Item>
								</Carousel>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default FeatureProjectBanner;
