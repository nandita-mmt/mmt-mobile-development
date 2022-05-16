import React from 'react';
import FeatureProjectBanner from './FeatureProjectBanner/FeatureProjectBanner';
import FeatureProjectCards from './FeatureProjectCards/FeatureProjectCards';

import './FeatureProject.scss';

const FeatureProject = () => {
	return (
		<div className='FeatureProject'>
			<FeatureProjectBanner />
			<FeatureProjectCards />
		</div>
	);
};
export default FeatureProject;
