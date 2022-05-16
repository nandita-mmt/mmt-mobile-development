import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image, Button, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { getWhitePaperAPI } from '../../../services/whitepaper';

import ARROW from '../../../Assets/Images/WhitePaperDownload/down-arrow.svg';
import RIGHTARROW from '../../../Assets/Images/Common/white-right-arrow.svg';

import './PaperCards.scss';
import { BASE_URL } from '../../../config/api/apiEndpoints';

const MAX_LENGTH = 100;

const PaperCards = () => {
	const [whitepaperData, setWhitepaperData] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [dataPerPage] = useState(6);

	const pagesVisited = pageNumber * dataPerPage;

	const pageCount = Math.ceil(whitepaperData.length / dataPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayWhitePaperData = whitepaperData
		.slice(pagesVisited, pagesVisited + dataPerPage)
		.map((crd, i) => {
			return (
				<Col md={6} lg={4} key={i}>
					<Card className='my-3 whitepaper-crd'>
						{crd.img.map((image, index) => {
							return (
								//badri
								<Link to={`/whitepaper-download/${crd.slug}`}>
								<Image
									key={index}
									src={BASE_URL + image.url}
									alt='no-img'
									className='mmt-whitepaper-img me-3 w-100'
								></Image>
								</Link>
							);
						})}
						<Card.Body className='mmt-crd-body px-4 py-3 position-relative'>
							<Link to={`/whitepaper-download/${crd.slug}`} className='mmt-download-btn'>
								<Image src={ARROW} />
							</Link>{' '}
							<Fade bottom>
								<Card.Title className='mmt-crd-title font-700'>
									<Link to={`/whitepaper-download/${crd.slug}`}>
										<span>{crd.title}</span>
									</Link>
								</Card.Title>
							</Fade>
							<Fade bottom>
								<Card.Text className='font-200 mt-4'>
									{crd.description.length > MAX_LENGTH ? (
										<div>{`${crd.description.substring(0, MAX_LENGTH)}...`}</div>
									) : (
										<p>{crd.description}</p>
									)}
								</Card.Text>
							</Fade>
							<Link to={`/whitepaper-download/${crd.slug}`} className='fixedToBottom customNavLink'>
								<Button className='btn btn-green mt-4'>
									Learn More <Image className='ms-2' src={RIGHTARROW} />
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	useEffect(() => {
		const fetchData = async () => {
			const res = await getWhitePaperAPI();
			console.log(777, res);
			setWhitepaperData(res);
		};
		fetchData();
	}, []);

	return (
		<div className='PaperCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='pt-5 mb-5'>{displayWhitePaperData}</Row>
				{whitepaperData.length > dataPerPage ? (
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
				) : null}
			</Container>
		</div>
	);
};

export default PaperCards;
