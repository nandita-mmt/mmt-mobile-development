
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeServices.scss';
import ARROW from "../../Assets/Images/Home/arrow.png";

import WEBDEVNORMAL from '../../Assets/Images/Home/web-development-normal.png';
import WEBDEVHOVER from '../../Assets/Images/Home/web-development-hover.png';
import MOBILEAPPDEVNORMAL from "../../Assets/Images/Home/mobile-app-development-normal.png";
import MOBILEAPPDEVHOVER from "../../Assets/Images/Home/mobile-app-development-hover.png";
import DIGITALMARKETINGNORMAL from "../../Assets/Images/Home/digital-marketing-normal.png";
import DIGITALMARKETINGHOVER from "../../Assets/Images/Home/digital-marketing-hover.png";
import MVPDEVNORMAL from "../../Assets/Images/Home/mvp-development-normal.png";
import MVPDEVHOVER from "../../Assets/Images/Home/mvp-development-hover.png";
import CLONEAPPNORMAL from "../../Assets/Images/Home/clone-app-normal.png";
import CLONEAPPHOVER from "../../Assets/Images/Home/clone-app-hover.png";
import QASERVICENORMAL from "../../Assets/Images/Home/qa-services-normal.png";
import QASERVICEHOVER from "../../Assets/Images/Home/qa-services-hover.png";
import CLOUDSERVICENORMAL from "../../Assets/Images/Home/cloud-managed-services-normal.png";
import CLOUDSERVICEHOVER from "../../Assets/Images/Home/cloud-managed-services-hover.png";
import DIGITALTRANSFORMNORMAL from "../../Assets/Images/Home/digital-transformation-normal.png";
import DIGITALTRANSFORMHOVER from "../../Assets/Images/Home/digital-transformation-hover.png";
import BLOCKCHAINDEVNORMAL from "../../Assets/Images/Home/blockchain-development-normal.png";
import BLOCKCHAINDEVHOVER from "../../Assets/Images/Home/blockchain-development-hover.png";
import UINORMAL from "../../Assets/Images/Home/ui-and-graphics-normal.png";
import UIHOVER from "../../Assets/Images/Home/ui-and-graphics-hover.png";




const HomeServices = () => {

	return (
		<section className="services">
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-7 heading text-center">
					<h2>Our Services</h2>
					<p><strong>We bring an array of Digital Solutions to the rescue</strong></p>
					<p>Since our inception, we offer innovative strategies and solutions and leave no stone 
unturned to provide you with a wide array of services.</p>
				</div>
				
			</div>
			<div className="row">
					<div className="col-lg-12">
						<ul className="d-flex align-items-center justify-content-between flex-wrap">
							<li>
                                <NavLink exact className='customNavLink' to={'/web-development-services'}>
									<span>
										<img src={WEBDEVNORMAL} alt=""/>
										<img src={WEBDEVHOVER} alt="" className="hover"/>
									</span>
									<h4>Web <br/>Development</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/mobile-app-development-services'}>
									<span>
										<img src={MOBILEAPPDEVNORMAL} alt=""/>
										<img src={MOBILEAPPDEVHOVER} alt="" className="hover"/>
									</span>
									<h4>Mobile Application <br/>Development</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/digital-marketing-services'}>
									<span>
										<img src={DIGITALMARKETINGNORMAL} alt=""/>
										<img src={DIGITALMARKETINGHOVER} alt="" className="hover"/>
									</span>
									<h4>Digital <br/>Marketing</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/mvp-minimum-viability-product'}>
									<span>
										<img src={MVPDEVNORMAL} alt=""/>
										<img src={MVPDEVHOVER} alt="" className="hover"/>
									</span>
									<h4>MVP <br/>Development</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/clone-app-development-services'}>
									<span>
										<img src={CLONEAPPNORMAL} alt=""/>
										<img src={CLONEAPPHOVER} alt="" className="hover"/>
									</span>
									<h4>Clone App <br/>Development</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/software-testing-services'}>
									<span>
										<img src={QASERVICENORMAL} alt=""/>
										<img src={QASERVICEHOVER} alt="" className="hover"/>
									</span>
									<h4>QA <br/>Services</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/cloud-management-services'}>
									<span>
										<img src={CLOUDSERVICENORMAL} alt=""/>
										<img src={CLOUDSERVICEHOVER} alt="" className="hover"/>
									</span>
									<h4>Cloud Managed <br/>Services</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/digital-transformation-services'}>
									<span>
										<img src={DIGITALTRANSFORMNORMAL} alt=""/>
										<img src={DIGITALTRANSFORMHOVER} alt="" className="hover"/>
									</span>
									<h4>Digital <br/>Transformation</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/blockchain-development-services'}>
									<span>
										<img src={BLOCKCHAINDEVNORMAL} alt=""/>
										<img src={BLOCKCHAINDEVHOVER} alt="" className="hover"/>
									</span>
									<h4>Blockchain <br/>Development</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
							<li>
                                <NavLink exact className='customNavLink' to={'/graphics-design-services'}>
									<span><img src={UINORMAL} alt=""/>
									<img src={UIHOVER} alt="" className="hover"/></span>
									<h4>UI and <br/>Graphics</h4>
									<div className="arrow"><img src={ARROW} alt=""/></div>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
		</div>
	</section>
	);
};
export default HomeServices;