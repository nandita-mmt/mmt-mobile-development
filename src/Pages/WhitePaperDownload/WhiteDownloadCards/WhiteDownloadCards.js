import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import DOT from '../../../Assets/Images/Common/list-dot.svg';

import './WhiteDownloadCards.scss';
import WhitePaperForm from '../WhitePaperForm/WhitePaperForm';

const WhiteDownloadCards = ({ data }) => {
	return (
		<div id='navigate-card' className='WhiteDownloadCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='pb-5 mb-5'>
					<Col md lg={7} className='position-relative mb-4'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center text-lg-start'>Overview</h1>
						</Fade>
						<p className='text-center text-lg-start pt-3 mt-5 font-400 lht-27'>
							Are you willing to build a mobile app for your business but scared of the expenses?
							There are many facts that influence the cost of a mobile app development project. In
							this white paper, we will discuss all the facts that may help you evaluate the cost of
							your mobile app development project.
						</p>
						<h4 className='mt-5 text-center text-lg-start font-700 font-flat'>
							This paper will cover the following topics:
						</h4>
						<div className='d-flex flex-row align-items-start justify-content-start'>
							<Image src={DOT} alt='no-img' className='mt-2' />
							<p className='mb-0 ms-3 text-start font-300 mb-1'>
								Mobile app and their classifications
							</p>
						</div>
						<div className='d-flex flex-row align-items-start justify-content-start'>
							<Image src={DOT} alt='no-img' className='mt-2' />
							<p className='mb-0 ms-3 text-lg-start font-300'>
								Facts that determine the total developmental cost.
							</p>
						</div>
					</Col>
					<Col md lg={5}>
						<div className='mmt-form-div w-100'>
							<WhitePaperForm data={data} />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default WhiteDownloadCards;
