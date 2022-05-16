import React, { useState, useEffect, Suspense } from 'react';
import RoutesWrapper from './routes/index';
import { Container, Button } from 'react-bootstrap';
import { Cross as Hamburger } from 'hamburger-react';
import { useLocation } from 'react-router';

import { MdPermPhoneMsg } from 'react-icons/md';

import AppSidebar from './Components/AppSidebar/AppSidebar';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import HomeFooter from './Components/HomeFooter/HomeFooter';
import Load from './Components/Loader/Loader';
import ExpertModal from './Components/ExpertModal/ExpertModal';
import { LANDING_PAGE_URLS } from './config/common';

import './App.scss';


const App = () => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const [isLandingPage, setLandingPage] = useState(false);
	const [scrollState, setScrollState] = useState('top');
	const PUBLIC_URL = process.env.PUBLIC_URL.split('/')[1];
	const url = window.location.pathname.split('/');
	if(url[1] && PUBLIC_URL === url[1]){
		url.splice(1,1)
	}
	const handleToggle = () => {
		if (open === false) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		setOpen(prevOpen => !prevOpen);
	};
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const location = useLocation();
	useEffect(() => { 
		if(LANDING_PAGE_URLS.indexOf(location.pathname) !== -1){
			setLandingPage(true)
		}
		if (!location.hash) {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 500);
		} else if (location.hash === '#contact-form') {
			window.scrollTo(0,document.getElementById('contact-form').offsetTop)
		}
	}, [location]);

	useEffect(() => {
		let listener = null;
		listener = document.addEventListener('scroll', e => {
			const scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 20) {
				if (scrollState !== 'sayantan') {
					setScrollState('sayantan');
				}
			} else {
				if (scrollState !== 'top') {
					setScrollState('top');
				}
			}
		});
		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, [scrollState]);

	return (
		<div className='App'>
			<Suspense fallback={<Load />}>
				{!isLandingPage && <Container fluid='md' className=''>
					<div
						className={`header-cta-btn-wrapper d-flex w-50 flex-row align-items-center justify-content-end mmt-special-index top-zero`}
						// className={`header-cta-btn-wrapper d-flex w-50 flex-row align-items-center justify-content-end mmt-special-index ${
						// 	scrollState === 'top' ? 'extra-top' : 'top-zero'
						// }`}
					>
						<Button
							className={`header-cta-btn mmt-big-screen-btn px-3 btn-spcl-wht py-1 ${
								(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
									? ''
									: 'btn-spcl'
							}`}
							onClick={handleShow}
							style={{
								top: scrollState === 'top' ? '' : '',
								border:"2px solid #19B8A8"
								// border:
								// 	(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
								// 		? '2px solid #28f3cd' &&
								// 		  (scrollState !== 'top' ? '2px solid #19B8A8' : '2px solid #28f3cd')
								// 		: '2px solid #19B8A8',
							}}
						>
							<span
								className='mmt-header-btn-txt'
								style={{
									color:"#28f3cd"
									// color:
									// 	(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
									// 		? '#28f3cd' && (scrollState !== 'top' ? '#474747' : '#28f3cd')
									// 		: '#474747',
								}}
							>
								Talk to an Expert
							</span>
						</Button>{' '}
						<Button
							className={`btn-spcl-menu d-flex flex-row align-items-center justify-content-center p-1 ${
								scrollState === 'top' ? 'extra-top' : ' '
							}`}
							style={{
								top: scrollState === 'top' ? '' : '-4px',
								color:"#28f3cd"
								// color:
								// 	(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
								// 		? '#28f3cd' && (scrollState !== 'top' ? '#474747' : '#28f3cd')
								// 		: '#474747',
							}}
						>
							<Hamburger toggled={open} toggle={handleToggle} size={25} />
						</Button>{' '}
					</div>
				</Container>}
				<div className='mmt-special-index-bottom'>
					<Button
						className='mmt-responsive-btn-down px-0'
						onClick={handleShow}
						style={{
							border:
								(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
									? '2px solid #ffffff' &&
									  (scrollState !== 'top' ? '2px solid #19B8A8' : '2px solid #ffffff')
									: '2px solid #19B8A8',
							color:
								(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
									? '#28f3cd' && (scrollState !== 'top' ? '#474747' : '#28f3cd')
									: '#474747',
						}}
					>
						<span
							className='mmt-header-btn-txt'
							style={{
								color:
									(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
										? '#ffffff'
										: '#ffffff',
							}}
						>
							<MdPermPhoneMsg size={22} />
						</span>
					</Button>{' '}
				</div>
				<AppSidebar open={open} handleToggle={handleToggle} setOpen={setOpen} />
				{(!isLandingPage || location.pathname === '/thank-you') && <TopNavbar
					open={open}
					handleToggle={handleToggle}
					setOpen={setOpen}
					scrollState={scrollState}
				/>}
				<RoutesWrapper />
				{!isLandingPage && <HomeFooter />}
				<ExpertModal show={show} handleClose={handleClose} />
			</Suspense>
		</div>
	);
};

export default App;
