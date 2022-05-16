import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './MobilityPractice.scss';

const MobilityPractice = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Custom Mobile App Development Services | Magicmind Technologies</title>
				<meta name="description" content="Magicmind Technologies - Agile, reliable and next-gen mobile app development company. We offer tailor-made mobile app development services across USA, India, UK, and Canada." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default MobilityPractice;