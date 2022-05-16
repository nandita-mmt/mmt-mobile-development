import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Row, Button } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FiUser } from 'react-icons/fi';
import { MdBusiness, MdEmail, MdPhone, MdDeleteForever } from 'react-icons/md';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { Link as ANCHOR_LINK } from 'react-router-dom';
import FormikControl from '../../../Components/FormController/FormikControl';

import LINK from '../../../Assets/Images/ContactUs/contact-link.svg';
import PRIVACY from '../../../Assets/Images/ContactUs/contact-privacy.svg';
import ARROW from '../../../Assets/Images/Common/white-right-arrow.svg';

import { createContactAPI, createContactFileUploadAPI } from '../../../services/contacts';

import './ContactUsForm.scss';

const ContactUsForm = () => {
	const [FILE_ARR, setfileArr] = useState([]);
	const [open, setOpen] = useState(false);

	const initialValues = {
		name: '',
		company: '',
		contactnumber: '',
		email: '',
		selectservices: '',
		yourmessage: '',
	};
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Enter your Name'),
		company: Yup.string().required('Enter Company Name'),
		selectservice: Yup.object().required('Please select a service').nullable(),
		contactnumber: Yup.string().required('Please enter phone number'),
		email: Yup.string().email('Enter valid email').required('Email is required'),
		yourmessage: Yup.string().required('Text is required'),
	});

	const handleSubmit = async (value, { resetForm, setSubmitting }) => {
		if(!phoneRegExp.test(value['contactnumber'])){
			setSubmitting(false)
			return false;
		}
		try {
			const SYS_FILE_ARR = FILE_ARR.filter(ITEM => ITEM.TYPE === 'SYS_FILE');
			const FILE_COUNT = SYS_FILE_ARR.length;
			const GOOGLE_DOC_LINKS = [];
			const DROP_BOX_LINKS = [];

			Object.keys(value).forEach(FORM_FIELDS => {
				if (FORM_FIELDS.includes('GOOGLE_DOC') && FORM_FIELDS !== 'GOOGLE_DOC_LINKS') {
					GOOGLE_DOC_LINKS.push(value[FORM_FIELDS]);
					delete value[FORM_FIELDS];
				} else if (FORM_FIELDS.includes('DROP_BOX') && FORM_FIELDS !== 'DROP_BOX_LINKS') {
					DROP_BOX_LINKS.push(value[FORM_FIELDS]);
					delete value[FORM_FIELDS];
				} else if (FORM_FIELDS === 'selectservice') {
					value['selectservices'] = value[FORM_FIELDS].value;
				}
			});
			if (GOOGLE_DOC_LINKS.length > 0) {
				value['attachment_link'] = GOOGLE_DOC_LINKS.join(',');
			} else if (DROP_BOX_LINKS.length > 0) {
				value['attachment_link'] = DROP_BOX_LINKS.join(',');
			}
			delete value['selectservice'];
			const res = await createContactAPI(value);
			if (res.id && FILE_COUNT > 0) {
				var FD = new FormData();
				SYS_FILE_ARR.forEach(SYS_FILE_ITEM => {
					FD.append('files', SYS_FILE_ITEM.FILE_DATA);
					delete value[SYS_FILE_ITEM.UNIQUE_ID];
				});
				FD.append('field', 'img');
				FD.append('refId', res.id);
				FD.append('ref', 'contactus');
				await createContactFileUploadAPI(FD);
			}
			setOpen(true);
			resetForm({});
			setfileArr([]);
		} catch (error) {
			console.log(error);
		}
	};

	const REMOVE_FILE = name => {
		const TEMP_FILE_ARR = [...FILE_ARR];
		const SELECTED_FILES_INDEX = TEMP_FILE_ARR.findIndex(ITEM => ITEM.UNIQUE_ID === name);
		TEMP_FILE_ARR.splice(SELECTED_FILES_INDEX, 1);
		setfileArr(TEMP_FILE_ARR);
	};

	const uploadFromSys = () => {
		const SYS_FILE_COUNT = FILE_ARR.filter(ITEM => ITEM.TYPE === 'SYS_FILE').length;
		const TEMP_FILE_ARR = [...FILE_ARR];
		if (TEMP_FILE_ARR.length === 0) {
			TEMP_FILE_ARR.push({ UNIQUE_ID: `SYS_FILE_${SYS_FILE_COUNT + 1}`, TYPE: 'SYS_FILE' });
			setfileArr(TEMP_FILE_ARR);
		}
	};

	const fileChangeEvent = (name, event) => {
		const TEMP_FILE_ARR = [...FILE_ARR];
		const SELECTED_FILES_INDEX = TEMP_FILE_ARR.findIndex(ITEM => ITEM.UNIQUE_ID === name);
		if (SELECTED_FILES_INDEX !== -1) {
			TEMP_FILE_ARR[SELECTED_FILES_INDEX]['FILE_DATA'] = event.target.files[0];
		}
		setfileArr(TEMP_FILE_ARR);
	};

	const googleDocsLink = () => {
		const GOOGLE_DOC_LINK = FILE_ARR.filter(ITEM => ITEM.TYPE === 'GOOGLE_DOC').length;
		const TEMP_FILE_ARR = [...FILE_ARR];
		if (TEMP_FILE_ARR.length === 0) {
			TEMP_FILE_ARR.push({ UNIQUE_ID: `GOOGLE_DOC_${GOOGLE_DOC_LINK + 1}`, TYPE: 'GOOGLE_DOC' });
			setfileArr(TEMP_FILE_ARR);
		}
	};

	const dropBoxLink = () => {
		const DROP_BOX_LINK = FILE_ARR.filter(ITEM => ITEM.TYPE === 'DROP_BOX').length;
		const TEMP_FILE_ARR = [...FILE_ARR];
		if (TEMP_FILE_ARR.length === 0) {
			TEMP_FILE_ARR.push({ UNIQUE_ID: `DROP_BOX_${DROP_BOX_LINK + 1}`, TYPE: 'DROP_BOX' });
			setfileArr(TEMP_FILE_ARR);
		}
	};
	const options = [
		{ value: 'Mobile Application', label: 'Mobile Application' },
		{ value: 'Website Development', label: 'Website Development' },
		{ value: 'Digital Marketing', label: 'Digital Marketing' },
		{ value: 'Graphic Design', label: 'Graphic Design' },
	];

	return (
		<div className='ContactUsForm' >
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ dirty, isSubmitting }) => {
					return (
						<Form className='w-100 mb-3'>
							<Row className='justify-content-center align-items-center bg-purp px-3 py-2'>
								<Col md={12}>
									<p className='mb-0 text-center  font-13 py-1 font-300 lht-27  white'>
										<span>India:</span>
										<span className='font-600 white'> +91-9903987999</span>
									</p>
								</Col>

								{/* <Col md={6} className=''>
									<p className='mb-0 text-center text-md-start font-13 py-1 font-300 lht-27  white'>
										US:<span className='font-600 white'> 023 415 0503</span>
									</p>
								</Col>

								<Col md={6} className='mmt-contact-before'>
									<p className='mb-0 text-center text-md-start font-13 py-1 font-300 lht-27  white'>
										UK:<span className='font-600 white'> 0203 514 0503</span>
									</p>{' '}
								</Col>

								<Col md={6} className='pe-0'>
									<p className='mb-0 text-center text-md-start font-13 py-1 font-300 lht-27  white'>
										Canada:<span className='font-600 white'> 1866 502 0604</span>
									</p>
								</Col> */}
							</Row>
							<Row className='align-items-start justify-content-center mt-4 px-3'>
								<Col lg={6} className=''>
									<div className='position-relative'>
										<FormikControl
											control='text'
											name='name'
											placeholder='Enter your name'
											label='Name'
											required={true}
											value={''}
										/>
										<FiUser className='input-img' size={24} />
									</div>
									<div className='position-relative'>
										<FormikControl
											control='text'
											name='company'
											placeholder='Enter company name'
											label='Company'
											required={true}
											value={''}
										/>
										<MdBusiness className='input-img' size={24} />
									</div>
									<div className='position-relative'>
										<FormikControl
											control='phone'
											name='contactnumber'
											prefixInputName='countryPrefix'
											// placeholder='Enter phone number'
											label='Phone Number'
											required={true}
											value={''}
										/>
										<MdPhone className='input-img' size={24} />
									</div>
									<div className='position-relative'>
										<FormikControl
											control='email'
											name='email'
											placeholder='Enter your e-mail address'
											label='Email'
											required={true}
											value={''}
										/>
										<MdEmail className='input-img' size={24} />
									</div>
								</Col>
								<Col lg={6} className=''>
									<FormikControl
										control='select'
										name='selectservice'
										placeholder='Select Your Service'
										label='Select Service'
										required={true}
										options={options}
										value={''}
									/>
									<FormikControl
										control='textarea'
										name='yourmessage'
										placeholder='2000 characters allowed.'
										label='Your Message / Requirments'
										required={true}
										value={''}
									/>
								</Col>
							</Row>
							<Row className='px-3 mmt-link-row align-items-cenetr justify-content-center'>
								<Col
									md
									lg={11}
									className='d-flex flex-column justify-content-center align-items-center'
								>
									<div className='mt-4 d-flex flex-row justify-content-center align-items-start'>
										<Image src={LINK} alt='no-img' className='p-1 mmt-contact-link'></Image>
										<p className='ms-2 mb-0 font-300'>
											Select files from your{' '}
											<ANCHOR_LINK
												to=''
												onClick={e => {
													e.preventDefault();
													uploadFromSys();
												}}
											>
												Computer
											</ANCHOR_LINK>{' '}
											or{' '}
											<ANCHOR_LINK
												to=''
												onClick={e => {
													e.preventDefault();
													googleDocsLink();
												}}
											>
												Google Docs
											</ANCHOR_LINK>{' '}
											or{' '}
											<ANCHOR_LINK
												to=''
												onClick={e => {
													e.preventDefault();
													dropBoxLink();
												}}
											>
												Dropbox URLs
											</ANCHOR_LINK>
										</p>
									</div>
									<div className='file-input-width'>
										{FILE_ARR.map((ITEM, i) => {
											if (ITEM.TYPE === 'SYS_FILE') {
												return (
													<div
														key={ITEM.UNIQUE_ID}
														className='w-100 select-form d-flex flex-column align-items-start justify-content-center position-relative'
													>
														<FormikControl
															control='file'
															name={ITEM.UNIQUE_ID}
															placeholder='Select File'
															label='Select File'
															onfilechange={fileChangeEvent}
															className={'select-file'}
														/>
														<Button
															onClick={() => REMOVE_FILE(ITEM.UNIQUE_ID)}
															className='position-absolute btn-dlt h-25'
														>
															<MdDeleteForever size={24} />
														</Button>
													</div>
												);
											} else if (ITEM.TYPE === 'GOOGLE_DOC') {
												return (
													<div key={ITEM.UNIQUE_ID} className='position-relative mt-3'>
														<FormikControl
															control='text'
															name={ITEM.UNIQUE_ID}
															placeholder='Google Doc Link'
															label='Google Doc Link'
															value={''}
														/>
														<Button
															onClick={() => REMOVE_FILE(ITEM.UNIQUE_ID)}
															className='btn-dlt-2 position-absolute'
														>
															<MdDeleteForever size={24} />
														</Button>
													</div>
												);
											} else if (ITEM.TYPE === 'DROP_BOX') {
												return (
													<div key={ITEM.UNIQUE_ID} className='position-relative mt-3'>
														<FormikControl
															control='text'
															name={ITEM.UNIQUE_ID}
															placeholder='Dropbox Link'
															label='Dropbox Link'
															value={''}
														/>
														<Button
															onClick={() => REMOVE_FILE(ITEM.UNIQUE_ID)}
															className='btn-dlt-2 position-absolute'
														>
															<MdDeleteForever size={24} />
														</Button>
													</div>
												);
											} else {
												return '';
											}
										})}
									</div>
									<Button
										variant='btn btn-green font-600 py-3 pd-x mt-4 mx-auto position-relative'
										type='submit'
										disabled={!dirty || isSubmitting}
									>
										Get Started <Image src={ARROW} alt='no-img' className='ms-4'></Image>
									</Button>
									<div className='d-flex flex-row justify-content-center align-items-center mt-3'>
										<Image src={PRIVACY} alt='no-img' className='mmt-contact-link'></Image>
										<p className='ms-2 mb-0 font-300'>Your Privacy is Guaranteed.</p>
									</div>
								</Col>
							</Row>
						</Form>
					);
				}}
			</Formik>
			<SweetAlert
				show={open}
				title='Successful'
				text='Data submitted successfuly. Our team will reach out to you shortly.'
				onConfirm={() => setOpen(false)}
			/>
		</div>
	);
};

export default ContactUsForm;
