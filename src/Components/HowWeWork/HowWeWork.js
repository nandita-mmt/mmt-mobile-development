import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

import './HowWeWork.scss';

const HowWeWork = () => {
    return (
        <>
            <Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={11}>
						<Fade bottom>
							<h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>How We Work</h2>
                            <h4 className='mmt-web-resp-txt font-300 text-center mt-3 mb-0'>We Set Trends in Industry Subline - We strategize, design, and develop outstanding digital solutions.</h4>
                            <h4 className='mmt-web-resp-txt font-700 text-center mt-3 mb-0'>The Workflow for Success</h4>
						</Fade>
						<Fade bottom>
							<p className='font-700 mt-1 mb-4 mb-0'>The Vision</p>
							<p className='font-300 mt-1 mb-4 mt-0'>We don't get started right away.  We work as one team with our partners to organize, plan, and draw up each phase of your project carefully so that we can proudly create products that people will love.</p>
							<p className='font-700 mt-1 mb-4 mb-0'>Strategy &amp; Discovery</p>
							<p className='font-300 mt-1 mb-4 mt-0'>No successful product is created without proper research. We dig into both the competitive and the technological landscape to make sure that your app is cutting-edge on every front.</p>
							<p className='font-700 mt-1 mb-4 mb-0'>Development</p>
							<p className='font-300 mt-1 mb-4 mt-0'>Our magicians analyze, collect, and set all the pieces of the puzzle and start the work to give life to your dream project.</p>
							<p className='font-700 mt-1 mb-4 mb-0'>Testing</p>
							<p className='font-300 mt-1 mb-4 mt-0'>We run continuous tests throughout the development phase of the project to ensure that only the highest quality is delivered for your final product and to give a picture-perfect smooth finish.</p>
							<p className='font-700 mt-1 mb-4 mb-0'>Delivery</p>
							<p className='font-300 mt-1 mb-4 mt-0'>Voila! After the careful development phase, it is showtime. Your project is ready to be delivered and open for revisions if any.</p>
							<p className='font-700 mt-1 mb-4 mb-0'>Building For Growth</p>
							<p className='font-300 mt-1 mb-4 mt-0'>We are not done yet. Once your app launches, we're here to support you with post-release app maintenance and improvement so that the number of happy users continues to grow.</p>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HowWeWork;