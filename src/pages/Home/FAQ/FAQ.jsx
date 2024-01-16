import React from "react";
import "./faq.scss";
import { Collapse } from "antd";

const { Panel } = Collapse;

// import './faq'

export const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="containers">
        <h3 className="faq-title">Частые вопросы</h3>
        <div class="">
          <div className="accordion">
            <Collapse defaultActiveKey={["1"]}>
<<<<<<< HEAD
              <Panel header="Как происходит бронирование?" key="1">
                <p>
                  Бронирование происходит после внесения предоплаты 50% от суммы
                  аренды, предварительно можно приезать на осмотр дома или
                  провести онлайн показ (при наличии такой возможности).
                </p>
              </Panel>
              <Panel header="Какая сумма предоплаты нужна?" key="2">
                <p>
                  Стандарт предоплаты 50% от суммы аренды, если сумма аренды
                  большая, то можно уменьшить предоплату до 30%.
                </p>
              </Panel>
              <Panel
                header="Можно ли разбить предоплату на несколько частей?"
                key="3"
              >
                <p>
                  Можно, по возможности можно сделать все. В каждом случае нужно
                  общаться индивидуально как с клиентом, так и с собственником.
                </p>
              </Panel>
              <Panel header="Как работаете с юр.лицами?" key="4">
                <p>
                  У нас открыто ИП и мы можем предложить заключить с нами
                  агентский договор, на основании которого мы забронируем за
                  Вами коттедж и пример оплату за дом на наш расчётный счёт.
                  Более детально уточняйте у менеджера.
                </p>
              </Panel>
              <Panel header="Можно ли приехать на просмотр?" key="5">
                <p>Да, любой дом можно посмотреть.</p>
              </Panel>
              <Panel header="Зачем нужен залог?" key="6">
                <p>
                  Залог берётся администрацией коттеджа только во время
                  заселения в дом и возвращается при выезде из коттеджа. Сумма
                  залога и штраф лист указаны в договоре аренды.
                </p>
              </Panel>
              <Panel header="Сколько стоят в Ваши услуги?" key="6">
                <p>
                  Мы находимся с цене собственника и получаем комиссию только
                  после вашего отдыха. Мы не накручиваем больше от цены и
                  отдельно нам Вы ничего не платите.
                </p>
=======
              <Panel
                header="Как происходит бронирование?"
                key="1"
              >
                <p> Why is the moon sometimes out during the day?</p>
              </Panel>
              <Panel header="Какая сумма предоплаты нужна?" key="2">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
              </Panel>
              <Panel header="Можно ли разбить предоплату на несколько частей?" key="3">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
              </Panel>
              <Panel header="Как работаете с юр.лицами?" key="4">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
              </Panel>
              <Panel header="Можно ли приехать на просмотр?" key="5">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
              </Panel>
              <Panel header="Зачем нужен залог?" key="6">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
              </Panel>
              <Panel header="Сколько стоят в Ваши услуги?" key="6">
                <p>scnsbcsbjnc,sbnkjcbhk</p>
>>>>>>> 0169c0238ed0c99adc5b154071c970a19402cc42
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
