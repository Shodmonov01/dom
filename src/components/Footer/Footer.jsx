import React from 'react';
import './footer.scss';
import footer_logo from '../../assets/img/logo_dark.svg';
import youtube from '../../assets/img/youtube.svg';
import instagram from '../../assets/img/instagram.svg';
import wk from '../../assets/img/vk.svg';
import whatsapp from '../../assets/img/whatsapp.svg';
import telegram from '../../assets/img/telegram.svg';
import burger from '../../assets/img/icon_burger.svg';

export const Footer = () => {
	return (
		<div className='footer-page'>
			<div className='containers'>
				<div className='footer'>
					<div className='row g-5'>
						<div className='col-12 col-sm-12 col-md-3 col-lg-3'>
							<div className='logo-wrap'>
								<img width='180px' src={footer_logo} alt='' />
								<div className='logo-text'>
									<p>Политика конфиденциальности</p>
									<p>Согласие на обработку персональных данных</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-sm-12 col-md-3 col-lg-3'>
							<h3 className='footer-catalog'>Каталог</h3>
							<ul className='footer-catalog-list'>
								<li className='footer-catalog-item'>
									<a href='#'>С бассейном</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Семейные и уютные</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Хиты продаж</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>Под свадьбы и корпоративы</a>
								</li>
								<li className='footer-catalog-item'>
									<a href='#'>С русской баней на дровах</a>
								</li>
							</ul>
						</div>
						<div className='col-12 col-sm-12 col-md-3 col-lg-3'>
							<a href='#' className='footer-desc'>
								Сотрудничество
							</a>
							<a href='#' className='footer-desc'>
								Частые вопросы
							</a>
						</div>
						<div className='col-12 col-sm-12 col-md-3 col-lg-3'>
							<a href='#' className='text-decoration-none d-flex align-items-center'>
								<i class='fa-sharp fa-solid fa-phone me-2 text-white'></i>{' '}
								<span className='footer-phone'>+998919104910</span>
							</a>
							<div className='off-hero-icons'>
								<a href='#' target='_blank'>
									<img src={youtube} alt='' />
								</a>
								<a
									href='http://instagram.com/khusanov_o2'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={instagram} alt='' />
								</a>
								<a href='#' target='_blank'>
									<img src={wk} alt='' />
								</a>
								<a href='#' target='_blank'>
									<img src={whatsapp} alt='' />
								</a>
								<a
									href='http://t.me/khusanov_o2'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={telegram} alt='' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
