import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Header } from "../../../components/Header/Header";
import MultipleItems from "./Carousel/Carousel";
import "./heroBanner.scss";
import RangeSlider from "react-range-slider-input";
import "../../../../node_modules/react-range-slider-input/dist/style.css";
import youtube from "../../../assets/img/youtube.svg";
import instagram from "../../../assets/img/instagram.svg";
import wk from "../../../assets/img/vk.svg";
import whatsapp from "../../../assets/img/whatsapp.svg";
import telegram from "../../../assets/img/telegram.svg";
import "../../../app.scss";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { FamousCatalog } from "../FamousCatalog/FamousCatalog";

export const HomeBanner = () => {
  const navigate = useNavigate();

  const [numberOfPerson, setNumberOfPerson] = useState( );


  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(150000);
  const [priceRange, setPriceRange] = useState([minVal, maxVal]); // Добавьте объявление priceRange


  const minNumber = minVal.toLocaleString().replace(/,/g, " ");
  const maxNumber = maxVal.toLocaleString().replace(/,/g, "");

  // Define fade-in animations
  const heroRightPageProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  const heroLeftPageProps = useSpring({     opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(20%)" },
    delay:2000, });

  // Define animations for title and description
  const titleAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-20%)" },
    delay:2000,
  });
  const descAnimation = useSpring({
    opacity: 2,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20%)" },
    delay:3000,

  });


  const handleNumberOfPeopleChange = (e) => {
    // Обновляем состояние при изменении значения инпута
    setNumberOfPerson(parseInt(e.target.value));
  };

  const handleSearch = () => {
    navigate("/catalog", {
      numberOfPerson,
      priceRange: [minVal, maxVal],
    });
  };
  console.log(minVal, maxVal);
  console.log(priceRange);

  console.log(numberOfPerson);

  return (
    <div className="hero-banner">
      <div className="containers">
        <animated.div style={heroRightPageProps}>
          <div className="">
            <div className="row hero-page">
              <animated.div className="col-7 hero-right-page">
                <animated.h3 className="hero-title" style={titleAnimation}>
                  Аренда коттеджей и домов в Казани
                </animated.h3>
                <div className="desc-wrap">
                  <animated.p className="hero-desc" style={descAnimation}>
                    Найдите идеальный вариант сами или предоставьте это нам
                  </animated.p>
                </div>

        <animated className="hero-desc" style={descAnimation}><MultipleItems  /></animated>
                

                <div className="hero-icons">
                  <animated.a
                    href="#"
                    target="_blank"
                    style={useSpring({
                      opacity: 1,
                      from: { opacity: 0 },
                      delay: 900,
                    })}
                  >
                    <img src={youtube} alt="" />
                  </animated.a>
                  <animated.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={useSpring({
                      opacity: 1,
                      from: { opacity: 0 },
                      delay: 1000,
                    })}
                  >
                    <img src={instagram} alt="" />
                  </animated.a>
                  <animated.a
                    href="#"
                    target="_blank"
                    style={useSpring({
                      opacity: 1,
                      from: { opacity: 0 },
                      delay: 1100,
                    })}
                  >
                    <img src={wk} alt="" />
                  </animated.a>
                  <animated.a
                    href="#"
                    target="_blank"
                    style={useSpring({
                      opacity: 1,
                      from: { opacity: 0 },
                      delay: 1200,
                    })}
                  >
                    <img src={whatsapp} alt="" />
                  </animated.a>
                  <animated.a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={useSpring({
                      opacity: 1,
                      from: { opacity: 0 },
                      delay: 1300,
                    })}
                  >
                    <img src={telegram} alt="" />
                  </animated.a>
                </div>
              </animated.div>
              <animated.div
                className="col-5 hero-left-page"
                style={heroLeftPageProps}
              >
                <form className="hero-form">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="m-0 input-label">Въезд</p>
                    <p className="m-0 input-label">Отъезд</p>
                  </div>
                  <div className="input-1">
                    <input className="input-ot" type="date" placeholder="От" />
                    <input className="input-do" type="date" placeholder="До" />
                  </div>
                  <label className="mb-2" htmlFor="number">
                    <span className="input-label">Количество человек</span>
                  </label>
                  <input
                    className="input-2"
                    type="text"
                    placeholder="12"
                    id="number"
                    value={numberOfPerson}
                    onChange={handleNumberOfPeopleChange}
                  />
                  <RangeSlider
                    min="0"
                    max="150000"
                    defaultValue={[0, 150000]}
                    onInput={(e) => {
                      setMinVal(e[0]);
                      setMaxVal(e[1]);
                    }}
                  />
                  <div className="d-flex justify-content-between mt-3">
                    <p className="input-label">{minNumber} ₽</p>
                    <p className="input-label">{maxNumber} ₽</p>
                  </div>
                  {/* <FamousCatalog min={minNumber}/> */}

                  {/* <NavLink to="/catalog"> */}
                    <button onClick={handleSearch} className="hero-button">Найти</button>
                  {/* </NavLink> */}
                </form>
              </animated.div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};
