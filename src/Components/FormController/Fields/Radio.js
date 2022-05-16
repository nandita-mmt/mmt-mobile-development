import { Field, ErrorMessage } from 'formik';

import TextError from '../ErrorMessage/TextError';

const Radio = props => {
	const {
		label,
		name,
		options,
		className,
		containerClassName,
		radioContainerClassName,
		required,
		...rest
	} = props;

	return (
		<div className={containerClassName}>
			{label && (
				<label className='form-input-label mr-2'>
					{label}
					{required && <span className='text-danger'>*</span>}
				</label>
			)}
			<Field name={name} {...rest}>
				{({ field, meta }) =>
					options.map(option => (
						<div className={radioContainerClassName} key={option.label}>
							<input
								type='radio'
								id={typeof option.value !== 'string' ? option.value.toString() : option.value}
								{...field}
								value={option.value}
								checked={field.value === option.value}
								className={meta.touched && meta.error ? `${className} is-invalid` : `${className}`}
							/>
							<label
								htmlFor={typeof option.value !== 'string' ? option.value.toString() : option.value}
								className='custom-control-label'
							>
								{option.label}
							</label>
						</div>
					))
				}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

Radio.defaultProps = {
	containerClassName: 'form-group',
	radioContainerClassName: 'custom-control custom-radio custom-control-inline',
	className: 'custom-control-input',
};

export default Radio;
