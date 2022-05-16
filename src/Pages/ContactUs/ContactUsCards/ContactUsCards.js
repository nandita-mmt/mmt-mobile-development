import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import ContactUsForm from '../ContactUsForm/ContactUsForm';

import './ContactUsCards.scss';

const ContactUsards = () => {
	return (
		<div className='ContactUsCards' id="contact-form">
			<Container className='mmt-papercard-container w-100 h-100 mt-5'>
				<Row className='pb-5 mb-5 justify-content-center align-items-center'>
					<Col md={8} className='mmt-form-div' >
						<ContactUsForm />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ContactUsards;
