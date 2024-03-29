import React from "react";
import cardimg from "../assets/img/rectangle60.png";
import person from "../assets/img/people.svg";
import bed from "../assets/img/icon_bed.svg";
import entertaiment from "../assets/img/icon_entertainment.svg";
import stroke from "../assets/img/icon-stroke.svg";
import basseyn from "../assets/img/icon_waterpool.svg";

function ProductCard({file, price, title, room, onCardClick, view}) {
  return (
    <div className="catalog_card firebase" onClick={onCardClick}>
      <img className="card_img" src={file} alt="" />
      <div className="card_info">
        <div className="card_title">
          <p>{title}</p>
          <p>view: {view}</p>
          <div className="person">
            <img src={person} alt="" />
            до 30
          </div>
        </div>

        <div className="card_conven">
          <div className="card_conven_text">
            <p>
              <img src={bed} alt="" />{room} спальных мест
            </p>
            <p>
              <img src={stroke} alt="" /> Баня
            </p>
            <p>
              <img src={basseyn} alt="" />
              Бассейн
            </p>
            <p>
              <img src={entertaiment} alt="" />
              Развлечения
            </p>
          </div>

          <div className="card_conven_price">
            <div className="price_day">
              <p className="day">Будни</p>
              <p className="price">от {price} ₽</p>
            </div>
            <div className="price_day">
              <p className="day">Пятница</p>
              <p className="price">от 10 000 ₽</p>
            </div>
            <div className="price_day">
              <p className="day">Суббота</p>
              <p className="price">от 12 000 ₽</p>
            </div>
            <div className="price_day">
              <p className="day">Воскресенье</p>
              <p className="price">от 12 000 ₽</p>
            </div>
          </div>
        </div>

        <div className="card_navigation">
          <button>Показать на карте</button>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
