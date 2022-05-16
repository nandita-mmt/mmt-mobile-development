import React from 'react';
// import { Container } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import MailTo from '../../../Components/MailTo/MailTo';

import './ContactUsBanner.scss';

const ContactUsBanner = () => {
	return (
		<div className='ContactUsBanner'>
			<div className='h-100 mmt-white-blur'>
				{/* <Container className='h-100 position-relative'>
					<div className='mmt-paper-heading'>
						<Fade bottom>
							<h1 className='font-300 font-xl white mb-0'>Let’s discuss about your project</h1>
						</Fade>
						<Fade bottom>
							<p className='pt-2 font-300  white mb-0'>
								Interest and question can pop up at anytime! Mail or call us and we'll connect to
								you at the earliest.
							</p>
						</Fade>
						<Fade buttom>
							<div className='d-flex justify-content-start align-items-center w-100'>
								<MailTo
									mailClassName='pt-2 mmt-mail-text text-start font-300 font-16 white'
									label='hello@magicminds.io'
									mailto='mailto:hello@magicminds.io'
								/>
							</div>
						</Fade>
					</div>
				</Container> */} 
			</div>
		</div>
	);
};

export default ContactUsBanner;
