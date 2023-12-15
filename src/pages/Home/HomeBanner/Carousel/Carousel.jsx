import React, { Component } from 'react';
import Slider from 'react-slick';
import photo1 from '../../../../assets/img/photo 1.png';
import photo2 from '../../../../assets/img/photo 2.png'
import photo3 from '../../../../assets/img/photo 3.png'
import './carousel.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
		};
		return (
			<div>
				<Slider {...settings} className='m-0'>
					<div>
						<img src={photo1} alt='' />
						<h3 className='carousel-title'>С бассейном</h3>
					</div>
					<div>
						<img src={photo2} alt='' />
						<h3 className='carousel-title'>Семейные и уютные</h3>
					</div>
					<div>
						<img src={photo3} alt='' />
						<h3 className='carousel-title'>Хиты продаж</h3>
					</div>
					<div>
						<img src={photo1} alt='' />
						<h3 className='carousel-title'>С бассейном</h3>
					</div>
					<div>
						<img src={photo2} alt='' />
						<h3 className='carousel-title'>Семейные и уютные</h3>
					</div>
					<div>
						<img src={photo3} alt='' />
						<h3 className='carousel-title'>Хиты продаж</h3>
					</div>
				</Slider>
			</div>
		);
	}
}
