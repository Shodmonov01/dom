import React from 'react';
import './service.scss';
import service1 from '../../../assets/img/service-1.svg';
import service2 from '../../../assets/img/service-2.svg';
import service3 from '../../../assets/img/service-3.svg';
import service4 from '../../../assets/img/service-4.svg';
import service5 from '../../../assets/img/service-5.svg';
import service6 from '../../../assets/img/service-6.svg';

export const Service = () => {
	return (
		<div className='service-page'>
			<div className='containers'>
				<h3 className='service-title'>Можем организовать для Вас</h3>
				<div className='row g-4'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service1} alt='' /> Кейтеринг
							</p>
						</div>
					</div>

					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service2} alt='' /> Кейтеринг
							</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service3} alt='' /> Кейтеринг
							</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service4} alt='' /> Кейтеринг
							</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service5} alt='' /> Кейтеринг
							</p>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4'>
						<div className='service-item'>
							<p className='service-desc'>
								<img className='service-img' src={service6} alt='' /> Кейтеринг
							</p>
						</div>
					</div>
				</div>
				<a className='service-btn' href="#">Узнать подробнее</a>
			</div>
		</div>
	);
};
