import React from 'react';
import { NavLink } from 'react-router-dom';

import PATH from '../../Assets/Images/Loader/circle.svg';
import PATH1 from '../../Assets/Images/Loader/second-path.svg';
import PATH2 from '../../Assets/Images/Loader/third-path.svg';
import PATH3 from '../../Assets/Images/Loader/fourth-path.svg';


import './HomeBanner.scss';

const HomeBanner = () => {
	

	return (
		<section className="top-banner">
            <div className="spiner">
                <img src={PATH} alt="" className="one"/>
                <img src={PATH1} alt=""  className="two"/>
                <img src={PATH2} alt="" className="three"/>
                <img src={PATH3} alt="" className="four"/>
            </div>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-10 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-center top-banner-inner">
                        <h1 className="banner-heading">Future of <span>Mobility</span></h1>
                        <p className="banner-description">Creating magic through digital innovation to craft disruptive products and market wonders. <br/>One masterpiece at a time</p>
                        <NavLink to="" className="contact-our-experts-button">Contact our Experts</NavLink>
                    </div>
                </div>
            </div>
	    </section>
	);
};
export default HomeBanner;