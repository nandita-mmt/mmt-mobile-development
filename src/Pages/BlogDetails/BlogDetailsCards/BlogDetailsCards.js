import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import './BlogDetailsCards.scss';
import { BASE_URL } from '../../../config/api/apiEndpoints';

const BlogDetailsCards = ({ data }) => {
	return (
		<div className='BlogDetailsCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5'>
				<Row className='mb-5'>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<div className='mmt-blog-img-dv'>
								<Image
									className='mt-4 mmt-blog-content-img'
									src={BASE_URL + data[0]?.img?.url}
									alt='no-img'
								></Image>
							</div>
							<div
								dangerouslySetInnerHTML={{ __html: data[0]?.Description }}
								className='mt-5 font-400 lht-27'
								style={{ fontFamily: 'Poppins' }}
							></div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default BlogDetailsCards;
