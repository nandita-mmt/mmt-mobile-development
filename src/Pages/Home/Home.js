import React, { lazy } from 'react';

import './Home.scss';

// Lazy Loader Import


const HomeBanner = lazy(() => {
	return Promise.all([
		import('../../Components/HomeBanner/HomeBanner'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});

const DigitalTransformation = lazy(() => {
	return Promise.all([
		import('../../Components/DigitalTransformation/DigitalTransformation'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});

const HomeServices = lazy(() => {
	return Promise.all([
		import('../../Components/HomeServices/HomeServices'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeTechStack = lazy(() => {
	return Promise.all([
		import('../../Components/HomeTechStack/HomeTechStack'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeIndustries = lazy(() => {
	return Promise.all([
		import('../../Components/HomeIndustries/HomeIndustries'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeProducts = lazy(() => {
	return Promise.all([
		import('../../Components/HomeProducts/HomeProducts'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeHowWeWork = lazy(() => {
	return Promise.all([
		import('../../Components/HomeHowWeWork/HomeHowWeWork'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeOurClient = lazy(() => {
	return Promise.all([
		import('../../Components/HomeOurClient/HomeOurClient'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});
const HomeFeatureProduct = lazy(() => {
	return Promise.all([
		import('../../Components/HomeFeatureProduct/HomeFeatureProduct'),
		new Promise(resolve => setTimeout(resolve, 3000)),
	]).then(([moduleExports]) => moduleExports);
});



const Home = () => (
	<div className='Home'>
		<HomeBanner />
		<DigitalTransformation />
		<HomeServices />
		<HomeTechStack />
		<HomeIndustries />
		<HomeProducts />
		<HomeHowWeWork />
		<HomeOurClient />
		<HomeFeatureProduct />
	</div>
);
export default Home;
