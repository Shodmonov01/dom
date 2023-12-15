import React from 'react';
import './about.scss';
import about1 from '../../../assets/img/about-1.svg';
import about2 from '../../../assets/img/about-2.svg';
import about3 from '../../../assets/img/about-3.svg';
import about4 from '../../../assets/img/about-4.svg';

export const About = () => {
	return (
		<div className='about-page'>
			<div className='about-wrap'>
				<div className='containers'>
					<h3 className='about-title'>О нас</h3>

					<div className='row g-4'>
						<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
							<img className='mb-3' src={about1} alt='' />
							<p className='about-desc'>
								Работаем с юридическими и физическими лицами
							</p>
						</div>
						<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
							<img className='mb-3' src={about2} alt='' />
							<p className='about-desc'>
								Бесплатный подбор, честные консультации и открытость к сотрудничеству
							</p>
						</div>
						<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
							<img className='mb-3' src={about3} alt='' />
							<p className='about-desc'>
								Работаем с 2014 года. Консультируем 30-80 человек в сутки, заселяем от 3
								до 5 компаний в день. Помогли более 21 000 клиентам
							</p>
						</div>
						<div className='col-12 col-sm-6 col-md-6 col-lg-3'>
							<img className='mb-3' src={about4} alt='' />
							<p className='about-desc'>
								Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
