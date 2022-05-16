import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './SearchBar.scss';

export const SearchBar = ({
	placeholder,
	onChange,
	data,
	searchClass,
	searchClassInputs,
	searchClassInputField,
	searchClassIcons,
}) => {
	return (
		<div className={searchClass}>
			<div className={searchClassInputs}>
				<input
					className={searchClassInputField}
					type='text'
					placeholder={placeholder}
					onChange={onChange}
				></input>
				<div className={searchClassIcons}>
					<FiSearch size={28} color='#cacad3' />
				</div>
			</div>
			{/* <div className='mmt-data-result'>{data.map((val, i) => {})}</div> */}
		</div>
	);
};
