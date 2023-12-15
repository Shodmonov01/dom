import React from "react";
import "./faq.scss";

export const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="containers">
        <h3 className="faq-title">Частые вопросы</h3>
        <div class="">
          <div className="accordion">
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">Сколько стоят Ваши услуги?</p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">Как происходит бронирование?</p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">Какая сумма предоплаты нужна?</p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">
                  Можно ли разбить предоплату на несколько частей?
                </p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">Как работаете с юр. лицами?</p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">
                  Можно ли приехать на просмотр?
                </p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">
                  Какое время заезда и выезда в дом и есть ли возможность
                  сдвинуть заезд или выезд?
                </p>
                <p>+</p>
              </div>
            </div>
            <div className="accordion-item">
              <div id="accordion-button">
                <p className="accordion-title">Зачем нужен залог? </p>
                <p>+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
