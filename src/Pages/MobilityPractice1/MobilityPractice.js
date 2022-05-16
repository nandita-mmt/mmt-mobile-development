import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './MobilityPractice.scss';

const DigitalAcceleration = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>360 Digital Marketing Services and Beyond | Magicmind Technologies</title>
				<meta name="description" content="Take the digital leap with MMT 360 digital marketing services spanning across the U.S., India, UK and Canada. Contact us today for bespoke solutions and creatively-led strategies." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default DigitalAcceleration;