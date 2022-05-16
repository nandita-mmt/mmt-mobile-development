import React from 'react';
import TestBanner from './TestBanner/TestBanner';
import TestCards from './TestCards/TestCards';
import TestCustomer from './TestCustomer/TestCustomer';

import './Testimonial.scss';

const Testimonial = () => {
	return (
		<div className='Testimonial'>
			<TestBanner />
			<TestCards />
			<TestCustomer />
		</div>
	);
};
export default Testimonial;
