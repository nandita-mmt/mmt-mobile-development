import React from 'react';
import TermsConditionsBanner from './PrivacyPolicyBanner/PrivacyPolicyBanner';
import TermsConditionsCards from './PrivacyPolicyCards/PrivacyPolicyCards';

import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
	return (
		<div className='MobilityPractice'>
			<TermsConditionsBanner />
			<TermsConditionsCards />
		</div>
	);
};
export default PrivacyPolicy;
