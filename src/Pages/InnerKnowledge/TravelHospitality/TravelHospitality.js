import React from 'react';
import TravelHospitalityBanner from './TravelHospitalityBanner/TravelHospitalityBanner';
import TravelHospitalityCards from './TravelHospitalityCards/TravelHospitalityCards';

const TravelHospitality = () => {
	return (
		<div className='TravelHospitality'>
			<TravelHospitalityBanner />
			<TravelHospitalityCards />
		</div>
	);
};
export default TravelHospitality;
