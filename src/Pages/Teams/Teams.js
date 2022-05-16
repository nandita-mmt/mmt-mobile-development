import React from 'react';
import TeamBanner from './TeamBanner/TeamBanner';
import TeamCards from './TeamCards/TeamCards';

import './Teams.scss';

const Teams = () => {
	return (
		<div className='Teams'>
			<TeamBanner />
			<TeamCards />
		</div>
	);
};
export default Teams;
