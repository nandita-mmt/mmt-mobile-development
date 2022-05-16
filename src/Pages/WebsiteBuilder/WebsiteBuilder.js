import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './WebsiteBuilder.scss';

const WebsiteBuilder = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>App-etyzer</title>
				<meta name="description" content="" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default WebsiteBuilder;