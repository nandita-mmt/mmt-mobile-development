import React from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import IND from '../../Assets/Images/Footer/ind-flag.webp';
import USA from '../../Assets/Images/Footer/usa-flag.webp';
import UK from '../../Assets/Images/Footer/uk-flag.webp';
import CAN from '../../Assets/Images/Footer/can-flag.webp';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import './FooterAccordian.scss';

const FooterAccordian = () => {
	return (
		<div className='FooterAccordian mb-5'>
			<Accordion preExpanded={['a']}>
				<AccordionItem uuid='a' className='mmt-mobile-footer-ind'>
					<AccordionItemHeading className='bg-trans'>
						<AccordionItemButton>
							<div className='d-flex flex-row justify-content-start align-items-center'>
								<div className='mmt-footer-flag me-3'>
									<Image className='w-100' src={IND} alt='no-image'></Image>
								</div>
								<h5 className='mb-0'>India Office</h5>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<div className='mmt-blur-div'>
							<div className='mmt-hover-top'></div>
							<p className='mb-4 white font-400'>
								P.S Srijan Corporate Park, Unit No 806, 8th Floor, Tower-II, GP-2, Block - EP & GP,
								Sector-V, Saltlake City, Kolkta - 700091
							</p>
							<h4 className='mb-0 white'>
								<a href='tel:+91 9903987999' className='white'>
									+91 9903987999
								</a>
							</h4>
							<p className='mt-3'>
								<Link to='' className='font-400 white'>
									hello@magicminds.io
								</Link>
							</p>
						</div>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem uuid='b' className='mmt-mobile-footer-ind'>
					<AccordionItemHeading className='bg-trans'>
						<AccordionItemButton>
							<div className='d-flex flex-row justify-content-start align-items-center'>
								<div className='mmt-footer-flag me-3'>
									<Image className='w-100' src={USA} alt='no-image'></Image>
								</div>
								<h5 className='mb-0'>USA Office</h5>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<div className='mmt-blur-div'>
							<div className='mmt-hover-top'></div>
							<p className='mb-4 white font-400'>30 N Gould St Ste 4763 Sheridan, WY82801</p>
							<h4 className='white font-400'>
								<a href='tel:+0203 514 0503' className='white'>
									0203 514 0503
								</a>
							</h4>
						</div>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem uuid='c' className='mmt-mobile-footer-ind'>
					<AccordionItemHeading className='bg-trans'>
						<AccordionItemButton>
							<div className='d-flex flex-row justify-content-start align-items-center'>
								<div className='mmt-footer-flag me-3'>
									<Image className='w-100' src={UK} alt='no-image'></Image>
								</div>
								<h5 className='mb-0'>UK Office</h5>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<div className='mmt-blur-div'>
							<div className='mmt-hover-top'></div>
							<p className='white font-400 mb-4'>27 Old Gloucester Street London WC1N 3AX</p>
							{/* <h4 className='white font-400'>0203 514 0503</h4> */}
						</div>
					</AccordionItemPanel>
				</AccordionItem>
				<AccordionItem uuid='d' className='mmt-mobile-footer-ind'>
					<AccordionItemHeading className='bg-trans'>
						<AccordionItemButton>
							<div className='d-flex flex-row justify-content-start align-items-center'>
								<div className='mmt-footer-flag me-3'>
									<Image className='w-100' src={CAN} alt='no-image'></Image>
								</div>
								<h5 className='mb-0'>Canada Office</h5>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<div className='mmt-blur-div'>
							<div className='mmt-hover-top'></div>
							<p className='white font-400 mb-4'>27 Old Gloucester Street London WC1N 3AX</p>
							<h4 className='white font-400'>
								<a href='tel:+1866 502 0604' className='white'>
									1866 502 0604
								</a>
							</h4>
						</div>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default FooterAccordian;
