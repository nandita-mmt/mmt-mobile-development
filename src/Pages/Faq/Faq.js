import React from 'react';
import FaqBanner from './FaqBanner/FaqBanner';
import FaqCards from './FaqCards/FaqCards';

import './Faq.scss';

const Faq = () => {
	return (
		<div className='Faq'>
			<FaqBanner />
			<FaqCards />
		</div>
	);
};
export default Faq;
