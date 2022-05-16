import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FiUser } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { GrOrganization, GrClose } from 'react-icons/gr';
import { GiMoneyStack, GiSandsOfTime } from 'react-icons/gi';
import { FaMoneyBillAlt } from 'react-icons/fa';

import FormikControl from '../../Components/FormController/FormikControl';
import { createCareerAPI ,createCareerFileUploadAPI } from '../../services/career';

import './CareerModal.scss';

const CareerModal = props => {
	const { filteredCardData, show, handleClose } = props;
	const [FILE_ARR, setfileArr] = useState([]);
	const [showAlert, setShowAlert] = useState(false);

	const initialValues = {
		name: '',
		email: '',
		currentorganization: '',
		position: '',
		noticeperiod: '',
		currentctc: '',
		expectedctc: '',
	};

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Enter your Name'),
		email: Yup.string().email('Enter valid email').required('Email is required'),
		currentorganization: Yup.string().required('Enter organization Name'),
		noticeperiod: Yup.number().required('Enter last serving day'),
		currentctc: Yup.number().required('Enter your current CTC'),
		expectedctc: Yup.number().required('Enter your expected CTC'),
	});

	const options = [
		{ value: `${filteredCardData[0]?.post}`, label: `${filteredCardData[0]?.post}` },
	];
	console.log(options);

	const handleSubmit = async (value, { resetForm }) => {
		var final_value = value;
		final_value.noticeperiod = final_value.noticeperiod.toString();
		final_value.currentctc = final_value.currentctc.toString();
		final_value.expectedctc = final_value.expectedctc.toString();
		final_value.position = value.position.value
		const res = await createCareerAPI(final_value);
		if (res.id && FILE_ARR.length > 0) {
			var FD = new FormData();
			FILE_ARR.forEach(SYS_FILE_ITEM => {
				FD.append('files', SYS_FILE_ITEM.FILE_DATA);
			});
			FD.append('field', 'img');
			FD.append('refId', res.id);
			FD.append('ref', 'career');
			document.getElementById("career_file").value = null;
			//await createCareerFileUploadAPI(FD);
		}
		setShowAlert(true);
		console.log(222, res);
		resetForm({});
	};
	
	const fileChangeEvent = (name, event) => {
		var TEMP_FILE_ARR = [...FILE_ARR];
		TEMP_FILE_ARR = [{'FILE_DATA' : event.target.files[0]}];
		setfileArr(TEMP_FILE_ARR);
	};

	return (
		<div className='CareerModal'>
			<Modal
				className='career-modal'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				centered
				size='lg'
				filteredCardData={filteredCardData}
			>
				<Modal.Header>
					<Modal.Title>
						Apply for the Position of{' '}
						<span className='purp text-uppercase'>{filteredCardData[0]?.post}</span>
					</Modal.Title>
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
									<Row>
										<Col md={6}>
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
										</Col>
										<Col md={6}>
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
										</Col>
										<Col md={6}>
											<div className='position-relative'>
												<FormikControl
													control='text'
													name='currentorganization'
													placeholder='Enter your organization name'
													label='Current Organization'
													required={true}
													value={''}
												/>
												<GrOrganization className='input-img-2 custom-path-color' size={24} />
											</div>
										</Col>
										<Col md={6}>
											<div className='position-relative'>
												<FormikControl
													control='number'
													name='noticeperiod'
													placeholder='Enter notice period'
													label='Notice Period'
													required={true}
													value={''}
												/>
												<GiSandsOfTime className='input-img-2' size={24} />
											</div>
										</Col>
										<Col md={6}>
											<div className='position-relative'>
												<FormikControl
													control='number'
													name='currentctc'
													placeholder='Enter your current ctc'
													label='Current CTC'
													required={true}
													value={''}
												/>
												<FaMoneyBillAlt  className='input-img-2' size={24} />
											</div>
										</Col>
										<Col md={6}>
											<div className='position-relative'>
												<FormikControl
													control='number'
													name='expectedctc'
													placeholder='Enter your expected ctc'
													label='Expected CTC'
													required={true}
													value={''}
												/>
												<GiMoneyStack className='input-img-2' size={24} />
											</div>
										</Col>
										<Col md={6}>
											<div className='position-relative'>
												<FormikControl
													control='select'
													name='position'
													placeholder='Enter your expected ctc'
													label='Job Position'
													required={true}
													options={options}
													value={''}
												/>
											</div>
										</Col>
										<Col md={6}>
											<div className='file-input-width'>
												{/* {FILE_ARR.map((ITEM, i) => {
												return ( */}
												<div
													// key={ITEM.UNIQUE_ID}
													className='w-100 select-form d-flex flex-column align-items-start justify-content-center position-relative'
												>
													<FormikControl
														control='file'
														name='file'
														id="career_file"
														placeholder='Select File'
														label='Select File'
														onfilechange={fileChangeEvent}
														className={'select-file'}
													/>
													
												</div>
											</div>
										</Col>
									</Row>
									<Row className='px-3 mmt-link-row align-items-cenetr justify-content-center'>
										<Col
											md
											lg={11}
											className='d-flex flex-column justify-content-center align-items-center'
										>
											<Button
												variant='btn btn-green font-600 py-3 px-5 mt-3 mx-auto position-relative'
												block
												type='submit'
												disabled={!dirty || isSubmitting}
											>
												Submit
											</Button>
										</Col>
									</Row>
									
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
			</Modal>
		</div>
	);
};

export default CareerModal;
