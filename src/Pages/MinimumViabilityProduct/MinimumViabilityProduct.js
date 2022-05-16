import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './MinimumViabilityProduct.scss';

const MinimumViabilityProduct = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Think MVP Software Development? | Think Magicmind</title>
				<meta name="description" content="MMT offers best in-class MVP software development services across USA, India, Canada, and UK. From innovative start-ups to industry giants. We got your back." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default MinimumViabilityProduct;