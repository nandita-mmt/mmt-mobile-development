import React, { useState, useEffect, useCallback } from 'react';
import SweetAlert from 'sweetalert-react';
import { Card, Col, Container, Row, Button, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import * as SearchData from '../../../Assets/Data/Data.json';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FormikControl from '../../../Components/FormController/FormikControl';
import { getBlogAPI, getBlogCategoryAPI, createBlogMailAPI } from '../../../services/blog';
import { SearchBar } from '../../../Components/SearchBar/SearchBar';

import DOT from '../../../Assets/Images/Common/list-dot.svg';
import BTNIMG from '../../../Assets/Images/Knowledge/know-arrow.svg';
import ARROW from '../../../Assets/Images/Common/white-right-arrow.svg';
import USER from '../../../Assets/Images/Blog/user.svg';
import CALENDER from '../../../Assets/Images/Blog/calender.svg';

import './BlogCards.scss';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../config/api/apiEndpoints';

const BlogCards = ({ onSubmit }) => {
	const [show, setShow] = useState(false);
	const [cardBlogData, setDataBlogs] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	const [filteredCategory, setFilteredCategory] = useState([]);
	const [filteredOptions, setFilteredOptions] = useState([]);

	const [loading, setLoading] = useState(false);
	const [pageNumberLatest, setPageNumberLatest] = useState(0);
	const [pagesVisited, setPagesVisited] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [dataPerPage] = useState(10);
	const [dataPerPageLatest] = useState(3);


	const pagesVisitedLatest = pageNumberLatest * dataPerPageLatest;

	
	const pageCountLatest = Math.ceil(filteredCategory.length / dataPerPageLatest);

	const createdDate = filteredCategory.created_at;
	const extractedDate = moment(createdDate).format('Do MMM, YYYY');

	

	const searchingKey = (isSearching) => {
		console.log(isSearching)
		const tempfilteredOptions = filteredCategory.filter(
			crd => crd.Title.toLowerCase().includes(isSearching.toLowerCase()) || !isSearching
		);
		const tempPageCount = Math.ceil(tempfilteredOptions.length / dataPerPage);
		setPagesVisited(0);
		setPageCount(tempPageCount);
		setFilteredOptions(tempfilteredOptions)
	}

	const initialValues = {
		email: '',
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Email is invalid').required('Email is required'),
	});

	const handleSubmit = async (value, { resetForm }) => {
		await createBlogMailAPI(value);
		resetForm({});
		setShow(true);
	};


	const handleClick = (e, id) => {
		e.preventDefault();
		const category = cardBlogData.filter(crd => crd.blog_category.id === id);
		setFilteredCategory(category);
		//badri
		setFilteredOptions(category);
	};

	const handlePageClick = ({ selected }) => {
		setPagesVisited(selected*dataPerPage)
	};
	const handlePageClickLatest = ({ selected }) => {
		setPageNumberLatest(selected);
	};

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const res = await getBlogAPI();console.log('>>>', res);
			setDataBlogs(res);
			const sortedCategory = res.sort(
				(a, b) => new Date(b.published_at) - new Date(a.published_at)
			);
			setFilteredCategory(sortedCategory);
			setFilteredOptions(sortedCategory);
			const tempPageCount = Math.ceil(sortedCategory.length / dataPerPage);
			setPageCount(tempPageCount);
			setPagesVisited(0);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	}, [dataPerPage]);
	const fetchCategoryData = useCallback(async () => {
		try {
			const res = await getBlogCategoryAPI();
			setCategoryData(res);
		} catch (err) {
			console.log(err);
		}
	}, []);

	useEffect(() => {
		// if (loading === false) {
		fetchData();
		fetchCategoryData();
		//setLoading(false);
		// }
	}, []);
	return (
		<div className='BlogCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5'>
				<Row className='pb-5'>
					<Col lg={8} className='position-relative'>
						<div className='d-flex flex-column-reverse flex-md-row justify-content-between align-items-start'>
							<h1 className='font-xl font-200 me-2 mb-0 text-start'>Latest Posts</h1>
							<SearchBar
								placeholder='Search Posts'
								data={SearchData}
								searchClass='searchBar'
								searchClassInputs='mmt-search-inputs'
								searchClassInputField='mmt-search-input-field'
								searchClassIcons='mmt-search-icons'
								onChange={event => {
									searchingKey(event.target.value);
								}}
							/>
						</div>
						<Row className='pt-4'>
							{filteredOptions.length > 0 ? (
								filteredOptions.slice(pagesVisited, pagesVisited + dataPerPage).map((crd, i) => {
									return (
										<Col md lg={6} key={i}>
											<Link
																to={`/blog/${crd.slug}`}
																className='btn btn-light mmt-know-btn p-0'
																src={BTNIMG}
																alt='no-img'
											>
																
											<Card className='my-3 mmt-fixed-crd'>
												{crd.img != null ? (
													<Card.Img
														className='mmt-blog-crd-img'
														variant='top'
														src={BASE_URL + crd.img.url}
													/>
												) : null}
												<Card.Body className='p-4 mmt-blog-crd-body'>
													<Card.Title className='font-700'>
														<Fade bottom>{crd.Title}</Fade>
													</Card.Title>
													<Fade bottom>
														<div className='d-flex flex-row justify-content-start align-items-center mt-3'>
															<Link
																to={`/blog/${crd.slug}`}
																className='btn btn-light mmt-know-btn p-0'
																src={BTNIMG}
																alt='no-img'
															>
																<span>
																	<img src={BTNIMG} alt='no-img' className='mmt-button-arrow' />
																</span>
															</Link>
														</div>
													</Fade>
												</Card.Body>
												<Card.Footer className='text-muted px-4'>
													<div className='w-100 d-flex flex-row justify-content-between align-items-center my-1'>
														<div className='d-flex flex-row justify-content-start align-items-center w-50'>
															<Image src={CALENDER} alt='no-img' />
															<span className='ms-2 font-micro mb-0 font-300 ellipsis-txt d-block'>
																{extractedDate}
															</span>
														</div>
														<div className='d-flex flex-row justify-content-start align-items-center w-50'>
															<Image src={USER} alt='no-img' />
															<p className='ms-2 font-micro mb-0 font-300 text-capitalize ellipsis-txt d-block'>
																{crd.blog_category.Categories}
															</p>
														</div>
													</div>
												</Card.Footer>
											</Card>
											</Link>
											
										</Col>
									);
								})
							) : (loading === true ? 
									(<p className='font-500 text-center'>
										Loading ...
										{/* for <span>"{isSearching}"</span> */}
									</p>) :  
									(<p className='font-500 text-center'>
										No results found
										{/* for <span>"{isSearching}"</span> */}
									</p>)
								)}
						</Row>
						{filteredOptions.length <= 0 || filteredOptions.length <= 10 ? (
							''
						) : (
							<Row className='align-items-start justify-content-start'>
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
										containerClassName={'paginationButtonBlog'}
										// pageClassName={'page-item'}
										// pageLinkClassName={'page-link'}
										activeClassName={'paginationActive'}
									/>
								</Col>
							</Row>
						)}
					</Col>
					<Col lg={4} className='position-relative'>
						<div className='d-flex flex-column justify-content-start align-items-start'>
							<h1 className='font-xl font-200 mb-4 pb-3'>Categories</h1>
							<a
								href='/blog'
								className='mmt-catagories-link ms-2 mt-3'
								onClick={e => handleClick(e.categoryData.id)}
							>
								<Image className='me-2 mt-2' src={DOT} alt='no-img'></Image>
								<span className='mmt-category-txt black font-500 mb-0'>All</span>
							</a>
							{/* {filteredOptions.length > 0 ? ( */}
							{categoryData.map((catData, i) => {
								return (
									<div
										className='ms-2 mt-3 d-flex flex-column justify-content-start align-items-start h-100 mmt-gradient'
										key={i}
									>
										<a
											href='/blog'
											className='mmt-catagories-link'
											onClick={e => handleClick(e, catData.id)}
										>
											<Image className='me-2 mt-2' src={DOT} alt='no-img'></Image>
											<span className='mmt-category-txt black font-500 mb-0'>
												{catData?.Categories != null ? catData.Categories : 'Miscleneous'}
											</span>
										</a>
									</div>
								);
							})}
							

							<h1 className='mt-4 font-xl font-200'>Newsletter</h1>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={handleSubmit}
							>
								{({ dirty, isSubmitting }) => {
									return (
										<Form noValidate className='w-100 mt-3 mb-3'>
											<FormikControl
												control='text'
												name='email'
												placeholder='Enter your email address'
												required={true}
												value={''}
											/>
											<Button
												variant='btn btn-green font-600 py-3 px-5  mx-auto position-relative'
												block
												type='submit'
												disabled={!dirty || isSubmitting}
											>
												Subscribe
												<span>
													<Image
														className='modified-btn-circle ms-3'
														src={ARROW}
														alt='no-img'
													></Image>
												</span>
											</Button>
											<SweetAlert
												show={show}
												title='Successful'
												text='Submission successful.'
												onConfirm={() => setShow(false)}
											/>
										</Form>
									);
								}}
							</Formik>
						</div>
					</Col>
				</Row>
			</Container>

			<div className='mmt-blog-popular '>
				<Container className='mmt-papercard-container py-5'>
					<Row className='align-items-center justify-content-between '>
						<Col>
							<h1 className='font-xl font-200'>Popular Post</h1>
						</Col>
						{filteredOptions.length <= 0 ? (
							''
						) : (
							<Col className='d-flex justify-content-end align-items-end'>
								<ReactPaginate
									pageRangeDisplayed={5}
									previousLabel={<IoIosArrowBack />}
									nextLabel={<IoIosArrowForward />}
									breakClassName={'break-me'}
									pageCount={pageCountLatest}
									onPageChange={handlePageClickLatest}
									previousLinkClassName={'prevButton'}
									nextLinkClassName={'nextButton'}
									disabledClassName={'paginationDisabled'}
									marginPagesDisplayed={2}
									containerClassName={'paginationButtonBlogLatest'}
									pageClassName={'page-item'}
									pageLinkClassName={'page-link'}
								/>
							</Col>
						)}
					</Row>
					<Row className='align-items-start justify-content-start py-3'>
						{filteredOptions.length > 0 ? (
							filteredCategory
								.slice(pagesVisitedLatest, pagesVisitedLatest + dataPerPageLatest)
								.map((crd, i) => {
									return (
										<Col md lg={4} key={i}>
											<Link
																to={`/blog/${crd.slug}`}
																className='btn btn-light mmt-know-btn p-0'
																src={BTNIMG}
																alt='no-img'
											>
											<Card className='my-3 mmt-fixed-crd'>
												<Card.Body className='p-4 mmt-blog-crd-body'>
												
													<Card.Title className='font-700'>
														<Fade bottom>{crd.Title}</Fade>
													</Card.Title>
													<Fade bottom>
														<div className='d-flex flex-row justify-content-start align-items-center mt-3'>
															<Link
																to={`/blog/${crd.slug}`}
																className='btn btn-light mmt-know-btn p-0'
																src={BTNIMG}
																alt='no-img'
															>
																<span>
																	<img src={BTNIMG} alt='no-img' className='mmt-button-arrow' />
																</span>
															</Link>
														</div>
													</Fade>
												</Card.Body>
												<Card.Footer className='text-muted px-4'>
													<div className='w-100 d-flex flex-row justify-content-between align-items-center my-1'>
														<div className='d-flex flex-row justify-content-center align-items-center w-50'>
															<Image src={CALENDER} alt='no-img' />
															<span className='blog-crd-footer ms-2 font-micro mb-0 font-300 ellipsis-txt'>
																{extractedDate}
															</span>
														</div>
														<div className='d-flex flex-row justify-content-center align-items-center w-50'>
															<Image src={USER} alt='no-img' />
															<span className='blog-crd-footer ms-2 font-micro mb-0 font-300 ellipsis-txt'>
																{crd.blog_category.Categories}
															</span>
														</div>
													</div>
												</Card.Footer>
											</Card>
											</Link>
										</Col>
									);
								})
						) : (
							<p className='font-500 text-center'>
								No results found
								{/* for <span>"{isSearching}"</span> */}
							</p>
						)}
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default BlogCards;
