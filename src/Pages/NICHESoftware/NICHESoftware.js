import React from 'react';
import NICHESoftwareBanner from './NICHESoftwareBanner/NICHESoftwareBanner';
import NICHESoftwareCards from './NICHESoftwareCards/NICHESoftwareCards';

import './NICHESoftware.scss';

const NICHESoftware = () => {
	return (
		<div className='NICHESoftware'>
			<NICHESoftwareBanner />
			<NICHESoftwareCards />
		</div>
	);
};
export default NICHESoftware;
