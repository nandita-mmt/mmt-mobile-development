import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoBriefcaseOutline, IoLocationOutline } from 'react-icons/io5';

import { getCareerAPI } from '../../../services/career';
import CareerModal from '../../../Components/CareerModal/CareerModal';

import ICON from '../../../Assets/Images/Career/career-icon.svg';
import RIGHTARROW from '../../../Assets/Images/Common/white-right-arrow.svg';
import ONE from '../../../Assets/Images/Career/secured.svg';
import TWO from '../../../Assets/Images/Career/growth.svg';
import THREE from '../../../Assets/Images/Career/rewarding.svg';

import './CareerCards.scss';

const CareerCards = () => {
	const [cardData, setCardData] = useState([]);

	const [filteredCardData, setFilteredCardData] = useState([]);
	const [show, setShow] = useState(false);
	const [pageNumber, setPageNumber] = useState(0);
	const [dataPerPage] = useState(6);

	const DataArray = [
		{
			img: ONE,
			title: 'Secured Tenure',
			description:
				'Enjoy a secured and accomplished professional life where we appreciate your passion and dedication. We consider mistakes as a part of learning.',
		},
		{
			img: TWO,
			title: 'Growth Platform',
			description:
				'Think, learn and perform – at MMT we give you a string platform to break the glass ceiling and push your limits to make new room for skill, knowledge and career growth.',
		},
		{
			img: THREE,
			title: 'Rewarding Career',
			description:
				'We always welcome new ideas from whoever it is coming from. Your ideas and concepts will always be honoured and appreciated even when they require one or two-tweaks.',
		},
	];

	const handleClose = () => setShow(false);
	const handleShow = (e, id) => {
		e.preventDefault();
		const filterData = cardData.filter(data => data?.id === id);
		console.log(333, filterData);
		setFilteredCardData(filterData);
		setShow(true);
	};

	const pagesVisited = pageNumber * dataPerPage;

	const pageCount = Math.ceil(cardData.length / dataPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};
	const displayCardData = cardData.slice(pagesVisited, pagesVisited + dataPerPage).map((crd, i) => {
		return (
			<Col lg={4} key={i}>
				
				<Card className='my-3 hover_career' onClick={e => handleShow(e, crd.id)}>
					<Card.Body className='p-4'>
						<Card.Title className='font-700'>
							<div className='d-flex flex-row justify-content-start align-items-center'>
								<Fade bottom>
									<Image src={ICON} alt='no-img' className='me-3'></Image>
								</Fade>
								<Fade bottom>
									<h4 className='mb-0 font-700'>{crd.post}</h4>
								</Fade>
							</div>
							<Fade bottom>
								<Row className='justify-content-start align-items-center mt-3'>
									<Col className='d-flex flex-row justify-conten-start align-items-center'>
										<IoBriefcaseOutline size={24} />
										<p className='ms-2 mb-0 font-400 font-14'>{crd.exp}</p>
									</Col>
									<Col className='d-flex flex-row justify-conten-start align-items-center'>
										<IoLocationOutline size={24} />
										<p className='text-capitalize ms-2 mb-0 font-400 font-14'>{crd.location}</p>
									</Col>
								</Row>
							</Fade>
						</Card.Title>
						<Fade bottom>
							<Card.Text className='font-300 mt-4'>{crd.details}</Card.Text>
						</Fade>
						<Fade bottom>
							<div className='mmt-job-type d-flex flex-row justify-content-center align-items-center py-1 px-2 mt-3'>
								<p className='mb-0 font-600 font-micro'>{crd.type}</p>
							</div>
						</Fade>
						<Fade bottom>
							<Button className='btn btn-green mt-4' onClick={e => handleShow(e, crd.id)}>
								Apply Now <Image className='ms-2' src={RIGHTARROW} />
							</Button>
						</Fade>
					</Card.Body>
				</Card>
				
			</Col>
		);
	});
	useEffect(() => {
		const fetchData = async () => {
			const res = await getCareerAPI();
			setCardData(res);
		};
		fetchData();
	}, []);

	return (
		<div className='CareerCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='mb-2'>
					<Col lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center mb-0'>
								Set Sail For The Career Of Your Dreams
							</h1>
						</Fade>
						<Fade bottom>
							<p className='text-center mt-4 font-400 lht-27'>
								At MagicMinds, our employees do not just do a job, but they strengthen their career
								by pushing the limits of their knowledge and skills with every project. At MMT,
								every professionals gets
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className='align-items-start justify-content-center pb-3 mb-5'>
					{DataArray.map((data, i) => {
						return (
							<Col lg={4} key={i}>
								<Card className='mmt-scope-crd my-3 p-3 w-100'>
									<Card.Body className=''>
										<Card.Title className='font-700 mmt-img-crd'>
											<Image src={data.img} alt='no-img' className='mmt-company'></Image>
										</Card.Title>
										<Card.Text className='text-center font-700 mt-4'>{data.title}</Card.Text>
										<Card.Text className='font-300 mt-3'>{data.description}</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>

				<Row className='mb-5'>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center mb-0'>
								A Close-Knit Family Who Love To Have Fun & Work Together
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						<Fade bottom>
							<p className='text-center mt-4 font-400 lht-27'>
								MagicMinds Technologies is a jovial family of nearly 200+ members who enjoy doing
								what they do! We are a closely-knit family of professionals who collectively create
								an environment of cooperation and support.
							</p>
						</Fade>
						<Fade bottom>
							<p className='text-center mt-4 font-400 lht-27'>
								Each and every individual in the team is an integral part of our driving force who
								are not merely restricted to function in their cubicles. Rather, everyone at MMT
								form a strong support system for each other and the organization.
							</p>
						</Fade>
					</Col>
				</Row>
				<Row className=''>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center mb-0'>Explore Current Openings</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center mt-3 mb-5'>{displayCardData}</Row>
				{cardData.length > dataPerPage ? (
					<Row className='align-items-center justify-content-center mb-5'>
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
					</Row>
				) : (
					''
				)}
			</Container>

			<CareerModal show={show} handleClose={handleClose} filteredCardData={filteredCardData} />
		</div>
	);
};

export default CareerCards;
