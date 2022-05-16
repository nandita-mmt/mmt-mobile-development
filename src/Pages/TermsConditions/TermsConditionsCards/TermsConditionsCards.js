import React from 'react';
//import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
// import { NavLink } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import { BiCircle } from 'react-icons/bi';
// import TESTCURVE from '../../../Assets/Images/Testimonial/test-curve.svg';
// import DESIGN from '../../../Assets/Images/WebPractice/website-design.png';
// import DEVELOPMENT from '../../../Assets/Images/WebPractice/website-development.png';
// import SALES from '../../../Assets/Images/WebPractice/sales-landing.png';

import './TermsConditionsCards.scss';

const TermsConditionsCards = () => {
	// const responsiveTxt = {
	// 	0: {
	// 		items: 1,
	// 	},
	// 	767: {
	// 		items: 2,
	// 	},
	// 	992: {
	// 		items: 3,
	// 	},
	// 	1200: {
	// 		items: 4,
	// 	},
	// };
	return (
		<div className='MobilityPracticeCards'>
			<Container className='mmt-papercard-container w-100 h-100 mt-5 '>
				<Row className='align-items-center justify-content-center pt-5 pb-4'>
					<Col md lg={12}>
						<Fade bottom>
							<h1 className='mmt-web-resp-txt font-xl font-200 text-center mb-0'>
							Terms Conditions

							</h1>
						</Fade>
						{/* <Image className='mmt-test-curve mt-2' src={TESTCURVE} alt='no-img'></Image> */}
						{/* <p className='font-300 text-center mt-4'>
						The tidal wave of new-age innovations has made it a 
						mandate for the business solutions to be resourcefully 
						customer-centric. The term ‘digital transformation’ 
						is often misinterpreted as legacy systems that 
						incorporate only latest technologies, used to train
						 people and change the existing framework of delivery.
						</p>
						<p className='font-300 text-center mt-4'>
							On the contrary, the transformation signifies instilling logical thinking,
							streamlining the current framework with real-time features and 
							leverage the performance of organizations adapting to them.
						</p> */}


{/* <section class="experience-platform">
<div class="container">
<div class="row align-items-center"> */}
<p className='font-300 text-start mt-4'>Magicmind Technologies will provide the Services to The Clients on the terms and conditions of this Service Agreement.</p>
<p className='font-300 text-start mt-4'><strong>IT IS AGREED hence:</strong></p>
<p className='font-300 text-start mt-4'>1.DEFINITIONS</p>
<p className='font-300 text-start mt-4'>The Definitions and Interpretation rules for the Service Agreement of Magicmind Technologies have been stated.</p>
<p className='font-300 text-start mt-4'>2. OPERATIONAL FUNCTION OF THE AGREEMENT</p>

<p className='font-300 text-start mt-4'>2.1 The methods by which the Client may engage Magicmind Technologies, Request for Services, select the appropriate Magicmind Employee and perform other day-to-day activities pursuant to this Contract- fall within the terms and conditions on Magicmind’s website, which on incorporation, forms part of this Service Agreement.</p>
<p className='font-300 text-start mt-4'>2.2 The Client agrees to the point that by entering into this Agreement with Magicmind Technologies, this Agreement does not establish or otherwise constitute an employment relationship or agreement with Magicmind. This Agreement also does not create a partnership or agency relationship between The Client and the Magicmind Employee who is not authorized by authority to enter into written or oral (whether implied or express) contracts on behalf of The Client.</p>
<p className='font-300 text-start mt-4'><strong>3. DURATION OF AGREEMENT</strong></p>
<p className='font-300 text-start mt-4'>3.1 This Agreement will commence on the Commencement Date and will continue on a month to month term until terminated, according to clause 12.</p>
<p className='font-300 text-start mt-4'><strong>4. PAYMENT AGREEMENT</strong></p>
<p className='font-300 text-start mt-4'>4.1 The Client must pay Magicmind Technologies for Services in amounts, at the set upon time, and upon such terms and conditions on Magicmind’s website which, on incorporation forms part of this Service Agreement.</p>
<p className='font-300 text-start mt-4'><strong>5. NO LIABILITY OF MAGICMIND</strong></p>
<p className='font-300 text-start mt-4'>5.1 Magicmind Technologies is not liable for any damage, loss, costs or compensation (whether direct or indirect) which The Client may suffer, or for which The Client may become liable, arising from situations of:</p>
<p className='font-300 text-start mt-4'>a) The introduction by Magicmind Technologies of Magicmind Technologies Employees to The Client (or any delay in such introduction);</p>
<p className='font-300 text-start mt-4'>b) The failure of any Magicmind Employee to accept an offer of an Assignment; or</p>
<p className='font-300 text-start mt-4'>c) The performance of any Magicmind Employee who accepts an Assignment with The Client.</p>
<p className='font-300 text-start mt-4'><strong>6. THE CLIENT’S INDEMNITY TO MAGICMIND</strong></p>
<p className='font-300 text-start mt-4'>6.1 The Client indemnifies Magicmind Technologies in respect of losses, liabilities or claims arising from or related to:</p>
<p className='font-300 text-start mt-4'>a) Any acts and omissions of any Magicmind Employee when performing his or her obligations during a work with The Client;</p>
<p className='font-300 text-start mt-4'>b) Any injury suffered by (including death of) a Magicmind Technologies Employee because of that Magicmind Technologies Employee performing his or her obligations; and</p>
<p className='font-300 text-start mt-4'>d) Any damage to property because of the performance of any obligations by a Magicmind Technologies Employee.</p>
<p className='font-300 text-start mt-4'>6.2 The Client indemnifies Magicmind Technologies in respect of any claims by a Magicmind Employee, arising from the termination of the Magicmind Technologies Employee Assignment by The Client and/or any breaches of laws applicable in any jurisdiction in which the Magicmind Technologies Employee may operate or provides the Services.</p>
<p className='font-300 text-start mt-4'><strong>RESTRICTION ON THE DIRECT HIRING OF MAGICMIND TECHNOLOGIES’s SERVICE EMPLOYEES</strong></p>
<p className='font-300 text-start mt-4'>7.1 If The Client or any other related body corporate make an offer of permanent employment or further projects or different assignments to a Magicmind Technologies Employee who is performing a work for The Client (or who has performed an Assignment for The Client during the previous one year time period) which is accepted by that Magicmind Technologies Employee , The Client must pay to Magicmind Technologies 5,000.00 USD for each Magicmind Technologies employee who has been employed by the Client, which amount may be altered from time to time, at the discretion of Magicmind Technologies.</p>
<p className='font-300 text-start mt-4'>7.2 In the situation of termination of this Contract, The Client or a related body corporate cannot make an offer of a contract, permanent employment, further projects or different assignments to a Magicmind Technologies Employee who is performing an Assignment for The Client (or who has performed an Assignment for The Client during the previous twelve months) until after 12 months following the end of this Contract.</p>
<p className='font-300 text-start mt-4'>7.3 The Client cannot offer direct contract, permanent employment, projects or assignments to a Magicmind Technologies Employee ’s friends, family members, referrals and network to perform an Assignment for The Client without the proper involvement and approval of Magicmind Technologies.</p>
<p className='font-300 text-start mt-4'>7.4 Exchanging and asking for any information relating to the agreement such as contract payments and rate between Magicmind Technologies and Magicmind Technologies Employee is strictly prohibited under this agreement.</p>
<p className='font-300 text-start mt-4'><strong>8. INTELLECTUAL PROPERTY</strong></p>
<p className='font-300 text-start mt-4'>8.1 All the materials prepared by the Magicmind Employee during the term of this Contract shall be the sole property of The Client and the ownership of and any Intellectual Property Rights subsisting in any such work shall vest in The Client. All information regarding The Client’s customers, users, and in particular and without limitation, customers, user of Client’s site, and all rights associated with such information are the exclusive property of The Client.</p>
<p className='font-300 text-start mt-4'>8.2 In the situation of termination of the Contract, the Magicmind Technologies Employee will immediately deliver any material, software or hardware given by The Client to Magicmind Technologies so that Magicmind may return them to The Client, subject to payment of freight changes by The Client.</p>
<p className='font-300 text-start mt-4'>8.3 Magicmind Technologies, the Magicmind Technologies Employee and The Client acknowledge and agree that they cannot use, re-use, distribute, publish, license, sub-license, reproduce, create derivative work, copy, supply or communicate any Intellectual Property Right which belongs to the other party except as required by law.</p>
<p className='font-300 text-start mt-4'><strong>PRIVACY RULES</strong></p>
<p className='font-300 text-start mt-4'>All parties (including the Magicmind Technologies Employee) agree that they will handle all Personal Information in accordance with the Privacy Laws, and that they will use Personal information solely for the purpose of carrying out their respective obligations pursuant to this Contract.</p>
<p className='font-300 text-start mt-4'><strong>10. INFORMATION THAT IS SOLELY CONFIDENTIAL</strong></p>
<p className='font-300 text-start mt-4'>10.1 Subject to 10.2, all Parties may only disclose any Confidential Information where disclosure is required by law or by any notice, order or regulation of any regulatory authority.</p>
<p className='font-300 text-start mt-4'>10.2 When a Disclosure Obligation occurs:</p>
<p className='font-300 text-start mt-4'>a) The Party that is subject to the Disclosure Obligation must inform the other party via writing, of any disclosure required by a Disclosure Obligation before or, if this is not practical, as soon as the disclosure is made.</p>
<p className='font-300 text-start mt-4'>b) The Party that is subject to the Disclosure Obligation must use justifiable or reasonable endeavors to (and assist the other Party to) restrict distribution of the Confidential Information disclosed and otherwise take all reasonable steps to preserve the confidentiality of the Confidential Information the subject of the Disclosure Obligation.</p>
<p className='font-300 text-start mt-4'>c) All parties must consult with each other to agree to the content of any announcement the Party, that is subject to the Disclosure Obligation, is required to make (to the extent practical within the requirements of the Disclosure Obligation).</p>
<p className='font-300 text-start mt-4'>d) The Party that is subject to the Disclosure Obligation must not, without the prior and proper written consent of the other Party, take (or omit to take, or procure, suffer, or permit to be taken) any action as a result of which it may become subject to a legal obligation to disclose Confidential Information, except for actions which necessarily arise in connection with the this Agreement.</p>
<p className='font-300 text-start mt-4'><strong>11. WARRANTY AGREEMENT</strong></p>
<p className='font-300 text-start mt-4'>Each party represents and warrants to the other party that:</p>
<p className='font-300 text-start mt-4'>a) There are no claims, actions, proceedings or investigations pending or threatened against it or by it of which it is aware, and which may have a material effect on the subject matter of this Contract.</p>
<p className='font-300 text-start mt-4'>b) It has with it, all the licences, authorisations, consents, approvals and permits required by all applicable laws and regulations in order to perform its obligations under this Contract, and otherwise complies with all laws and regulations applicable to the performance of those obligations;</p>
<p className='font-300 text-start mt-4'>c) It has provided, or will provide, its employees, contractors and subcontractors with proper training, information and the procedures to facilitate ongoing compliance with this Contract, the Magicmind Technologies’s Privacy Policy and all relevant laws.</p>
<p className='font-300 text-start mt-4'><strong>12. TERMINATION OF CONTRACT</strong></p>
<p className='font-300 text-start mt-4'>12.1 The first party may immediately (or with effect from any later date), terminate this Contract by written notice to the other party if:</p>
<p className='font-300 text-start mt-4'>a) the other party materially breaches this Contract or any other Contract between the parties and fails to make remedy of such breach within 5 Business Days of receipt of notice from the first party specifying the breach and requiring it to be remedied;</p>
<p className='font-300 text-start mt-4'>b) a controller, liquidator, receiver, administrator or other like person is appointed for the whole or substantially the whole of the other party’s assets, undertaking or business;</p>
<p className='font-300 text-start mt-4'>c) a mortgagee or chargee enforces a security, held in respect of the whole or substantially the whole of the other party’s assets undertaking or business;</p>
<p className='font-300 text-start mt-4'>d) a scheme of arrangement between the other party and its creditors is entered into; or</p>
<p className='font-300 text-start mt-4'>e) the other party becomes insolvent or is otherwise unable to pay its debts as and when they become due.</p>
<p className='font-300 text-start mt-4'>12.2 According to conditions applied,The Client may appoint the Magicmind Technologies Employee on a trial basis which is a minimum of 1 hour and a maximum of 10 days. During the trial period The Client may terminate the Magicmind Technologies Employee immediately or at the end of the trial period subject to The Client pre-paying for the period that the Magicmind Technologies Employee has worked for The Client.</p>
<p className='font-300 text-start mt-4'>12.3 In situation of The Client complying with the provisions set out in Schedule 1, if The Client appoints the Magicmind Technologies Employee other than on a trial basis, The Client may terminate the Magicmind Technologies Employee in the following manner:</p>
<p className='font-300 text-start mt-4'>(a) if the Magicmind Employee has been appointed by The Client for less than 6 months from his or her appointment. Then a period of 30 days notice is required;</p>
<p className='font-300 text-start mt-4'>(b) if the Employee has been appointed by The Client for more than 6 months, a period of 60 days notice is required;</p>
<p className='font-300 text-start mt-4'>12.4 All provisions of this agreement that are capable of having effect will survive its termination.</p>
<p className='font-300 text-start mt-4'>12.5 The expiry of this contract or termination of this Contract will not affect or limit any accrued rights of the parties.</p>
<p className='font-300 text-start mt-4'>12.6 Upon termination:</p>
<p className='font-300 text-start mt-4'>(a) The Client will return to Magicmind Technologies all Magicmind Technologies’s Confidential Information, copies of Magicmind Technologies’s Intellectual Property Rights and any other property Magicmind Technologies has provided to The Client during the Contract; and</p>
<p className='font-300 text-start mt-4'>(b) Magicmind Technologies and/or the Magicmind Technologies Employee will return to The Client all The Client’s Confidential Information, copies of The Client’s Intellectual Property Rights and any other property The Client has provided to Remove Staff and/or the Magicmind Technologies Employee during the Contract.</p>
<p className='font-300 text-start mt-4'><strong>13. ACCEPTANCE</strong></p>
<p className='font-300 text-start mt-4'>The Client accepts the scope, terms and conditions of this Contract and as set out within the terms and conditions on Magicmind Technologies’s website at www.magicminds.io, which by incorporation form part of this Contract by:</p>
<p className='font-300 text-start mt-4'>(a) The Client making a Request for Services; or</p>
<p className='font-300 text-start mt-4'>(b) The Client appointing Magicmind Technologies to provide services to The Client; or</p>
<p className='font-300 text-start mt-4'>(c) The Client selecting a Magicmind Technologies Employee ; or</p>
<p className='font-300 text-start mt-4'>(d) The Client making a payment of any amounts listed under Schedule 1, including but not limited to set up fees, monthly fees and/or any payment of Magicmind Technologies invoices (whichever is the earliest); or</p>
<p className='font-300 text-start mt-4'>(e) The Client making its acceptance electronically or in any other format provided by Magicmind Technologies.</p>
<p className='font-300 text-start mt-4'><strong>14. DUTY OF CONFIDENTIALITY</strong></p>
<p className='font-300 text-start mt-4'>a. Both Magicmind Technologies and the Magicmind Technologies Employee agree that during this Contract they may each have access to Confidential Information of The Client.</p>
<p className='font-300 text-start mt-4'>b. Magicmind Technologies and the Magicmind Technologies Employee undertake not to disclose, use or deal with any Confidential Information regarding The Client except:</p>
<p className='font-300 text-start mt-4'>1. for providing the Services;</p>
<p className='font-300 text-start mt-4'>2. when required to do so by law; or</p>
<p className='font-300 text-start mt-4'>3. with the written consent of the Client.</p>
<p className='font-300 text-start mt-4'>c. Confidential Information shall include, but not be limited to, any information, which relates to the business, processes, operation, methodology, communications, information, techniques, services, pricing, strategies, programming or research or any information that Magicmind Technologies or the Magicmind Technologies Provider acquired during the term of this Contract.</p>
<p className='font-300 text-start mt-4'>d. On the termination of this Contract, or earlier if required to do so by either party, the Magicmind Technologies Employee shall return to the Client any material containing Confidential Information then in his or her possession, or destroy or delete any copies of such material in his or her possession. Magicmind Technologies Employee must carry out an immediate hand over of all existing tasks.</p>
<p className='font-300 text-start mt-4'><strong>FEE STRUCTURE- SCHEDULE 1</strong></p>
<p className='font-300 text-start mt-4'><strong>Regular Billing System</strong></p>
<p className='font-300 text-start mt-4'>1. If The Client appoints a Magicmind Technologies Employee :</p>
<p className='font-300 text-start mt-4'>(a) after the trial period has been completed; or</p>
<p className='font-300 text-start mt-4'>(b) on a basis other than on a trial basis; or</p>
<p className='font-300 text-start mt-4'>(c) Request for Services</p>
<p className='font-300 text-start mt-4'>Then The Client must use the Regular Billing System.</p>
<p className='font-300 text-start mt-4'>2. The Regular Billing System applies to The Client who appoints the Magicmind Technologies Employee on a basis on monthly rates.</p>
<p className='font-300 text-start mt-4'>3. The Client must pay Magicmind Technologies for the Services in advance by using either of the following 2 options:</p>
<p className='font-300 text-start mt-4'>(a) prepaid payments</p>
<p className='font-300 text-start mt-4'>(b) regular monthly payments</p>
<p className='font-300 text-start mt-4'>Via</p>
<p className='font-300 text-start mt-4'>– Credit Card Online Payment</p>
<p className='font-300 text-start mt-4'>– Direct Debit of Credit Cards and Bank Accounts</p>
<p className='font-300 text-start mt-4'>– Electronic Fund Transfer</p>
<p className='font-300 text-start mt-4'>5. Each payment is to be made in advance or on an agreed fixed monthly date</p>
<p className='font-300 text-start mt-4'>6. The Clients are able to make payments via electronic fund transfer (EFT) into Magicmind Technologies’s INR bank accounts.</p>
<p className='font-300 text-start mt-4'>7. If there is a situation of any overtime payments due on Regular Monthly Payments, the amount of overtime chargeable to The Client will be included in the following month’s invoice.</p>
<p className='font-300 text-start mt-4'>8. The Client at any time may request a refund of the amount held in the Client’s Available Balance subject to a 2 week refund processing period.</p>
<p className='font-300 text-start mt-4'><strong>Insufficient funds</strong></p>
<p className='font-300 text-start mt-4'>9. If:</p>
<p className='font-300 text-start mt-4'>(a) The Available Balance falls below zero; or</p>
<p className='font-300 text-start mt-4'>(b) The Client does not make any payment under the Prepaid Payment Option and/or the Regular Monthly Payment Option.</p>
{/* </div>
</div>
</section> */}
					</Col>{' '}
				</Row>

			




				
			</Container>
		
			<Container className='mmt-papercard-container w-100 h-100 my-5 pt-5 '>
				
				
			
			</Container>
		</div>
	);
};

export default TermsConditionsCards;
