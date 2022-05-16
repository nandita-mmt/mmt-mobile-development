import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

import './WhyChooseUs.scss';

const WhyChooseUs = () => {
    return (
        <>
            <Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>WHY CHOOSE US?</h2>
						</Fade>
						<Fade bottom>
							<p className='font-700 mt-1 mb-4'>You reach out to MagicMinds when...</p>
							<p className='font-700 mt-1 mb-4'>You actually want results......fast...</p>
							<p className='font-300 mt-1 mb-4'>If you're looking for high quality with quick turnaround times, get ready to fall in love with our Agile Software Development strategies.</p>
							<p className='font-700 mt-1 mb-4'>You want a "Beyond Outstanding" User-Experience for your audience...</p>
							<p className='font-300 mt-1 mb-4'>We employ the state-of-the-art technology, supreme quality designs and creatively-led User-Experience strategies·</p>
							<p className='font-700 mt-1 mb-4'>You want it done right...</p>
							<p className='font-300 mt-1 mb-4'>Trust our experts and allow them to transform your idea into an engineered reality. THE RIGHT WAY!</p>
							<p className='font-700 mt-1 mb-4'>You want to dominate the market...</p>
							<p className='font-700 mt-1 mb-4'>Is dominating the marketplace your ultimate goal? We love your bold visions and are going to give them shape...</p>
							<p className='font-700 mt-1 mb-4'>You want Thought Leadership...</p>
							<p className='font-300 mt-1 mb-4'>We are tinkerers and thinkers. We are rebels that take joy in thinking outside the box. We question the status quo. If that's you, you're going to love working with us...</p>
							<p className='font-700 mt-1 mb-4'>You want to transform the world for the better...</p>
							<p className='font-300 mt-1 mb-4'>We love working with companies that dream to change the world. Let's join forces and make a dent in the universe...</p>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default WhyChooseUs;