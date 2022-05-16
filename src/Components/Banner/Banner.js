import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import PATH from '../../Assets/Images/Loader/circle.svg';
import PATH1 from '../../Assets/Images/Loader/second-path.svg';
import PATH2 from '../../Assets/Images/Loader/third-path.svg';
import PATH3 from '../../Assets/Images/Loader/fourth-path.svg';

import Slider from '../Carousel/Carousel';
import BANNERIMG from '../../Assets/Images/Banner/banner-img.webp';
import ARROW from '../../Assets/Images/Banner/banner-bottom-arrow.svg';
// import TypeIt from 'typeit';
import Typewriter from 'typewriter-effect/dist/core';
import Slide01 from '../../Assets/Images/Banner/hero-digital-marketing.jpg';
import Slide02 from '../../Assets/Images/Banner/hero-web-development.jpg';
import Slide03 from '../../Assets/Images/Banner/hero-mobile-development.jpg';

import './Banner.scss';

const Banner = () => {
	const [getSliderIndex, setSliderIndex] = useState(1);
	let slide1TypeWriter;
	let slide2TypeWriter;
	let slide3TypeWriter;
	const totalSlide = 3;
	const pauseTime = 1000;

	useEffect(() => {
		if(getSliderIndex === 1) {
			slider1Effect();
		} else if (getSliderIndex === 2) {
			slider2Effect();
		} else if (getSliderIndex === 3) {
			slider3Effect();
		}
	}, [getSliderIndex]);

	const mouseOverHandler = () => {
		if(slide1TypeWriter) slide1TypeWriter.stop();
		if(slide2TypeWriter) slide2TypeWriter.stop();
		if(slide3TypeWriter) slide3TypeWriter.stop();
	};

	const mouseLeaveHandler = () => {
		if(slide1TypeWriter) slide1TypeWriter.start();
		if(slide2TypeWriter) slide2TypeWriter.start();
		if(slide3TypeWriter) slide3TypeWriter.start();
	};
// humani: digital
// innovate web dev
	const slider2Effect = () => {
		slide1TypeWriter = new Typewriter('#typewriter2', {
			autoStart: false,
			loop: false
		});

		slide1TypeWriter
			.typeString('We <br />')
			.typeString('Innovate')
			.pauseFor(pauseTime)
			.deleteChars(8)
			.typeString('Accelerate')
			.pauseFor(pauseTime)
			.deleteChars(10)
			.typeString('Transform')
			.pauseFor(pauseTime)
			.deleteAll()
			.callFunction(() => {
				setSliderIndex(state => state === totalSlide ? 1 : state + 1);
			})
			.start();
	};

	const slider1Effect = () => {
		slide2TypeWriter = new Typewriter('#typewriter1', {
			autoStart: false,
			loop: false
		});

		slide2TypeWriter
			.typeString('Humanizing <br />')
			.typeString('Brands')
			.pauseFor(pauseTime)
			.deleteChars(6)
			.typeString('Connections')
			.pauseFor(pauseTime)
			.deleteChars(11)
			.typeString('Technology')
			.pauseFor(pauseTime)
			.deleteAll()
			.callFunction(() => {
				setSliderIndex(state => state === totalSlide ? 1 : state + 1);
			})
			.start();
	};

	const slider3Effect = () => {
		slide3TypeWriter = new Typewriter('#typewriter3', {
			autoStart: false,
			loop: false
		});

		slide3TypeWriter
			.typeString('Future-Ready')
			.pauseFor(pauseTime)
			.deleteAll()
			.typeString('Future of mobility')
			.pauseFor(pauseTime)
			.deleteAll()
			.typeString('Futuristic')
			.pauseFor(pauseTime)
			.deleteAll()
			.callFunction(() => {
				setSliderIndex(state => state === totalSlide ? 1 : state + 1);
			})
			.start();
	};

	return (
		<div className='Banner'>
			<Container fluid='md' className='mmt-banner-container position-relative'>
				<div className='mmt-banner-spin'>
					<Image className='mmt-banner-main-path' src={PATH} alt='no-img'></Image>
					<Image className='mmt-banner-second-path' src={PATH1} alt='no-img'></Image>
					<Image className='mmt-banner-third-path' src={PATH2} alt='no-img'></Image>
					<Image className='mmt-banner-fourth-path' src={PATH3} alt='no-img'></Image>
				</div>

				<div id="home-hero">
					<div className={"hero-slider-outer index-1 active-index-" + getSliderIndex}>
						<div className="hero-slider">
							<div className="col-content">
								<h2 id="typewriter1"></h2>
							</div>
							<div className="col-figure">
								<div className="col-figure-inner">
									<div className="figure-shadow"></div>
									<Image className="figure-arrow" src={ARROW} alt='no-img' />
									<Image className="figure" src={Slide01} alt='no-img' />
								</div>
								<div className="cta-wrapper">
									<Link to='/digital-acceleration' onMouseEnter={mouseOverHandler} onMouseOut={mouseLeaveHandler}>Digital Marketing</Link>
								</div>
							</div>
						</div>
					</div>

					<div className={"hero-slider-outer index-2 active-index-" + getSliderIndex}>
						<div className="hero-slider">
							<div className="col-content">
								<h2 id="typewriter2"></h2>
							</div>
							<div className="col-figure">
								<div className="col-figure-inner">
									<div className="figure-shadow"></div>
									<Image className="figure-arrow" src={ARROW} alt='no-img' />
									<Image className="figure" src={Slide02} alt='no-img' />
								</div>
								<div className="cta-wrapper">
									<Link to='/web-practice' onMouseEnter={mouseOverHandler} onMouseOut={mouseLeaveHandler}>Web Development</Link>
								</div>
							</div>
						</div>
					</div>

					<div className={"hero-slider-outer index-3 active-index-" + getSliderIndex}>
						<div className="hero-slider">
							<div className="col-content">
								<h2 id="typewriter3"></h2>
							</div>
							<div className="col-figure">
								<div className="col-figure-inner">
									<div className="figure-shadow"></div>
									<Image className="figure-arrow" src={ARROW} alt='no-img' />
									<Image className="figure" src={Slide03} alt='no-img' />
								</div>
								<div className="cta-wrapper">
									<Link to='/mobility-practice' onMouseEnter={mouseOverHandler} onMouseOut={mouseLeaveHandler}>Mobile App Development</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <Row className='justify-content-center justify-content-lg-between align-items-start align-items-lg-center h-100'>
					<Col lg={4} className='mmt-banner-title mt-5 py-5'>
						<Fade right>
							<h3 className='white mb-0 font-300 text-center font-xl text-lg-start'>
								The <strong className='font-weight-bolder font-900'>MMT</strong>
							</h3>
						</Fade>
						<Fade right>
							<h1 className='white mb-0 font-300 font-xl text-center text-lg-start'>Innovation</h1>
						</Fade>
						<Fade right>
							<h1 className='white font-300 font-xl text-center text-lg-start '>Framework</h1>
						</Fade>
					</Col>
					<Col lg={7} xl={8} className='custom-banner-padding'>
						<Slider />
					</Col>
				</Row> */}
			</Container>
		</div>
	);
};
export default Banner;