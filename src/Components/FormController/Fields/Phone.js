import React , {useState} from 'react';
import { Field } from 'formik'; // ErrorMessage
import PhoneInput from 'react-phone-input-2';
// import startsWith from 'lodash.startswith';
import 'react-phone-input-2/lib/style.css';

//import TextError from '../ErrorMessage/TextError';

const Phone = props => {
	const {
		label,
		name,
		required,
		placeholder,
		className,
		containerClassName,
		disabled,
		defaultCountry,
		...rest
	} = props;
	const [errorMsg, setErrorMsg] = useState('');
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	const checkPhoneData = (data) => {
		if(data === ''){
			setErrorMsg('Please enter your phone no')
		} else if(!phoneRegExp.test(data)){
			setErrorMsg('Please enter valid phone no')
		} else {
			setErrorMsg('')
		}
	}
	return (
		<div className={containerClassName}>
			{label && (
				<label htmlFor={name} className='form-input-label'>
					{label}
					{required && <span className='text-danger'>*</span>}
				</label>
			)}
			<Field id={name} name={name} {...rest}>
				{({ field, form, meta }) => {
					const { setFieldValue, setFieldTouched, isSubmitting } = form;
					if(isSubmitting && errorMsg===''){
						checkPhoneData(field.value)
					}
					const customOnBlur = ( name ) => {
						setFieldTouched(name, true, true)
						checkPhoneData(field.value)
					}
					return (
						<PhoneInput
							{...field}
							{...rest}
							inputClass={errorMsg!==''?'error-border':''}
							id={name}
							name={name}
							// isValid={() => !(meta.touched && meta.error)}
							defaultErrorMessage='Phone no required'
							// isValid={(inputNumber, country, countries) => {
							// 	return countries.some(cont => {
							// 		return startsWith(inputNumber, cont.dialCode);
							// 		// ||
							// 		// startsWith(country.dialCode, inputNumber)
							// 	});
							// }}
							// inputProps={{
							// 	name: 'ContactNumber',
							// 	required: true,
							// }}
							placeholder={'Enter your phone number'}
							country={'in'}
							// preferredCountries={['in', 'ca']}
							// onlyCountries={['in', 'ca']}
							// enableAreaCodes={['in', 'ca']}
							// disableCountryCode={true}
							disableDropdown={false}
							countryCodeEditable={false}
							searchNotFound='No Country Found.'
							autocompleteSearch={true}
							value={field.value}
							onChange={inputValue => setFieldValue(name, `+${inputValue}`, true)}
							onBlur={() => customOnBlur(name)}
							disabled={disabled}
							specialLabel=''
						/>
					);
				}}
			</Field>
			{errorMsg!=='' && <div style={{display:'block'}} className='invalid-feedback'>{errorMsg}</div>}
			{/* <ErrorMessage name={name} component={TextError} /> */}
		</div>
	);
};

Phone.defaultProps = {
	className: 'w-100',
	containerClassName: 'form-group',
};

export default Phone;
