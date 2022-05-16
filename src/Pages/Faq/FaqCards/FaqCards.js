import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import * as SearchData from '../../../Assets/Data/Data.json';
import { getFaqAPI } from '../../../services/faq';

import { SearchBar } from '../../../Components/SearchBar/SearchBar';

import DOTS from '../../../Assets/Images/Common/list-dot.svg';

import './FaqCards.scss';

const FaqCards = () => {
	const [cardFaqData, setCardFaqData] = useState([]);
	const [isSearching, setIsSearching] = useState('');
	const filteredOptions = cardFaqData.filter(
		crd => crd.question.toLowerCase().includes(isSearching.toLowerCase()) || !isSearching
	);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getFaqAPI();
			console.log(777, res);
			setCardFaqData(res);
		};
		fetchData();
	}, []);
	return (
		<div className='FaqCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 pt-5'>
				<Row className='align-items-center justify-content-center mb-5 pb-4'>
					<Col md lg={7}>
						<SearchBar
							placeholder='Ask a question'
							data={SearchData}
							searchClass='searchBar'
							searchClassInputs='mmt-search-inputs'
							searchClassInputField='mmt-search-input-field'
							searchClassIcons='mmt-search-icons'
							onChange={event => {
								setIsSearching(event.target.value);
							}}
						/>
					</Col>
				</Row>
				<Row className='align-items-center justify-content-center align-items-lg-start  mb-5 pb-4'>
					<Col md lg={12} className='position-relative'>
						<Fade bottom>
							<Accordion preExpanded={[0]}>
								{filteredOptions.length > 0 ? (
									filteredOptions.map((crd, i) => {
										return (
											<AccordionItem uuid={i} className='mmt-mobile-footer-ind' key={i}>
												<AccordionItemHeading className='bg-trans'>
													<AccordionItemButton>
														<div className='mmt-faq-txt d-flex flex-row justify-content-start align-items-center'>
															<Image src={DOTS} />
															<h5 className='mmt-faq-q-txt font-600 ms-2 me-5 mb-0'>
																{crd.question}
															</h5>
														</div>
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p className='mmt-faq-a-txt mb-4 ms-3 font-400'>{crd.answer}</p>
												</AccordionItemPanel>
											</AccordionItem>
										);
									})
								) : (
									<p className='font-500 text-center'>
										No results found for <span>"{isSearching}"</span>
									</p>
								)}
							</Accordion>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FaqCards;
