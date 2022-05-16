import React from 'react';
import { Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const File = props => {
	const {
		label,
		name,
		required,
		placeholder,
		className,
		containerClassName,
		disabled,
		isMulti,
		showEyeButton,
		multiple,
		accept,
		onfilechange,
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
			<Field id={name} name={name} {...rest}>
				{({ form, meta, field }) => {
					const { setFieldValue, setFieldTouched } = form;
					const changeFieldValue = (name, event) => {
						setFieldValue(name, event.target.files[0], true);
						onfilechange(name, event);
					};
					return (
						<input
							// {...field}
							{...rest}
							type='file'
							className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
							onChange={event => changeFieldValue(name, event)}
							onBlur={() => setFieldTouched(name, true, false)}
							multiple={multiple}
							//accept={accept}
							placeholder={placeholder}
							disabled={disabled}
						/>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

File.defaultProps = {
	containerClassName: 'form-group',
	className: 'form-control',
	multiple: false,
	accept: 'image/png, image/jpeg',
};

export default File;
