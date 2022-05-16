import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { getTestimonialAPI } from '../../../services/testimonial';
import { BASE_URL } from '../../../config/api/apiEndpoints';

import QUOTE from '../../../Assets/Images/Testimonial/quote.png';

import './TestCards.scss';

const TestCards = () => {
	const [testData, setTestData] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [dataPerPage] = useState(4);
	const pagesVisited = pageNumber * dataPerPage;

	const pageCount = Math.ceil(testData.length / dataPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayTestData = testData
		.slice(pagesVisited, pagesVisited + dataPerPage)
		.map((test, i) => {
			return (
				<Col lg={6} key={i} className='mmt-parent-founder'>
					<Fade bottom>
						<div className='mmt-co-founder position-relative'>
							<div className='mmt-co-founder-detail'>
								<p className='text-start font-400'>{test.description}</p>
							</div>
							<Image src={QUOTE} alt='no-img' className='position-absolute test-quote'></Image>
							<div className='mmt-co-founder-img'>
								{test.image.map((img, index) => {
									return (
										<Image
											key={index}
											src={BASE_URL + img.url}
											alt='no-img'
											className='w-100'
										></Image>
									);
								})}
								<p className='font-500 px-2 pt-2 mb-0 ellipsis-txt'>{test.name}</p>
								<p className=' font-500 px-2 pt-1 mb-0 cont-color ellipsis-txt'>{test.country}</p>
							</div>
						</div>
					</Fade>
				</Col>
			);
		});

	useEffect(() => {
		const fetchData = async () => {
			const res = await getTestimonialAPI();
			setTestData(res);
		};
		fetchData();
	}, []);
	return (
		<div className='TestCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='align-items-center justify-content-center pb-4'>
					<Col lg className='mmt-test-crd-resp'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Catering to a global clientele with enviable track record
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-3' src={TESTCURVE} alt='no-img'></Image> */}
						<p className='text-center mt-4 font-300'>
							We’ve helped over 1000 startups, SMEs, medium-sized businesses and large
							enterprises overcome their biggest software development and mobile app development
							challenges. But don’t just take our word for it. Checkout the testimonials below to
							see exactly what our customers have to say about us.
						</p>
						<p className='text-center mt-4 font-300'>
							Magicmind Technologies Limited is an award-winning ISO certified company that started
							its operations in the year 2016. We like to introduce ourselves as a product
							development company that delivers utmost perfection with every project.
						</p>
					</Col>{' '}
				</Row>
				<div className='mmt-test-data-container' style={{ height: 950 }}>
					<Row className='mb-5 justify-content-between align-items-start'>{displayTestData}</Row>
				</div>
				<Row className='align-items-center justify-content-center mb-5'>
					<Col className='d-flex flex-row justify-content-center align-items-center'>
						<ReactPaginate
							pageRangeDisplayed={5}
							previousLabel={<IoIosArrowBack />}
							nextLabel={<IoIosArrowForward />}
							breakClassName={'break-me'}
							pageCount={pageCount}
							onPageChange={handlePageClick}
							previousLinkClassName={'prevButton'}
							nextLinkClassName={'nextButton'}
							disabledClassName={'paginationDisabled'}
							marginPagesDisplayed={2}
							containerClassName={'paginationButton'}
							pageClassName={'page-item'}
							pageLinkClassName={'page-link'}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TestCards;
