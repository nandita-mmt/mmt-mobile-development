import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/fonts/VLADIMIR.ttf';

// Library Import
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
// import ScrollTop from './Components/Hooks/ScrollTop/ScrollTop';

// Css Import
import './index.scss';
import ReactGA from "react-ga4";

ReactGA.initialize("AW-10895488614");
ReactGA.send("pageview");

ReactDOM.render(
	<React.Fragment>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			{/* <ScrollTop> */}
			<App />
			{/* </ScrollTop> */}
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// window.onload = function () {
// 	setTimeout(() => {
// 		window.scrollTo(0, 0);
// 	},100)
// }


window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
