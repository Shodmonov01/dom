import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";
import about1 from "../../../assets/img/about-1.svg";
import about2 from "../../../assets/img/about-2.svg";
import about3 from "../../../assets/img/about-3.svg";
import about4 from "../../../assets/img/about-4.svg";

export const About = () => {
  useEffect(() => {
    AOS.init({ once: true }); // инициализация библиотеки aos
  }, []);

  return (
    <div className="about-page">
      <div className="about-wrap">
        <div className="containers">
          <h3 className="about-title" data-aos="fade-up">
            О нас
          </h3>

          <div className="row g-4">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="true"
              data-aos-mirror="true"
              data-aos-anchor=".about-page"
            >
              <img
                className="mb-3"
                src={about1}
                alt=""
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-anchor-placement="center-bottom"
              />
              <p
                className="about-desc"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Работаем с юридическими и физическими лицами
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="true"
              data-aos-mirror="true"
              data-aos-anchor=".about-page"
            >
              <img
                className="mb-3"
                src={about2}
                alt=""
                data-aos="zoom-out"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-anchor-placement="center-bottom"
              />
              <p
                className="about-desc"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Бесплатный подбор, честные консультации и открытость к
                сотрудничеству
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-offset="100"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="true"
              data-aos-mirror="true"
              data-aos-anchor=".about-page"
            >
              <img
                className="mb-3"
                src={about3}
                alt=""
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-anchor-placement="center-bottom"
              />
              <p
                className="about-desc"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Работаем с 2014 года. Консультируем 30-80 человек в сутки,
                заселяем от 3 до 5 компаний в день. Помогли более 21 000
                клиентам
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-3"
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-offset="100"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="true"
              data-aos-mirror="true"
              data-aos-anchor=".about-page"
            >
              <img
                className="mb-3"
                src={about4}
                alt=""
                data-aos="fade-up-right"
                data-aos-duration="800"
                data-aos-delay="200"
                data-aos-anchor-placement="center-bottom"
              />
              <p
                className="about-desc"
                data-aos="flip-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Средний рейтинг компании 4,5 из 5 (Avito, Google, Отзовик)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
