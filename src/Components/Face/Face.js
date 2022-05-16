import React from 'react';
import Eyes from './Eyes/Eyes';
import './Face.scss';

const Face = () => {
	return (
		<div className='Face'>
			<Eyes />
			<div className='lips'></div>
		</div>
	);
};

export default Face;
