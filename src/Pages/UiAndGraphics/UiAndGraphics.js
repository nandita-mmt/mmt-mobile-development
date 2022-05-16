import React from 'react';
import {Helmet} from "react-helmet";

import Banner from './Banner/Banner';
import Main from './Main/Main';

import './UiAndGraphics.scss';

const UiAndGraphics = () => {
	return (
		<div className="default-page-template">
			<Helmet>
				<title>Creative UI and Graphic Design Company | Magicmind Technologies</title>
				<meta name="description" content="Magicmind Technologies - The most creative UI/UX Design Company offering an extensive array of UI/UX and graphic design services to companies across USA, India, UK, and Canada." />
			</Helmet>
			<Banner />
			<Main />
		</div>
	);
};
export default UiAndGraphics;