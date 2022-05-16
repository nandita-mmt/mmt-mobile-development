import React , {useState} from 'react';
import { Field, ErrorMessage } from 'formik';
import ReactSelect from 'react-select';

import TextError from '../ErrorMessage/TextError';

const Select = props => {
	const {
		label,
		name,
		required,
		placeholder,
		className,
		options,
		containerClassName,
		isMulti,
		disabled,
		closeMenuOnSelect,
		isClearable,
		helpText,
		helpTextClassName,
		...rest
	} = props;
	const [submitted, setSubmitted] = useState(false);
	return (
		<div className={containerClassName}>
			{label && (
				<label htmlFor={name} className='form-input-label'>
					{label}
					{required && <span className='text-danger'>*</span>}
				</label>
			)}
			<Field id={name} name={name} {...rest}>
				{({ form, field, meta }) => {
					const { setFieldValue, setFieldTouched, isSubmitting } = form;
					const { value } = field;
					if(isSubmitting && submitted===false){
						setSubmitted(true)
						setFieldTouched(name, true, true)
					}
					return (
						<ReactSelect
							{...field}
							{...rest}
							// components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
							placeholder={placeholder}
							classNamePrefix='react-select'
							className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
							isMulti={isMulti}
							closeMenuOnSelect={!isMulti}
							isClearable={isMulti}
							isSearchable
							
							isDisabled={disabled}
							options={options}
							hideSelectedOptions={isMulti}
							value={value}
							onChange={selectedOptionObject => setFieldValue(name, selectedOptionObject, true)}
							onBlur={() => setFieldTouched(name, true, true)}
							noOptionsMessage={() => 'No Options Found.'}
							menuColor='red'
						/>
					);
				}}
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

Select.defaultProps = {
	className: '',
	containerClassName: 'form-group',
	helpTextClassName: 'form-text text-muted',
};

export default Select;
