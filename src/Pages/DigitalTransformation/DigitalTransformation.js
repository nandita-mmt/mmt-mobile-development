import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './DigitalTransformation.scss';

const DigitalTransformation = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Next-Gen Digital Transformation Services and Solutions</title>
				<meta name="description" content="Thrive in the transformative age and be future-ready with disciplined in agile methods, innovative practices, and disruptive technologies with MMT. USA. India UK. Canada" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default DigitalTransformation;