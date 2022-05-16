import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { getTeamsAPI } from '../../../services/teams';

import './TeamCards.scss';
import { BASE_URL } from '../../../config/api/apiEndpoints';

const TeamCards = () => {
	const [data, setData] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [dataPerPage] = useState(8);

	const pagesVisited = pageNumber * dataPerPage;

	const pageCount = Math.ceil(data.length / dataPerPage);

	const handlePageClick = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map((team, i) => {
		return (
			<Col md={3} lg={3} key={i}>
				<Fade bottom>
					<div className='mmt-post mt-4 w-100 position-relative'>
						<div className='mmt-post-img'>
							{team?.image.map((img, index) => {
								return <Image key={index} src={BASE_URL + img?.url} alt='no-img' />;
							})}
						</div>
						<div className='mmt-post-detail'>
							<Fade bottom>
								<h5 className='mb-1 font-14 text-start font-700'>{team.name}</h5>
							</Fade>
							<Fade bottom>
								<p className='text-start font-micro font-300'>{team.designation}</p>
							</Fade>
						</div>
					</div>
				</Fade>
			</Col>
		);
	});

	useEffect(() => {
		const fetchData = async () => {
			const res = await getTeamsAPI();
			setData(res);
		};
		fetchData();
	}, []);

	return (
		<div className='TeamCards'>
			<Container className='mmt-papercard-container w-100 h-100 mb-5'>
				<Row className='align-items-center justify-content-center pt-5'>
					<Col md lg={11}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>
								Meet our brilliant minds! Know about the Magicmind Team
							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-3' src={TESTCURVE} alt='no-img'></Image> */}
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center mt-4 pb-5 mb-5'>
					<Col md lg={8}>
						<Fade>
							<div className='mmt-co-founder w-100 h-100 position-relative'>
								<div className='mmt-co-founder-img'></div>
								<div className='mmt-co-founder-detail'>
									<p className='text-start font-300'>Let us introduce to "Y"our team! When your mission is to perform faster and
										better, it is we, our people at MagicMinds take it up as a mission to fulfill it and drive you forward. Working with some of the brilliant minds in the sector, we take pride in our capacity and capability to set a new benchmark of delivering excellence with completion of every project.
									</p>
									<h4 className='mt-4 mb-2 text-start font-700'>Rajkumar Prasad</h4>
									<p className='mb-0 text-start font-300'>MD and Co-Founder</p>
									<a className='font-400 font-14' href='https://www.linkedin.com/in/kumarrk/'>
										Please follow in Linkedin
									</a>
								</div>
							</div>
						</Fade>
					</Col>
				</Row>
				
				<Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Our Team</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 text-start mt-4'>The only way to create magical wonders is with the right set of people who truly enjoy their job and are best at what they do.</p>
							<p className='font-300 text-start mt-4'>One team, one love &mdash; Innovation</p>
							<ul className='list-row-2'>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Sign-up</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Booking</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Rate Card</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>GPRS Rides</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Saved History</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Linked Wallets</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Bookings</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Reviews and Ratings</li>
								<li className='list-col text-lg-start font-400 lht-27 font-700'>Share details</li>
							</ul>
							<p className='font-300 text-start mt-4'>We are a team of aces, hustlers, digital over-lords, and game-changers. But more than that, we are a team of passionate people driven by one relentless pursuit- to whip up innovative solutions and deliver unparalleled results before deadline with ease.</p>
							<p className='font-300 text-start mt-4'>Well, that's about us.</p>
							<p className='font-300 text-start mt-4'>We'd love to hear about you and your ideas.</p>
						</Fade>
					</Col>
				</Row>

				<Row className='align-items-center justify-content-center pt-5'>
					<Col md lg={11}>
						<Fade bottom>
							<h1 className='font-xl font-200 text-center'>The Architects Of Your Success</h1>
						</Fade>
					</Col>{' '}
				</Row>
				<Row className='align-items-center justify-content-center mb-5'>{displayData}</Row>
				{displayData.length > dataPerPage ? (
					<Row className='align-items-center justify-content-center pt-3'>
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
				) : null}
			</Container>
		</div>
	);
};

export default TeamCards;
