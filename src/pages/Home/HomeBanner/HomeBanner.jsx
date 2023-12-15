import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import { Header } from '../../../components/Header/Header';
import MultipleItems from './Carousel/Carousel';
import './heroBanner.scss';
import RangeSlider from 'react-range-slider-input';
import '../../../../node_modules/react-range-slider-input/dist/style.css';

import youtube from '../../../assets/img/youtube.svg';
import instagram from '../../../assets/img/instagram.svg';
import wk from '../../../assets/img/vk.svg';
import whatsapp from '../../../assets/img/whatsapp.svg';
import telegram from '../../../assets/img/telegram.svg';
import '../../../app.scss'

export const HomeBanner = () => {
	const [minVal, setMinVal] = useState(0);
	const [maxVal, setMaxVal] = useState(150000);

	const minNumber = minVal.toLocaleString().replace(/,/g, ' ');
	const maxNumber = maxVal.toLocaleString().replace(/,/g, ' ');

	return (
		<div className='hero-banner'>
			<div className='containers'>
				{' '}
				<Header />
				<div className=''>
					<div className='row hero-page'>
						<div className='col-7 hero-right-page'>
							<h3 className='hero-title'>Аренда коттеджей и домов в Казани</h3>
							<div className='desc-wrap'>
								<p className='hero-desc'>
									Найдите идеальный вариант сами или предоставьте это нам
								</p>
							</div>
							<MultipleItems />

							<div className='hero-icons'>
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
						<div className='col-5 hero-left-page'>
							<form className='hero-form'>
								<div className='d-flex align-items-center justify-content-between mb-2'>
									<p className='m-0 input-label'>Въезд</p>
									<p className='m-0 input-label'>Отъезд</p>
								</div>
								<div className='input-1'>
									<input className='input-ot' type='text' placeholder='От' />
									<input className='input-do' type='text' placeholder='До' />
								</div>
								<label className='mb-2' htmlFor='number'>
									<span className='input-label'>Количество человек</span>
								</label>
								<input className='input-2' type='text' placeholder='12' id='number' />
								<RangeSlider
									min='0'
									max='150000'
									defaultValue={[0, 150000]}
									onInput={(e) => {
										setMinVal(e[0]);
										setMaxVal(e[1]);
									}}
								/>
								<div className='d-flex justify-content-between mt-3'>
									<p className='input-label'>{minNumber} ₽</p>
									<p className='input-label'>{maxNumber} ₽</p>
								</div>

								<button className='hero-button'>
								Найти
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
