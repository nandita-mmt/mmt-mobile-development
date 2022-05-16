import React, { Fragment } from 'react';
import { useField, Field, ErrorMessage, FieldArray } from 'formik';
import Button from 'react-bootstrap/Button';
// import { RiAddFill } from 'react-icons/ri';
import isString from 'lodash/isString';

import TextError from '../ErrorMessage/TextError';
import './TextArray.scss';

const TextArray = props => {
	const [, meta] = useField(props);

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
			<FieldArray name={name}>
				{({ push, remove, form: { values } }) => {
					return (
						<>
							{!values[name] && (
								<Button
									variant='outline-secondary'
									className={meta.touched && isString(meta.error) ? 'input-error' : ''}
									size='sm'
									block
									onClick={() => push('')}
								>
									{/* <RiAddFill size={18} />  */}
									Add an option to select
								</Button>
							)}
							{values[name] &&
								values[name].map((_, index) => (
									<Fragment key={index}>
										<div className='option-container'>
											<Field
												name={`${name}[${index}]`}
												{...rest}
												type='text'
												className={`${className} ${
													meta.touched && meta.error && meta.error[index] ? 'input-error' : ''
												}`}
												placeholder={placeholder}
												disabled={disabled}
											/>
											<Button
												type='button'
												variant='outline-info'
												onClick={() => push('')}
												title='Add Option'
												className='rounded-circle'
											>
												&#43;
											</Button>
											{index > 0 && (
												<Button
													type='button'
													variant='outline-danger'
													onClick={() => remove(index)}
													title='Remove Option'
													className='rounded-circle'
												>
													&#8722;
												</Button>
											)}
										</div>
										{meta.touched && Array.isArray(meta.error) && (
											<ErrorMessage
												name={name}
												render={messages => <TextError>{messages[index]}</TextError>}
											/>
										)}
									</Fragment>
								))}
						</>
					);
				}}
			</FieldArray>
			{meta.touched && isString(meta.error) && <ErrorMessage name={name} component={TextError} />}
		</div>
	);
};

TextArray.defaultProps = {
	className: 'form-control',
	containerClassName: 'form-group',
};

export default TextArray;
