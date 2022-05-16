import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './CloudManagementService.scss';

const CloudManagementService = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Data Transformation on Cloud | Managed Services and Solutions</title>
				<meta name="description" content="Meet your business challenges head on with simplified cloud data management services spanned across U.S.A, India, Canada, and UK. Modernize your data management culture with MMT" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default CloudManagementService;