
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeOurClient.scss';
import C01 from "../../Assets/Images/Home/c-01.jpg";
import C02 from "../../Assets/Images/Home/c-02.jpg";
import C03 from "../../Assets/Images/Home/c-03.jpg";
import C04 from "../../Assets/Images/Home/c-04.jpg";
import C05 from "../../Assets/Images/Home/c-05.jpg";
import C06 from "../../Assets/Images/Home/c-06.jpg";




const HomeOurClient = () => {

	return (
		<section className="clients">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-2 order-3">
                        <NavLink to="" className="logo">
                            <img src={C01} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-3 order-2">
                        <NavLink to="" className="logo">
                            <img src={C02} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-1 order-7 text-lg-start text-center">
                        <div className="heading">
                            <h2>Our Clientelle</h2>
                            <p>Take a look at our clientele base to understand the expanse of our work.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-4 order-4">
                        <NavLink to="" className="logo">
                            <img src={C03} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-5 order-5">
                        <NavLink to="" className="logo">
                            <img src={C04} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-6 order-6">
                        <NavLink to="" className="logo">
                            <img src={C05} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-10 col-10 order-lg-7 order-7">
                        <NavLink to="" className="logo">
                            <img src={C06} alt="" className="img-fluid"/>
                        </NavLink>
                    </div>
                </div>			
            </div>
        </section>
	);
};
export default HomeOurClient;