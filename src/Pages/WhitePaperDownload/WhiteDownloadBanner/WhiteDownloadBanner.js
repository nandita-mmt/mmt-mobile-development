import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import ARROW from '../../../Assets/Images/WhitePaperDownload/down-arrow.svg';

import './WhiteDownloadBanner.scss';

const WhiteDownloadBanner = () => {
	return (
		<div id='banner' className='WhiteDownloadBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-center'>
						<Col md lg={10}>
							<h1 className='font-xl font-200 white text-center text-md-start'>
								Evaluate How Much Will It Cost To Develop A Mobile App?
							</h1>
						</Col>
						<Col md lg={2}>
							<HashLink smooth to={`/whitepaper-download`}>
								<div className='button-animation'>
									<button>
										<svg
											version='1.1'
											id='Layer_1'
											xmlns='http://www.w3.org/2000/svg'
											x='0px'
											y='0px'
											width='142.725px'
											height='144.667px'
											viewBox='0 0 142.725 144.667'
											enableBackground='new 0 0 142.725 144.667'
										>
											<path
												fill='#FFFFFF'
												d='M3.6850000000000023,73.25a68.25,68.25 0 1,0 136.5,0a68.25,68.25 0 1,0 -136.5,0'
											/>
										</svg>
										Download <br />
										Now
										<span>
											<img src={ARROW} alt='no-img' className='mmt-button-arrow' />
										</span>
									</button>
								</div>
							</HashLink>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default WhiteDownloadBanner;
