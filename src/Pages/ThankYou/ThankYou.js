import React from 'react';
import { NavLink } from 'react-router-dom';

import './ThankYou.scss';
import ReactGA from "react-ga4";

const ThankYou = () => {
    
    ReactGA.initialize("AW-10895488614");
    ReactGA.event({
        category: "conversion",
        action: {'send_to': 'AW-10895488614/WYxlCIW7-bkDEObsr8so'},
    });   
	return (<div className="default-page-template">
                <div className="container-fluid full-content-thank-you">
                    {/* <div className="row">
                        <div className="col-md-12">
                            <a href=""><img src="logo.png" alt="" className="thanku_logo"/></a>
                        </div>
                    </div> */}
                    <div className="justify-content-center thank_you">
                    
                        <div className="col-12">
                            <h1>Thank You !</h1>
                        
                        <div className="transition_id">
                            <p><strong>Thank you for registering for this session</strong></p>
                        </div>
                        <div className="thanku_dec">
                            <p>Woohoo! Magicmind Technologies has received your message. Now cut the stress, sit back and relax, as our team will be
                                connecting to you shortly with an incredible plan.</p>
                        </div>
                        <div className="other_details">
                            <ul>
                                <li>
                                    {/* <img src="images/thanku-phone-icon.png" alt=""/>  */}
                                    <div>
                                        <p>Support Helpdesk Number is :</p>
                                        <a href="tel:+919903987999">+91 9903987999</a>
                                    </div> 
                                </li>
                                <li>
                                    {/* <img src="images/thanku-email-icon.png" alt=""/> */}
                                    <div>
                                        <p>Support Email is :</p>
                                        <a href="mailto:hello@magicminds.io">hello@magicminds.io</a>
                                    </div>
                                </li>
                            </ul>
                            <NavLink className="b-to-home" to={'/'}>Back to home</NavLink>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>)
};
export default ThankYou;