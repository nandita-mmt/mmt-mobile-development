
import React from 'react';
import { NavLink } from 'react-router-dom';
import './DigitalTransformation.scss';

const DigitalTransformation = () => {

	return (
		<section className="empowering-digital">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-end empowering-digital-leftdiv">
                        <div className="empowering-digital-leftdiv-inner">
                            <h2>EMPOWERING <strong>DIGITAL TRANSFORMATION</strong> WITH HOLISTIC <strong>INNOVATION</strong></h2>
                            <NavLink to="" className="begin-the-magic-button">Begin the magic</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column empowering-digital-rightdiv">
                            <h3 className="emp-dgt-rightdiv-heading">Our innovation strategies decode complex business challenges and directly translate into superior results for you.	</h3>
                            <p>
                                Relentless pursuit of developing unconventional digital solutions by combining disruptive technologies, creativity, engineered innovation and bespoke strategies to translate your investment into scalable evolution.
                            </p>
                            <p>
                                Built on the foundation of creativity, innovation, and technology, we take delight in creating magic and performing digital wonders. We design creative strategies to build a brand or transform an existing one. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};
export default DigitalTransformation;