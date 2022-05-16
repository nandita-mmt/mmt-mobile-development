import React from 'react';
import RealEstateBanner from './RealEstateBanner/RealEstateBanner';
import RealEstateCards from './RealEstateCards/RealEstateCards';

const RealEstate = () => {
	return (
		<div className='RealEstate'>
			<RealEstateBanner />
			<RealEstateCards />
		</div>
	);
};
export default RealEstate;
