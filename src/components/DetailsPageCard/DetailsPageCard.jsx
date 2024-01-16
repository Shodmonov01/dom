import React from "react";
import cardimg from "../../assets/img/rectangle60.png";
import people from "../../assets/img/people.svg";
import bed from "../../assets/img/icon_bed.svg";
import entertaiment from "../../assets/img/icon_entertainment.svg";
import stroke from "../../assets/img/icon-stroke.svg";
import basseyn from "../../assets/img/icon_waterpool.svg";
import heart from "../../assets/img/heart.svg";
import { LiaEyeSolid } from "react-icons/lia";

import "./DetailsPageCard.scss";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function DetailsPageCard({
  addToCart,
  file,
  price,
  title,
  room,
  view,
  onCardClick,
}) {
  const handleAddToCart = () => {
    addToCart({ file, price, title, room });
  };

  const notify = () =>
    toast.info("Добавлена в избренное !", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">
        <div className="details-card">
          <div className="position-relative">
            <img
              src={file}
              className="card-img-top"
              alt="Fissure in Sandstone"
            />
            <div
              className="favorite"
              onClick={() => {
                handleAddToCart();
                notify();
              }}
            >
              <ToastContainer />

              <img src={heart} alt="" />
            </div>
            <div className="number-of-poeple-det">
              <img src={people} alt="" />
              до 12
            </div>
          </div>
          <div className="details-body">
            <div
              className="top-title"
              style={{ display: "flex", justifyContent: "space-between", width:'740px' }}
            >
              <h5 className="card-catalog-title">{title}</h5>
              <p className="card-catalog-price m-0">
                от {price} ₽ / сутки
              </p>
            </div>
              <div className="det-card-catalog">
              <p className="card-catalog-text">
              <img src={bed} alt="" /> {room} спальных мест
            </p>
            <p className="card-catalog-text">
              <img src={entertaiment} alt="" /> Настольный теннис
            </p>
            <p className="card-catalog-text">
              <img src={stroke} alt="" /> Бассейн
            </p>
            <p className="card-catalog-text">
              <img src={basseyn} alt="" /> Сауна{" "}
            </p>
              </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPageCard;
