import React from 'react';
import ChiropractorBanner from './ChiropractorBanner/ChiropractorBanner';
import ChiropractorCards from './ChiropractorCards/ChiropractorCards';

import './Chiropractor.scss';

const Chiropractor = () => {
	return (
		<div className='Chiropractor'>
			<ChiropractorBanner />
			<ChiropractorCards />
		</div>
	);
};
export default Chiropractor;
