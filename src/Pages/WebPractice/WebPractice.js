import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './WebPractice.scss';

const WebPractice = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Bespoke Web Development Services | Magicmind Technologies</title>
				<meta name="description" content="MMT offers custom web development services across USA, India, UK, and Canada. High-performing, and digitally transformative solutions is just one thought away. Get in touch now" />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default WebPractice;