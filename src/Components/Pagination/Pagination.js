import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './Pagination.scss';

const Pagination = props => {
	const { Data, DataPerPage, onchange } = props;
	const [count, setCount] = useState(0);
	const [initCalled, setInitCalled] = useState(false);
	const [nextDisabled, setNextDisabled] = useState(true);
	const [prevDisabled, setPrevDisabled] = useState(true);

	const PaginationChange = useCallback(
		DataFor => {
			let end = 0;
			let start = count;
			if (DataFor === 'Init') {
				end = DataPerPage;
				if (Data.length > DataPerPage) {
					setNextDisabled(false);
				}
			} else if (DataFor === 'Next') {
				setPrevDisabled(false);
				end = count + DataPerPage;
				if (end >= Data.length) {
					setNextDisabled(true);
				}
			} else if (DataFor === 'Prev') {
				setNextDisabled(false);
				end = count - DataPerPage;
				start = end - DataPerPage;
				if (start === 0) {
					setPrevDisabled(true);
				}
			}
			const PageData = Data.slice(start, end);
			onchange(PageData);
			setCount(end);
		},
		[Data, DataPerPage, count, onchange]
	);
	useEffect(() => {
		if (!initCalled) {
			PaginationChange('Init');
			setInitCalled(true);
		}
	}, [initCalled, PaginationChange]);
	return (
		<div className='PaginationButton'>
			<Button
				className='btn mt-3 prev-button'
				variant='light'
				disabled={prevDisabled}
				onClick={() => {
					PaginationChange('Prev');
				}}
			>
				<IoIosArrowBack />
			</Button>
			<Button
				className='btn mt-3'
				variant='light'
				disabled={nextDisabled}
				onClick={() => {
					PaginationChange('Next');
				}}
			>
				<IoIosArrowForward />
			</Button>
		</div>
	);
};

export default Pagination;
