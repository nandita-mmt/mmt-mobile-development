
import React from 'react';
import { NavLink } from 'react-router-dom';

import './HomeProducts.scss';
import P01 from "../../Assets/Images/Home/01.png";
import P02 from "../../Assets/Images/Home/02.png";
import P03 from "../../Assets/Images/Home/03.png";




const HomeProducts = () => {

	return (
		<section className="products">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7 heading text-center">
                        <h2>Products</h2>
                        <p><strong>Futuristic products for Future-ready businesses</strong></p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-10 col-12">
                        <div className="section text-center">
                            <div className="image">
                                <img src={P01} alt="" className="img-fluid"/>
                            </div>
                            <h4>Appetyzer</h4>
                            <p>Restaurant Management Software</p>
                            <NavLink to="/restaurant-management-software">Explore now</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 col-12">
                        <div className="section text-center">
                            <div className="image">
                                <img src={P02}  alt="" className="img-fluid"/>
                            </div>
                            <h4>Website Builder</h4>
                            <p>Drag and drop website builder</p>
                            <NavLink to="/drag-and-drop-website-builder">Explore now</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 col-12">
                        <div className="section text-center">
                            <div className="image">
                                <img src={P03} alt="" className="img-fluid"/>
                            </div>
                            <h4>Ecommerce Marketplace</h4>
                            <p>Online marketplace</p>
                            <NavLink to="/ecommerce-platform">Explore now</NavLink>
                        </div>
                    </div>
                </div>			
            </div>
        </section>
	);
};
export default HomeProducts;