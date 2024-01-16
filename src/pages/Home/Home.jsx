import React from 'react';
import { About } from './About/About';
import { Application } from './Application/Application';
import { FamousCatalog } from './FamousCatalog/FamousCatalog';
import { FAQ } from './FAQ/FAQ.jsx';
import { Service } from './Service/Service';


import { HomeBanner } from './HomeBanner/HomeBanner.jsx';

export const Home = () => {

	return (
		<div className='home-page'>
			<HomeBanner />
			<About />
			<FamousCatalog />
			<Service />
			<FAQ />
			<Application />
		</div>
	);
};
