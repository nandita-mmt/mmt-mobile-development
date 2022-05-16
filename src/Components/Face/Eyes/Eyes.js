import React from 'react';
import useMightyMouse from 'react-hook-mighty-mouse';

import './Eyes.scss';

function Eyes() {
	// console.log(111, useMightyMouse(true, 'left-eye', { x: 45, y: 45 }));
	const {
		positionRelative: { angle: angleLeftEye },
	} = useMightyMouse(true, 'left-eye', { x: 45, y: 45 });
	const {
		positionRelative: { angle: angleRightEye },
	} = useMightyMouse(true, 'right-eye', { x: 45, y: 45 });

	const styleLeftEye = {
		transform: `rotate(${-angleLeftEye}deg)`,
	};
	const styleRightEye = {
		transform: `rotate(${-angleRightEye}deg)`,
	};

	return (
		<div className='eyes-follow-tired'>
			<div className='container'>
				<div className='eyelid' />
				<div className='eyes'>
					<div id='left-eye' className='eye' style={styleLeftEye}>
						<div className='pupil' />
					</div>
					<div id='right-eye' className='eye' style={styleRightEye}>
						<div className='pupil' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Eyes;
