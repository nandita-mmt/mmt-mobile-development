import React , {useState,useEffect} from 'react';
import { Navbar, Container, Image, Breadcrumb } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LOGO from '../../Assets/Images/Banner/logo-light.svg';
import LOGO2 from '../../Assets/Images/Banner/logo-dark.svg';
import { LANDING_PAGE_URLS } from '../../config/common'
import { useLocation } from 'react-router';

import './TopNavbar.scss';

const TopNavbar = ({ scrollState }) => {
	const [isLandingPage, setLandingPage] = useState(false);
	const url = window.location.pathname.split('/');
	const PUBLIC_URL = process.env.PUBLIC_URL.split('/')[1];
	if(url[1] && PUBLIC_URL === url[1]){
		url.splice(1,1)
	}
	var replacedURL = undefined;
	if(url[1]){
		replacedURL = url[1].replace('-', ' ').replace('-', ' ');
	}
	const location = useLocation();
	useEffect(() => { 
		console.log(location.pathname)
		if(LANDING_PAGE_URLS.indexOf(location.pathname) !== -1){
			setLandingPage(true)
		}
	}, [location]);
	console.log(url[1])
	return (
		<div className='TopNavbar'>
			<Navbar
				collapseOnSelect
				expand='lg'
				style={{
					transition: scrollState === 'top' ? '0.4s' : '0.4s',
					background:
						scrollState === 'top' && (typeof url[1] === 'undefined' || url[1] === '')
							? 'transparent'
							: (typeof url[1] === 'undefined' || url[1] === '' || isLandingPage) ?'linear-gradient(90deg, #11192e, #19b2a3)':'#ffffff',
					//background:"linear-gradient(90deg, #11192e, #19b2a3)",
					//borderBottom: scrollState === 'top' ? '' : '1px solid #dedede',
				}}
				variant='dark'
				fixed={typeof url[1] === 'undefined' || url[1] !== '' || url[1] === '' || isLandingPage ? 'top' : ''}
			>
				<Container fluid='xl'>
					<Navbar.Brand>
						<NavLink exact to={'/'}>
							{scrollState === 'top' ? (
								<Image
									className='mmt-logo-wht'
									src={typeof url[1] === 'undefined' || url[1] === '' || url[1] === 'thank-you'? LOGO : LOGO2}
									alt='no-img'
								></Image>
							) : (
								<Image className='mmt-logo-purp' src={typeof url[1] === 'undefined' || url[1] === '' || url[1] === 'thank-you' ? LOGO : LOGO2}alt='no-img'></Image>
							)}
						</NavLink>
						{typeof url[1] === 'undefined' || url[1] === '' || isLandingPage ? null : (
							<Breadcrumb separator='›' className='mb-0 font-400'>
								<Breadcrumb.Item active className='mb-0'>
									<NavLink exact to={'/'}>
										<p className='font-micro custom-mg mb-0 black'>HOME </p>
									</NavLink>
								</Breadcrumb.Item>
								{replacedURL === 'blogdetails' && <Breadcrumb.Item active className='mb-0 middle-item'>
									<NavLink exact to={'/blog'}>
										<p className='font-micro custom-mg mb-0 black'>Blog </p>
									</NavLink>
								</Breadcrumb.Item>}
								{replacedURL === 'whitepaper download' && <Breadcrumb.Item active className='mb-0 middle-item'>
									<NavLink exact to={'/white-paper'}>
										<p className='font-micro custom-mg mb-0 black'>White Paper </p>
									</NavLink>
								</Breadcrumb.Item>}
								<Breadcrumb.Item className='mb-0' disabled>
									<p className='mmt-2nd-link font-micro custom-mg mb-0 sky'>
										{replacedURL && replacedURL === 'faq'
											? 'FAQ'
											: replacedURL === 'qa practice'
											? 'QA Practice'
											: replacedURL === 'niche software'
											? 'NICHE Software'
											: replacedURL === 'blogdetails'
											? 'Blog Details'
											: replacedURL}
									</p>
								</Breadcrumb.Item>
							</Breadcrumb>
						)}
					</Navbar.Brand>
					{/* <Nav className='ms-auto'>
						<NavLink
							to={'/contact-us'}
							style={{ marginBottom: typeof url[1] === 'undefined' || url[1] === '' ? '' : 35 }}
							// className={`${typeof url[1] === 'undefined' || url[1] === '' ? '' : 'resp-margin'}`}
						>
							<Button
								className={`mmt-big-screen-btn px-0 btn-spcl-wht ${
									(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
										? ''
										: 'btn-spcl'
								}`}
								style={{
									border:
										(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
											? '2px solid #ffffff' &&
											  (scrollState !== 'top' ? '2px solid #19B8A8' : '2px solid #ffffff')
											: '2px solid #19B8A8',
								}}
							>
								<span
									className='mmt-header-btn-txt'
									style={{
										color:
											(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
												? '#ffffff' && (scrollState !== 'top' ? '#474747' : '#ffffff')
												: '#474747',
									}}
								>
									Schedule Time to Talk
								</span>
							</Button>{' '}
							<Button
								className={`mmt-responsive-btn px-0 btn-spcl-wht ${
									(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
										? ''
										: 'btn-spcl'
								}`}
								style={{
									border:
										(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
											? '2px solid #ffffff' &&
											  (scrollState !== 'top' ? '2px solid #19B8A8' : '2px solid #ffffff')
											: '2px solid #19B8A8',
								}}
							>
								<span
									className='mmt-header-btn-txt'
									style={{
										color:
											(scrollState === 'top' && typeof url[1] === 'undefined') || url[1] === ''
												? '#ffffff' && (scrollState !== 'top' ? '#474747' : '#ffffff')
												: '#474747',
									}}
								>
									Let's Talk
								</span>
							</Button>{' '}
						</NavLink>
					</Nav> */}
				</Container>
			</Navbar>
		</div>
	);
};
export default TopNavbar;
