import React from 'react';
import TermsConditionsBanner from './TermsConditionsBanner/TermsConditionsBanner';
import TermsConditionsCards from './TermsConditionsCards/TermsConditionsCards';

import './TermsConditions.scss';

const TermsConditions = () => {
	return (
		<div className='MobilityPractice'>
			<TermsConditionsBanner />
			<TermsConditionsCards />
		</div>
	);
};
export default TermsConditions;
