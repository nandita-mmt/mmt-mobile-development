import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SweetAlert from 'sweetalert-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FiUser } from 'react-icons/fi';
import { MdEmail, MdPhone } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

import FormikControl from '../../Components/FormController/FormikControl';
import { createExpertsAPI } from '../../services/contacts';

import './ExpertModal.scss';

const ExpertModal = props => {
	const { show, handleClose } = props;
	const [showAlert, setShowAlert] = useState(false);

	const initialValues = {
		name: '',
		phoneno: '',
		email: '',
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Enter your Name'),
		phoneno: Yup.string().required('Enter your phone number').min(12, 'to short'),
		email: Yup.string().email('Enter valid email').required('Email is required'),
	});
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	const handleSubmit = async (value, { resetForm , setSubmitting }) => {
		if(!phoneRegExp.test(value['phoneno'])){
			setSubmitting(false)
			return false;
		}
		const res = await createExpertsAPI(value);
		console.log(777, res);
		resetForm({});
		setShowAlert(true)
	};

	return (
		<div className='ExpertModal'>
			<Modal
				className='expert-modal'
				size='sm'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered
			>
				<Modal.Header>
					<Modal.Title>Enter Details</Modal.Title>

					<GrClose onClick={handleClose} size={16} />
				</Modal.Header>
				<Modal.Body>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						{({ dirty, isSubmitting }) => {
							return (
								<Form noValidate className='w-100 mb-3'>
									<div className='position-relative'>
										<FormikControl
											control='text'
											name='name'
											placeholder='Enter your name'
											label='Name'
											required={true}
											value={''}
										/>
										<FiUser className='input-img-2' size={24} />
									</div>
									<div className='position-relative'>
										<FormikControl
											control='phone'
											name='phoneno'
											prefixInputName='countryPrefix'
											placeholder='Enter phone number'
											label='Phone Number'
											required={true}
											value={''}
										/>
										<MdPhone className='input-img-2' size={24} />
									</div>
									<div className='position-relative'>
										<FormikControl
											control='email'
											name='email'
											placeholder='Enter your e-mail address'
											label='E-mail'
											required={true}
											value={''}
										/>
										<MdEmail className='input-img-2' size={24} />
									</div>
									<Button
										variant='btn btn-green font-600 py-3 px-5 mt-3 w-100 mx-auto position-relative'
										block
										type='submit'
										disabled={!dirty || isSubmitting}
									>
										Submit Now
									</Button>
								</Form>
							);
						}}
					</Formik>
					<SweetAlert
						show={showAlert}
						title='Successful'
						text='Our Expert will reach you shortly.'
						onConfirm={() => setShowAlert(false)}
					/>
				</Modal.Body>
				{/* <Modal.Footer>
					
				</Modal.Footer> */}
			</Modal>
		</div>
	);
};

export default ExpertModal;
