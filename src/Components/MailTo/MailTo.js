import React from 'react';
import { Link } from 'react-router-dom';

const MailTo = ({ mailto, label, mailClassName }) => {
	return (
		<Link
			to='#'
			onClick={e => {
				window.location = mailto;
				e.preventDefault();
			}}
			className={mailClassName}
		>
			{label}
		</Link>
	);
};

export default MailTo;
