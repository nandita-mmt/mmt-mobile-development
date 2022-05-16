import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

import './Team.scss';

const Team = () => {
    return (
        <>
            <Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>The Team</h2>
						</Fade>
						<Fade bottom>
							<p className='font-300 mt-1 mb-4 mb-0'>We are the team you've been looking for.</p>
							<p className='font-300 mt-1 mb-4 mt-0'>We are no vendor who just sells the dream and charge a fixed price to create something. We do not sweep things under the carpet.</p>
							<p className='font-300 mt-1 mb-4 mb-0'>We are an enthusiastic and passionate team of magicians that is always ready to create magic by building tech-enabled innovative solutions that could not only grow your business but change the world. We take each project as a mission fueled by enthusiasm and dedication and deliver only the best.</p>
							<p className='font-300 mt-1 mb-4 mt-0'>We're in this together and we want this relationship to last.</p>
                            <NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>Get in Touch</Button>
                            </NavLink>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mt-5 mb-0'>Our Work</h2>
							<p className='font-300 mt-1 mb-4 mb-0'>You can see the future. We'll help you get there. Check out some of the journeys we've taken, and the destinations reached. Take a look at our services and portfolio to learn more about the expanse of our work. It sure will be worth your time!</p>
							<h2 className='mmt-web-resp-txt font-xl font-200 mb-4'>Contact Us</h2>
                            <NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>TALK WITH US TODAY</Button>
                            </NavLink>
							<p className='font-300 mt-1 mb-0 mt-4'>We're glad you found us and hope we can help!</p>
							<p className='font-300 mt-1 mb-0 mb-0'>LET'S BUILD SOMETHING GREAT!</p>
							<p className='font-300 mt-1 mb-4 mt-0'>If you have a great idea, we are ready for you! Contact us and let's build your next big thing.</p>
                            <NavLink exact className='customNavLink' to={'/contact-us/#contact-form'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>GET IN TOUCH</Button>
                            </NavLink>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Team;