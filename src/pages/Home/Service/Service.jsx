import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './service.scss';
import service1 from '../../../assets/img/service-1.svg';
import service2 from '../../../assets/img/service-2.svg';
import service3 from '../../../assets/img/service-3.svg';
import service4 from '../../../assets/img/service-4.svg';
import service5 from '../../../assets/img/service-5.svg';
import service6 from '../../../assets/img/service-6.svg';

export const Service = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className='service-page' data-aos="fade-up" >
      <div className='containers'>
        <h3 className='service-title' data-aos="fade-up" data-aos-delay="2000">Можем организовать для Вас</h3>
        <div className='row g-4'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="200">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service1} alt='' data-aos="zoom-in" data-aos-delay="200" /> Кейтеринг
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="400">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service2} alt='' data-aos="zoom-in" data-aos-delay="400" /> Кейтеринг
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="600">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service3} alt='' data-aos="zoom-in" data-aos-delay="600" />Кейтеринг
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="800">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service4} alt='' data-aos="zoom-in" data-aos-delay="800" />Кейтеринг
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="1000">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service5} alt='' data-aos="zoom-in" data-aos-delay="1000" /> Кейтеринг
              </p>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4' data-aos="fade-up" data-aos-delay="1200">
            <div className='service-item'>
              <p className='service-desc' >
                <img className='service-img' src={service6} alt='' data-aos="zoom-in" data-aos-delay="1200" /> Кейтеринг
              </p>
            </div>
          </div>
        </div>
        <a className='service-btn' data-aos="fade-up" data-aos-delay="1400" href="#">Узнать подробнее</a>
      </div>




    </div>
  );
};
