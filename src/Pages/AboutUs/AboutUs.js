import React from 'react';
import AboutUsBanner from './AboutUsBanner/AboutUsBanner';
import AboutUsCards from './AboutUsCards/AboutUsCards';

import './AboutUs.scss';

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<AboutUsBanner />
			<AboutUsCards />
		</div>
	);
};
export default AboutUs;
