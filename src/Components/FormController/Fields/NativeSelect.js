import React from 'react';
import { useField, Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const NativeSelect = props => {
	const [field, meta] = useField(props);
	const {
		label,
		name,
		required,
		options,
		placeholder,
		helpText,
		helpTextClassName,
		className,
		containerClassName,
		...rest
	} = props;

	return (
		<div className={containerClassName}>
			{label && (
				<label htmlFor={name} className='form-input-label'>
					{label}
					{required && <span className='text-danger'>*</span>}
				</label>
			)}

			<Field
				as='select'
				id={name}
				name={name}
				className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
				value={field.value || ''}
				{...rest}
			>
				{placeholder && (
					<option value='' disabled>
						{placeholder}
					</option>
				)}
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Field>

			{helpText && (
				<small id={name} className={helpTextClassName}>
					{helpText}
				</small>
			)}
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

NativeSelect.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
	helpTextClassName: 'form-text text-muted',
};

export default NativeSelect;
