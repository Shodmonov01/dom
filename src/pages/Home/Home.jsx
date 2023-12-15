import React from 'react';
import { About } from './About/About';
import { Application } from './Application/Application';
import { FamousCatalog } from './FamousCatalog/FamousCatalog';
import { FAQ } from './FAQ/FAQ.jsx';
import { HomeBanner } from './HomeBanner/HomeBanner';
import { Service } from './Service/Service';

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
