import React from 'react';
import HealthCareBanner from './HealthCareBanner/HealthCareBanner';
import HealthCareCards from './HealthCareCards/HealthCareCards';

const HealthCare = () => {
	return (
		<div className='HealthCare'>
			<HealthCareBanner />
			<HealthCareCards />
		</div>
	);
};
export default HealthCare;
