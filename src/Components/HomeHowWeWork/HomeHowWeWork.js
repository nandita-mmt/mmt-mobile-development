
import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

import './HomeHowWeWork.scss';
import CIRCLEONE from "../../Assets/Images/Home/circle.65b1f27e.svg";
import CIRCLETWO from "../../Assets/Images/Home/second-path.a75a0aeb.svg";
import CIRCLETHREE from "../../Assets/Images/Home/third-path.8ec999d4.svg";
import CIRCLEFOUR from "../../Assets/Images/Home/fourth-path.65966288.svg";
import VISIONICON from "../../Assets/Images/Home/vision-icon.png";





const HomeHowWeWork = () => {
    var settings = {
        dots: true,
        vertical: true,
        centerMode: true,
        // infinite: true,
        // loop: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 9000,
    }
	return (
		<section className="how-it-works">

            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    
                    <div className="col-lg-4 heading text-center" style={{position: "relative"}}>
                        <div className="spiner">
                        <img src={CIRCLEONE} alt="" className="one"/>
                        <img src={CIRCLETWO} alt="" className="two"/>
                        <img src={CIRCLETHREE} alt="" className="three"/>
                        <img src={CIRCLEFOUR} alt="" className="four"/>
                    </div>
                        <h2>How We Work</h2>
                        <p><strong>We Set Trends in Industry</strong></p>
                        <p>We strategize, design, and develop outstanding digital solutions.The Workflow for Success</p>
                    </div>
                    <div className="col-lg-7 pl-0">
                        <Slider {...settings}>
                            <div>
                                <div className="sec">
                                    <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                    <div className="text">
                                        <h3>The Vision</h3>
                                        <p>We work as one team with our partners to organize, plan, and draw up each phase of your project carefully so that we can proudly create products that people will love.</p>
                                        <NavLink to="">Explore now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="sec">
                                    <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                    <div className="text">
                                        <h3>Strategy & Discovery</h3>
                                        <p>No successful product is created without proper research. We dig into both the competitive and the technological landscape to make sure that your app is cutting-edge on every front.</p>
                                        <NavLink to="">Explore now</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className="sec">
                                <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                <div className="text">
                                    <h3>Development</h3>
                                    <p>Our magicians analyze, collect, and set all the pieces of the puzzle and start the work to give life to your dream project.</p>
                                    <NavLink to="">Explore now</NavLink>
                                </div>
                            </div>
                            </div>
                            <div >
                                <div className="sec">
                                <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                <div className="text">
                                    <h3>Testing</h3>
                                    <p>We run continuous tests throughout the development phase of the project to ensure that only the highest quality is delivered for your final product and to give a picture-perfect smooth finish.</p>
                                    <NavLink to="">Explore now</NavLink>
                                </div>
                            </div>
                            </div>
                            <div >
                                <div className="sec">
                                <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                <div className="text">
                                    <h3>Delivery</h3>
                                    <p>Voila! After the careful development phase, it is showtime. Your project is ready to be delivered and open for revisions if any.</p>
                                    <NavLink to="">Explore now</NavLink>
                                </div>
                            </div>
                            </div>
                            <div >
                                <div className="sec">
                                <div className="icon"><span><img src={VISIONICON} alt=""/></span></div>
                                <div className="text">
                                    <h3>Building For Growth</h3>
                                    <p>We are not done yet. Once your app launches, we’re here to support you with post-release app maintenance and improvement so that the number of happy users continues to grow.</p>
                                    <NavLink to="">Explore now</NavLink>
                                </div>
                            </div>
                            </div>
                        </Slider>
                        
                        
                    </div>
                </div>			
            </div>
        </section>
	);
};
export default HomeHowWeWork;