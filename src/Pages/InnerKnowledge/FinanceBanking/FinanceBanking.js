import React from 'react';
import FinanceBankingBanner from './FinanceBankingBanner/FinanceBankingBanner';
import FinanceBankingCards from './FinanceBankingCards/FinanceBankingCards';

const FinanceBanking = () => {
	return (
		<div className='FinanceBanking'>
			<FinanceBankingBanner />
			<FinanceBankingCards />
		</div>
	);
};
export default FinanceBanking;
