import React from 'react';
import ContactUsBanner from './ContactUsBanner/ContactUsBanner';
import ContactUsCards from './ContactUsCards/ContactUsCards';

import './ContactUs.scss';

const ContactUs = () => {
	return (
		<div className='ContactUs'>
			<ContactUsBanner />
			<ContactUsCards />
		</div>
	);
};
export default ContactUs;
