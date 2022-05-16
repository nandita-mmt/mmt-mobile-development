import React from 'react';
import InnovationLabBanner from './InnovationLabBanner/InnovationLabBanner';
import InnovationLabCards from './InnovationLabCards/InnovationLabCards';

import './InnovationLab.scss';

const InnovationLab = () => {
	return (
		<div className='InnovationLab'>
			<InnovationLabBanner />
			<InnovationLabCards />
		</div>
	);
};
export default InnovationLab;
