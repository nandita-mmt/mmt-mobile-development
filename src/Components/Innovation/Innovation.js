import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import ReactPlayer from 'react-player';

import INOVID from '../../Assets/Images/innovation/ino-vid.webp';
// import PLAY from '../../Assets/Images/innovation/play-button.svg';
import INOO from '../../Assets/Images/innovation/ino-o.svg';
import HASH from '../../Assets/Images/innovation/ino-hash.svg';
import INOVIDBG from '../../Assets/Images/innovation/ino-vid-bg.svg';
import RIGHTARROW from '../../Assets/Images/Common/white-right-arrow.svg';

import './Innovation.scss';
import Face from '../Face/Face';

const Innovation = () => {
	return (
		<div className='Innovation'>
			<div className='mmt-ino-bg'></div>
			<Container fluid='md' className='py-5'>
				<Row className='justify-content-end align-items-end'>
					<Col lg={11} className='position-relative'>
						<Image className='mmt-ino-hash' src={HASH} alt='no-img'></Image>
						<div className='d-flex flex-column justify-content-start align-items-center align-items-sm-end align-items-lg-start'>
							<div className='d-flex flex-column align-items-center align-items-sm-end '>
								<Fade bottom>
									<h1 className='font-main font-300 mt-2 text-center white text-lg-end'>
										Software development at a glance
									</h1>
								</Fade>
								<Fade bottom>
									<div className='mmt-inovation-lg'>
										<h1 className='font-xl font-300 mt-2 text-center white text-lg-end'>
											Innovati
										</h1>
										<div className='mx-2'>
											<Face />
											{/* <img className='mmt-ino-face' src={INOO} alt='no-img' /> */}
										</div>

										<h1 className='font-xl font-300 mt-2 text-center white text-lg-end'>n Labs</h1>
									</div>
									<div className='mmt-inovation-xs'>
										<div className='d-flex flex-row font-xl font-300 mt-2 text-center white'>
											Innovati
											<div className='mx-2'>
												<img className='mmt-ino-face' src={INOO} alt='no-img' />
											</div>
											n
										</div>

										<h1 className='font-xl font-300 mb-0 mt-2 ms-2 text-center white'>Labs</h1>
									</div>
								</Fade>
							</div>
							<div className='mb-5'>
								<Fade bottom>
									<Link to='/innovation-lab' className='pb-5 mb-5 no-decor'>
										<p className='white font-600 text-center text-lg-end'>
											Thrashing ‘Dumbsourcing’, One Brilliant Thought At A Time
											<span>
												<Image className='ms-2' src={RIGHTARROW} />
											</span>
										</p>
									</Link>
								</Fade>
							</div>
						</div>

						<div className='mmt-vid-holding-div d-flex flex-column justify-content-start align-items-start position-relative'>
							<Image
								className='mmt-ino-vid-bg position-relative'
								src={INOVIDBG}
								alt='no-img'
							></Image>
							<div className='mmt-ino-video position-absolute'>
								<Image className='w-100' src={INOVID} alt='no-img' />
								{/* <ReactPlayer
									className='w-100 h-100'
									url='https://www.youtube.com/watch?v=LCCiwPEdEpg'
									playing={true}
									playIcon={
										<Button className='mmt-play-btn'>
											<Image className='w-100 h-100' src={PLAY} alt='no-img'></Image>
										</Button>
									}
									light={INOVID}
									controls={true}
								/> */}
							</div>
						</div>
					</Col>
				</Row>
				{/* <Row className='justify-content-end alin-items-center'>
					<Col md lg={10} className='float-end'>
						<div className='d-flex flex-column justify-content-end align-items-end position-relative'>
							<Image className='mmt-ino-vid-bg' src={INOVIDBG} alt='no-img'></Image>
							<Image className='mmt-ino-video' src={INOVID} alt='no-img'></Image>
						</div>
					</Col>
				</Row> */}
			</Container>
		</div>
	);
};

export default Innovation;
