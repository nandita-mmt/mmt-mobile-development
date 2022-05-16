import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './QaPractice.scss';

const QaPractice = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Dedicated QA | Agile Testing Services</title>
				<meta name="description" content="Magicmind Technologies is a leading QA testing company across USA, India, UK, and Canada offering end-to-end  manual and automated agile testing services, QA consulting & more." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default QaPractice;