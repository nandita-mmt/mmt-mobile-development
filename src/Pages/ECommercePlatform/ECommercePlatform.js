import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './ECommercePlatform.scss';

const ECommercePlatform = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title></title>
				<meta name="description" content="" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default ECommercePlatform;