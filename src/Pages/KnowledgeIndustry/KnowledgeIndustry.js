import React from 'react';
import KnowledgeIndustryBanner from './KnowledgeIndustryBanner/KnowledgeIndustryBanner';
import KnowledgeIndustryCards from './KnowledgeIndustryCards/KnowledgeIndustryCards';

import './KnowledgeIndustry.scss';

const KnowledgeIndustry = () => {
	return (
		<div className='KnowledgeIndustry'>
			<KnowledgeIndustryBanner />
			<KnowledgeIndustryCards />
		</div>
	);
};
export default KnowledgeIndustry;
