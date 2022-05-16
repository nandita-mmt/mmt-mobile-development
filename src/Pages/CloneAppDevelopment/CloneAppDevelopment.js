import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './CloneAppDevelopment.scss';

const AppEtyzer = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Readymade Clone App Development Company | Magicmind Technologies</title>
				<meta name="description" content="MMT is a leading Clone App Development Company in USA, India, Canada and UK. Get dynamic and ready-made clone application solutions of popular apps for your business. Know More!" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default AppEtyzer;