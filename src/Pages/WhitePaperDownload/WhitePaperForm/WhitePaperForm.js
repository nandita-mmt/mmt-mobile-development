import React, { useState } from 'react';
import SweetAlert from 'sweetalert-react';
import { Button, Image } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import fileDownload from 'js-file-download';
import { FiUser } from 'react-icons/fi';
import { MdBusiness, MdEmail, MdPhone } from 'react-icons/md';
import { createWhitePaperDownloadAPI } from '../../../services/whitepaperdownload';
import FormikControl from '../../../Components/FormController/FormikControl';
import axios from 'axios';
import { BASE_URL } from '../../../config/api/apiEndpoints';
import ARROW from '../../../Assets/Images/WhitePaperDownload/down-arrow.svg';

import './WhitePaperForm.scss';

const WhitePaperForm = ({ onSubmit, setPage, data }) => {
	const [show, setShow] = useState(false);
	const [downloading, setDownloading] = useState(false);
	const slugResponseLink = data[0]?.images[0]?.url;
	const slugResponseFileName = data[0]?.images[0]?.name;
	const initialValues = {
		name: '',
		company: '',
		phone: '',
		email: '',
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Enter your Name'),
		company: Yup.string().required('Enter Company Name'),
		phone: Yup.string().required('Enter your phone number').min(12, 'to short'),
		email: Yup.string().email('Enter valid email').required('Email is required'),
	});
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	const handleSubmit = async (value, { resetForm,setSubmitting }) => {
		if(!phoneRegExp.test(value['phone'])){
			setSubmitting(false)
			return false;
		}
		await createWhitePaperDownloadAPI(value);
		setDownloading(true);
		resetForm({});
		axios.get(BASE_URL + slugResponseLink,{
			responseType: 'blob',
		}).then(res => {
			fileDownload(res.data, slugResponseFileName);
			setDownloading(false);
			setShow(true);
		});
		//window.open('https://api.magicminds.io//uploads/magicmind_whitepaper_1_How_Much_1_ca6b76f178.pdf','_blank');
		// console.log(BASE_URL + slugResponseLink, slugResponseFileName)
		// fileDownload(BASE_URL + slugResponseLink, slugResponseFileName);
	};
	

	return (
		<div className='WhitePaperForm'>
			<h2 className='text-start font-700 mb-4'>Download White Paper</h2>
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
								/>
								<FiUser className='input-img-2' size={24} />
							</div>
							<div className='position-relative'>
								<FormikControl
									control='text'
									name='company'
									placeholder='Enter company name'
									label='Company'
									required={true}
								/>
								<MdBusiness className='input-img-2' size={24} />
							</div>
							<div className='position-relative'>
								<FormikControl
									control='phone'
									name='phone'
									prefixInputName='countryPrefix'
									placeholder='Enter phone number'
									label='Phone Number'
									required={true}
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
								/>
								<MdEmail className='input-img-2' size={24} />
							</div>
							<Button
								variant='btn btn-green font-600 py-3 px-5 mt-3 w-100 mx-auto position-relative'
								block
								type='submit'
								disabled={!dirty || isSubmitting}
							>
								{!downloading ? (<React.Fragment>Download Now <Image className='ms-4' src={ARROW} alt='no-img' /></React.Fragment>) : 'Downloading ...'}
							</Button>
						</Form>
					);
				}}
			</Formik>
			<SweetAlert
				show={show}
				title='Successful'
				text='Submission successful and Whitepaper downloaded.'
				onConfirm={() => setShow(false)}
			/>
		</div>
	);
};

export default WhitePaperForm;
