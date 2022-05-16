import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './BlockChain.scss';

const BlockChain = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>End-to-End Blockchain Development Company | Magicmind Technologies</title>
				<meta name="description" content="Magicmind Technologies Blockchain Development Company offers end-to-end blockchain services and builds distributed systems for companies across USA, India, UK, and Canada." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default BlockChain;