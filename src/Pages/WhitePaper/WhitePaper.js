import React from 'react';
import PaperBanner from './PaperBanner/PaperBanner';
import PaperCards from './PaperCards/PaperCards';

import './WhitePaper.scss';

const WhitePaper = () => {
	return (
		<div className='WhitePaper'>
			<PaperBanner />
			<PaperCards />
		</div>
	);
};
export default WhitePaper;
