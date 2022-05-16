import React from 'react';
import DigitalAccelerationBanner from './DigitalAccelerationBanner/DigitalAccelerationBanner';
import DigitalAccelerationCards from './DigitalAccelerationCards/DigitalAccelerationCards';

import './DigitalAcceleration.scss';

const DigitalAcceleration = () => {
	return (
		<div className='DigitalAcceleration'>
			<DigitalAccelerationBanner />
			<DigitalAccelerationCards />
		</div>
	);
};
export default DigitalAcceleration;
