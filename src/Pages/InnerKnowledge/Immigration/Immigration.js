import React from 'react';
import ImmigrationBanner from './ImmigrationBanner/ImmigrationBanner';
import ImmigrationCards from './ImmigrationCards/ImmigrationCards';

const Immigration = () => {
	return (
		<div className='Immigration'>
			<ImmigrationBanner />
			<ImmigrationCards />
		</div>
	);
};
export default Immigration;
