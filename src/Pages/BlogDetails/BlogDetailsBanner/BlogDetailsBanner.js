import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import FB from '../../../Assets/Images/Footer/fb.svg';
import LINK from '../../../Assets/Images/Footer/linkdin.svg';
import TWIT from '../../../Assets/Images/Footer/twitter.svg';
import { FacebookButton, TwitterButton,LinkedInButton } from "react-social";

import './BlogDetailsBanner.scss';

const BlogDetailsBanner = ({ data }) => {
	var url=window.location.href; 
		//let url = "http://www.magicminds.io/blogdetails/a-wholesome-guide-to-digital-marketing-for-small-businesses";
		//let url=window.location.href; 
		//console.log(url);
	 
	return (
		<div className='BlogDetailsBanner'>
			<div className='h-100 mmt-white-blur'>
				<Container className='mmt-white-cont position-relative h-100'>
					<Row className='align-items-center justify-content-center h-100'>
						<Col md lg={11}>
							<h1 className='font-xl font-200 white'>{data[0]?.Title} </h1>
						</Col>
						<Col md lg={1} className='d-flex justify-content-end align-items-end h-100'>
							<div className='d-flex flex-row justify-content-center align-items-center mb-3'>
								<span className='white font-200 me-2'>Share</span>
								
								<FacebookButton className="badri"  url={url} appId={4682820518422006}>
							
								 <Image  className='me-2'  src={FB} alt='no-img'></Image>
									
							    </FacebookButton>
								{/* <FacebookButton  className="badri"  url={url} appId={4682820518422006}>
									
									<Image  className='me-2'  src={FB} alt='no-img'></Image>
								
								</FacebookButton> */}


							   <TwitterButton  className="badri" url={url} appId={4682820518422006}>
							
								<Image className='me-2' src={TWIT} alt='no-img'></Image>
									
							  </TwitterButton>

							<LinkedInButton  className="badri" url={url} appId={4682820518422006}>
							
								<Image className='me-2' src={LINK} alt='no-img'></Image>
									
							</LinkedInButton> 


								{/* <Link to='' jk={jk} appId={4682820518422006}> 
									<Image className='me-2' src={FB} alt='no-img'></Image>
									

							 </Link>  */}

							
								{/* <Link to=''> */}
									{/* <Image className='me-2' src={LINK} alt='no-img'></Image> */}
									{/* <a
										href='https://www.linkedin.com/company/magicmind-technologies'
										target='_blank'
										rel='noreferrer'
									>
										<Image src={LINK} alt='no-img'></Image>
						          </a> */}
								{/* </Link> */}
								{/* <Link to=''> */}
									{/* <Image className='me-2' src={TWIT} alt='no-img'></Image> */}
									{/* <a href='https://twitter.com/MAGICMINDTECHN1' target='_blank' rel='noreferrer'>
							           <Image src={TWIT} alt='no-img'></Image>
						          </a> */}
								{/* </Link> */}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default BlogDetailsBanner;
