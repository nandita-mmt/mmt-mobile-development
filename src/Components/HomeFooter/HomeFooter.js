
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeFooter.scss';
import MAPICON from "../../Assets/Images/Home/map-icon.png";
import MAP from "../../Assets/Images/Home/map.png";
import PHONEICON from "../../Assets/Images/Home/phone-icon.png";
import EMAILICON from "../../Assets/Images/Home/email-icon.png";
import CT01 from "../../Assets/Images/Home/ct-01.png";
import CT02 from "../../Assets/Images/Home/ct-02.png";
import CT03 from "../../Assets/Images/Home/ct-03.png";
import CT04 from "../../Assets/Images/Home/ct-04.png";
import CT05 from "../../Assets/Images/Home/ct-05.png";
import CT06 from "../../Assets/Images/Home/ct-06.png";
import FBICON from "../../Assets/Images/Home/fb-icon.png";
import TWITTERICON from "../../Assets/Images/Home/twitter-icon.png";
import YOUTUBEICON from "../../Assets/Images/Home/youtube-icon.png";
import LINKDINICON from "../../Assets/Images/Home/linkdin-icon.png";
import INSICON from "../../Assets/Images/Home/ins-icon.png";



const HomeFooter = () => {

	return (
		<footer>
            <div class="office">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 heading text-center">
                            <h2>Our Offices</h2>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6 text-lg-lext text-center">
                            <img src={MAP} alt="" class="img-fluid"/>
                        </div>
                        <div class="col-lg-6 address">
                            <div class="india">
                                <h4>India</h4>
                                <ul>
                                    <li><span><img src={MAPICON} alt=""/></span><p>Ambuja Ecostation Business Tower BP 7, Unit No: 601 6th Floor <br/>Street Number 9 , BP Block, Sector V, Kolkata, West Bengal 700091</p></li>
                                    <li><span><img src={PHONEICON} alt=""/></span><a href="tel:919903987999">+91 9903987999</a></li>
                                    <li><span><img src={EMAILICON} alt=""/></span><a href="mailto:hello@magicminds.io">hello@magicminds.io</a></li>
                                </ul>
                            </div>
                            <div class="india">
                                <h4>USA (HQ)</h4>
                                <ul>
                                    <li><span><img src={MAPICON} alt=""/></span><p>1526 Loma Ave long Beach, Ca, 90804, Us</p></li>
                                    <li><a href="tel:+18559624420"><span><img src={PHONEICON} alt=""/></span>+18 559624420</a></li>
                                </ul>
                            </div>
                            <div class="d-flex align-items-center justify-content-start">
                                <div class="india">
                                    <h4>UK</h4>
                                    <ul>
                                        <li><a href="tel:+448000119644"><span><img src={PHONEICON} alt=""/></span>44 8000119644</a></li>
                                    </ul>
                                </div>
                                <div class="india">
                                    <h4>CAN</h4>
                                    <ul>
                                        <li><a href="tel:+18559624420"><span><img src={PHONEICON} alt=""/></span>+18 559624420</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="certified">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><NavLink to="/about-us">About Us</NavLink></li>
                                <li><NavLink to="/careers">Career</NavLink></li>
                                <li><NavLink to="/">Case Study</NavLink></li>
                                <li><NavLink to="/white-paper">White Paper</NavLink></li>
                                <li><NavLink to="/faqs">FAQ</NavLink></li>
                                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink to="/mobile-app-development-services">Mobile Application Service</NavLink></li>
                                <li><NavLink to="/web-development-services">Website Development service</NavLink></li>
                                <li><NavLink to="/digital-marketing-services">Digital Marketing service</NavLink></li>
                                <li><NavLink to="/graphics-design-services">Graphic Design</NavLink></li>
                                <li><NavLink to="/">CRM</NavLink></li>
                                <li><NavLink to="/">Software Development</NavLink></li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <h4>Certified</h4>
                            <ul class="d-flex flex-wrap certified-logo">
                                <li><img src={CT01} alt=""/></li>
                                <li><img src={CT02} alt=""/></li>
                                <li><img src={CT03} alt=""/></li>
                                <li><img src={CT04} alt=""/></li>
                                <li><img src={CT05} alt=""/></li>
                                <li><img src={CT06} alt=""/></li>
                            </ul>
                        </div>
                        <div class="col-lg-12 text-center terms ">
                            <ul class="d-flex flex-wrap justify-content-center align-items-center">
                                <li><NavLink to="">Privacy Policy</NavLink></li>
                                <li><NavLink to="">Terms Conditions</NavLink></li>
                            </ul>						
                        </div>
                        <div class="col-lg-12 text-center social">
                            <ul class="d-flex justify-content-center align-items-center">
                                <li>
                                    <a 
                                    href='https://www.facebook.com/magicmindtechnologies'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <img src={FBICON} alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                    href='https://twitter.com/MAGICMINDTECHN1' target='_blank' 
                                    rel='noreferrer'>
                                        <img src={TWITTERICON} alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                    href='https://www.youtube.com/channel/UCEdhM1GaLV6-5sTAKLYmK0Q'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <img src={YOUTUBEICON} alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                    href='https://www.linkedin.com/company/magicmind-technologies'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <img src={LINKDINICON} alt=""/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                    href='https://www.instagram.com/magicmindtechnologies/'
                                    target='_blank'
                                    rel='noreferrer'>
                                        <img src={INSICON} alt=""/>
                                    </a>
                                </li>
                            </ul>						
                        </div>
                        <div class="col-lg-12 copy text-center">
                            <p>Copyright &copy; 2022 Magicmind Technologies.com | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
	);
};
export default HomeFooter;