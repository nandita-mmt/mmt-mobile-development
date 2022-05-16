import React, { useEffect } from 'react';
import { useField, Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const Email = props => {
	const [field, meta] = useField(props);
	const {
		label,
		name,
		required,
		placeholder,
		className,
		containerClassName,
		disabled,
		isMulti,
		enableTimeSelect,
		autoFocus,
		...rest
	} = props;
	// const textFieldRef = useRef();
	let textFieldRef;

	useEffect(() => {
		if (autoFocus) {
			textFieldRef.focus();
		}
	}, [autoFocus, textFieldRef]);
	return (
		<div className={containerClassName}>
			{label && (
				<label htmlFor={name} className='form-input-label'>
					{label}
					{required && <span className='text-danger'>*</span>}
				</label>
			)}

			<Field
				id={name}
				name={name}
				{...rest}
				type='email'
				className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
				value={field.value || ''}
				placeholder={placeholder}
				disabled={disabled}
				innerRef={i => (textFieldRef = i)}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

Email.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
};

export default Email;
