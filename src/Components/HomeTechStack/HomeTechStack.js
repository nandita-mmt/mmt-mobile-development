import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import './HomeTechStack.scss';
import T01 from "../../Assets/Images/Home/t-01.png";
import T02 from "../../Assets/Images/Home/t-02.png";
import T03 from "../../Assets/Images/Home/t-03.png";
import T04 from "../../Assets/Images/Home/t-04.png";
import T05 from "../../Assets/Images/Home/t-05.png";
import T06 from "../../Assets/Images/Home/t-06.png";
import T07 from "../../Assets/Images/Home/t-07.png";
import T08 from "../../Assets/Images/Home/t-08.png";
import T09 from "../../Assets/Images/Home/t-09.png";
import T10 from "../../Assets/Images/Home/t-10.png";
import T11 from "../../Assets/Images/Home/t-11.png";
import T12 from "../../Assets/Images/Home/t-12.png";
import T13 from "../../Assets/Images/Home/t-13.png";
import T14 from "../../Assets/Images/Home/t-14.png";
import T15 from "../../Assets/Images/Home/t-15.png";
import T16 from "../../Assets/Images/Home/t-16.png";
import T17 from "../../Assets/Images/Home/t-17.png";
import T18 from "../../Assets/Images/Home/t-18.png";
import T19 from "../../Assets/Images/Home/t-19.png";
import T20 from "../../Assets/Images/Home/t-20.png";
import T21 from "../../Assets/Images/Home/t-21.png";
import T22 from "../../Assets/Images/Home/t-22.png";
import T23 from "../../Assets/Images/Home/t-23.png";

const HomeTechStack = () => {
    const [selectedUUID,setSelectedUUID] = React.useState(['a'])
    const getSelectedUUID = (uuid)=>{
        setSelectedUUID(uuid)
    }
	return (<section className="tech">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 heading">
                            <h2>Our Tech Stack</h2>
                            <p>We are a technology-driven company extremely selective about the software, platform, database, and framework choices to create the right blend of each of them and then deliver wonders.</p>
                        </div>
                        <div className="col-lg-12">
                            <Accordion preExpanded={selectedUUID} onChange={getSelectedUUID} allowZeroExpanded={true}>
                                <AccordionItem uuid='a' className='card'>
                                    <AccordionItemHeading className='card-header'>
                                        <AccordionItemButton className=''>
                                            <h5 className="mb-0">
                                                <button className={`btn btn-link ${selectedUUID[0]!== 'a' ? 'collapsed':''}`} >
                                                <h4>{`{`}  <font>95</font> Frontend DEVELOPERS  {`}`} <span>Technology</span></h4>
                                                </button>
                                            </h5>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3 order-lg-1 order-md-2 order-2">
                                                    <NavLink to="">Explore now</NavLink>
                                                </div>
                                                <div className="col-lg-9 order-lg-2 order-md-1 order-1">
                                                    <ul className="d-flex align-items-center flex-wrap">
                                                        <li><img src={T01} alt=""/>HTML</li>
                                                        <li><img src={T02} alt=""/>CSS</li>
                                                        <li><img src={T03} alt=""/>jQuery</li>
                                                        <li><img src={T04} alt=""/>JavaScript</li>
                                                        <li><img src={T05} alt=""/>Ajax</li>
                                                        <li><img src={T11} alt=""/>Typescript</li>
                                                        <li><img src={T07} alt=""/>Next.js</li>
                                                        <li><img src={T06} alt=""/>ReactJS</li>
                                                        <li><img src={T08} alt=""/>VueJS</li>
                                                        <li><img src={T09} alt=""/>Node Js</li>
                                                        <li><img src={T10} alt=""/>Angular Js</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid='b' className='card'>
                                    <AccordionItemHeading className='card-header'>
                                        <AccordionItemButton className=''>
                                            <h5 className="mb-0">
                                                <button className={`btn btn-link ${selectedUUID[0]!== 'b' ? 'collapsed':''}`}>
                                                <h4>{`{`}  <font>20</font> Backend DEVELOPERS  {`}`} <span>Technology</span></h4>
                                                </button>
                                            </h5>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3 order-lg-1 order-md-2 order-2">
                                                    <NavLink to="">Explore now</NavLink>
                                                </div>
                                                <div className="col-lg-9 order-lg-2 order-md-1 order-1">
                                                    <ul className="d-flex align-items-center flex-wrap">
                                                        <li><img src={T16} alt=""/>Wordpress</li>
                                                        <li><img src={T17} alt=""/>Magento</li>
                                                        <li><img src={T18} alt=""/>Laravel</li>
                                                        <li><img src={T19} alt=""/>Express</li>
                                                        <li><img src={T20} alt=""/>PHP</li>
                                                        <li><img src={T21} alt=""/>Microsoft Azure</li>
                                                        <li><img src={T22} alt=""/>Amazon Web Services</li>
                                                        <li><img src={T23} alt=""/>Google App Engine</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem uuid='c' className='card'>
                                    <AccordionItemHeading className='card-header'>
                                        <AccordionItemButton className=''>
                                            <h5 className="mb-0">
                                                <button className={`btn btn-link ${selectedUUID[0]!== 'c' ? 'collapsed':''}`}>
                                                <h4>{`{`}  <font>10</font> Mobile App DEVELOPERS  {`}`} <span>Technology</span></h4>
                                                </button>
                                            </h5>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3 order-lg-1 order-md-2 order-2">
                                                    <NavLink to="">Explore now</NavLink>
                                                </div>
                                                <div className="col-lg-9 order-lg-2 order-md-1 order-1">
                                                    <ul className="d-flex align-items-center flex-wrap">
                                                        <li><img src={T14} alt=""/>Ionic</li>
                                                        <li><img src={T13} alt=""/>Swift</li>
                                                        <li><img src={T12} alt=""/>Kotlin</li>
                                                        <li><img src={T15} alt=""/>ObjC</li>
                                                        <li><img src={T06} alt=""/>React Native</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                           
                        </div>
                    </div>
                </div>			
            </section>)
};
export default HomeTechStack;