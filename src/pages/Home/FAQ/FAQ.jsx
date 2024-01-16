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
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
