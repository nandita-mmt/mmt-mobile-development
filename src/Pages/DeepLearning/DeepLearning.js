import React from 'react';
import DeepLearningBanner from './DeepLearningBanner/DeepLearningBanner';
import DeepLearningCards from './DeepLearningCards/DeepLearningCards';

import './DeepLearning.scss';

const DeepLearning = () => {
	return (
		<div className='DeepLearning'>
			<DeepLearningBanner />
			<DeepLearningCards />
		</div>
	);
};
export default DeepLearning;
