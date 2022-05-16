
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeIndustries.scss';
import I01 from "../../Assets/Images/Home/i-01.jpg";
import I02 from "../../Assets/Images/Home/i-02.jpg";
import I03 from "../../Assets/Images/Home/i-03.jpg";
import I04 from "../../Assets/Images/Home/i-04.jpg";
import I05 from "../../Assets/Images/Home/i-05.jpg";
import I06 from "../../Assets/Images/Home/i-06.jpg";
import I07 from "../../Assets/Images/Home/i-07.jpg";
import I08 from "../../Assets/Images/Home/i-08.jpg";




const HomeIndustries = () => {

	return (
		<section className="industry">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 heading text-center">
                        <h2>Industries</h2>
                        <p><strong>Admirable Innovation + Disruptive technology<br/>=</strong></p>
                        <h3>Digital Transformation</h3>
                        <p>We help industries from different verticals embrace digital transformation by blending admirable innovations with disruptive technology and strategic marketing services</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I01} alt="" className="img-fluid"/>
                            <h4>Legal</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I02} alt="" className="img-fluid"/>
                            <h4>Astrology</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I03} alt="" className="img-fluid"/>
                            <h4>Real-Estate</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I04} alt="" className="img-fluid"/>
                            <h4>Finance and <br/>Banking</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I05} alt="" className="img-fluid"/>
                            <h4>Health and <br/>Wellness</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I06} alt="" className="img-fluid"/>
                            <h4>Travel and Hospitality </h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I07} alt="" className="img-fluid"/>
                            <h4>Restaurant & Food <br/>Service</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10">
                        <div className="section">
                            <img src={I08} alt="" className="img-fluid"/>
                            <h4>Education & eLearning</h4>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <NavLink to='/industries'>View more</NavLink>
                    </div>
                </div>			
            </div>
        </section>
	);
};
export default HomeIndustries;