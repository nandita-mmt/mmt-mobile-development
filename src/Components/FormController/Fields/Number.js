import { useField, Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const NumberInput = props => {
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
				id={name}
				name={name}
				{...rest}
				type='number'
				className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
				value={field.value || ''}
				placeholder={placeholder}
				disabled={disabled}
				onWheel={event => event.target.blur()}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

NumberInput.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
};

export default NumberInput;
