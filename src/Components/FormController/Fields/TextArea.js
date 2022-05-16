import React from 'react';
import { useField, Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const TextArea = props => {
	const [field, meta] = useField(props);

	const {
		label,
		name,
		containerClassName,
		className,
		isMulti,
		enableTimeSelect,
		required,
		disabled,
		...rest
	} = props;

	return (
		<div className={containerClassName}>
			<label htmlFor={name} className='form-input-label'>
				{label}
				{required && <span className='text-danger'>*</span>}
			</label>
			<Field
				{...rest}
				id={name}
				name={name}
				component='textarea'
				className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
				style={{ resize: 'none', height: '270px' }}
				disabled={disabled}
				value={field.value || ''}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

TextArea.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
};

export default TextArea;
