
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeFeatureProduct.scss';
// import FP01 from "../../Assets/Images/Home/fp-01.jpg";
// import FP02 from "../../Assets/Images/Home/fp-02.jpg";
// import FP03 from "../../Assets/Images/Home/fp-03.jpg";
import MultiCarousel from '../MultiCarousel/MultiCarousel';



const HomeFeatureProduct = () => {

	return (
        <React.Fragment>
            <section className="projects">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-8 heading text-center">
                            <h2>Featured Projects</h2>
                            <p>The perfect combination of bullet-proof strategy, category-defining creativity, and 
        impeccable execution. Learn more about how Magicmind Technologies Limited helps ambitious organizations move at the speed of culture.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <MultiCarousel/>
                        {/* <div className="col-lg-4 col-md-4 col-sm-8 col-9">
                            <div className="section">
                                <img src={FP01} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-8 col-9">
                            <div className="section">
                                <img src={FP02} alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-8 col-9">
                            <div className="section">
                                <img src={FP03} alt="" className="img-fluid"/>
                            </div>
                        </div> */}
                    </div>		
                </div>
            </section>
            <section className="call-to-action">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-10 col-md-9 text-lg-start text-md-start text-center">
                            <h2>LET'S BUILD SOMETHING GREAT!</h2>
                            <p>Ready to turn your idea into an engineered masterpiece?</p>
                        </div>
                        <div className="col-lg-2 col-md-3 text-lg-left text-md-left text-center">
                            <NavLink to="" className="explore">Explore now
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="142.725px" height="144.667px" viewBox="0 0 142.725 144.667" enableBackground="new 0 0 142.725 144.667"><path fill="#19b3a5" d="M3.6850000000000023,73.25a68.25,68.25 0 1,0 136.5,0a68.25,68.25 0 1,0 -136.5,0"></path></svg>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
            </section>
    </React.Fragment>
	);
};
export default HomeFeatureProduct;