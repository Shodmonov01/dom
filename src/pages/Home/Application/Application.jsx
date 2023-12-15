import React from 'react';
import './application.scss';

export const Application = () => {
	return (
		<div className='application-page'>
			<div className='containers'>
				<div className='application-wrap'>
					<h3 className='application-title'>Хотите сдать дом?</h3>
					<p className='application-desc'>Оставьте заявку и мы свяжемся с вами для уточнения деталей</p>

                    <a className='application-link' href="#">Оставить заявку</a>
				</div>
			</div>
		</div>
	);
};
