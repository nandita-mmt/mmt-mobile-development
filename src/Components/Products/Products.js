import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Tab, Nav, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';

import './Products.scss';

const Products = () => {
    return (
        <>
            <Container className='mmt-papercard-container w-100 h-100 mt-5 '>
                <Row className='card-fill align-items-center justify-content-center pt-5 pb-4'>
                    <Col md lg={11}>
                        <Fade bottom>
                            <h2 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>Products</h2>
                        </Fade>
                        <Fade bottom>
                            <p className='font-700 text-start mt-4 mb-0'>Appetyzer</p>
                            <p className='font-300 text-start mt-0'>Kickstart your restaurant business and manage your operations efficiently with Appetyzer restaurant management software</p>
                            <NavLink exact className='customNavLink' to={'/restaurant-management-software'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                            </NavLink>

                            <p className='font-700 text-start mt-4 mb-0'>Ecommerce Marketplace</p>
                            <p className='font-300 text-start mt-0'>Get your services online or start an online marketplace and welcome other sellers in the online world - the future of the marketplace with E-commerce Platform</p>
                            <NavLink exact className='customNavLink' to={'/ecommerce-platform'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                            </NavLink>

                            <p className='font-700 text-start mt-4 mb-0'>Website Builder</p>
                            <p className='font-300 text-start mt-0'>Get an edge over your competitors with the freedom to create, design, and develop futuristic websites with our drag and drop website builder in no time without any code.</p>
                            <NavLink exact className='customNavLink' to={'/drag-and-drop-website-builder'}>
                                <Button className='btn btn-green px-5 py-2 font-600 w-40'>Know More</Button>
                            </NavLink>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Products;