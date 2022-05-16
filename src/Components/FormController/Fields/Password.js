import React, { useState } from 'react';
import { useField, Field, ErrorMessage } from 'formik';
// import { InlineIcon } from '@iconify/react';
// import eyeFill from '@iconify-icons/bi/eye-fill';
// import eyeSlashFill from '@iconify-icons/bi/eye-slash-fill';

import TextError from '../ErrorMessage/TextError';
import './Password.scss';

const Password = props => {
	const [field, meta] = useField(props);
	const [focus, setFocus] = useState(false);
	const {
		label,
		name,
		required,
		placeholder,
		className,
		containerClassName,
		showEyeButton,
		eyeButtonSize,
		disabled,
		isMulti,
		...rest
	} = props;
	const [isPasswordHidden] = useState(true);

	return (
		<div className={`Password ${containerClassName}`}>
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
				type={isPasswordHidden ? 'password' : 'text'}
				className={`${className} ${meta.touched && meta.error ? 'is-invalid' : ''}`}
				value={field.value || ''}
				placeholder={placeholder}
				disabled={disabled}
				autoComplete='off'
				style={{ position: 'relative' }}
				onFocus={() => setFocus(!focus)}
			/>
			{/* {showEyeButton && field?.value?.length > 0 && focus && (
				<IconButton
					className='password-visibility-btn'
					onClick={() => setIsPasswordHidden(prevIsPasswordHidden => !prevIsPasswordHidden)}
					tabIndex='-1'
				>
					<InlineIcon icon={isPasswordHidden ? eyeFill : eyeSlashFill} width={21} />
				</IconButton>
			)} */}
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

Password.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
	eyeButtonSize: 26,
};

export default Password;
