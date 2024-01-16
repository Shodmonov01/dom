import React from "react";
import "./famous.scss";

import { useEffect, useState } from "react";
import { db, auth, storage } from "../../../Firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import FamousCatalogCard from "../../../components/FamousCatalogCard";
import { onAuthStateChanged } from "firebase/auth";

import { NavLink, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "./famous.scss";

export const FamousCatalog = () => {
  const [domikList, setDomikList] = useState([]);
  const [user, setUser] = useState(null);
  const [filteredDomikList, setFilteredDomikList] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const menuCollectionRef = collection(db, "domiktut");

  const navigate = useNavigate();

  // получаем данные
  const getDomikList = async () => {
    try {
      //функция Firebase, которая асинхронно извлекает все документы из коллекции, указанной в menuCollectionRef.
      //await - используется для ожидания завершения этой асинхронной операции, и результат сохраняется в переменной data
      const data = await getDocs(menuCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDomikList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDomikList();
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribeAuth();
  }, []);

  const addToCart = async (domiktut) => {
    if (user) {
      const cartRef = collection(db, `Cart ${user.uid}`);
      try {
        const docRef = await addDoc(cartRef, domiktut);
        const addedDocId = docRef.id;
        console.log("Успешно добавлено в корзину. ID документа:", addedDocId);
      } catch (error) {
        console.error("Ошибка при добавлении в корзину:", error);
      }
    } else {
      navigate("/login");
    }
  };

  // const handleCardClick = async (domikId) => {

  //   try {
  //     // Получение ссылки на документ "domiktut" по его ID.
  //     const domikDocRef = doc(db, "domiktut", domikId);
  //     // Обновление значения "view" в документе "domiktut" в Firebase.
  //     await updateDoc(domikDocRef, {
  //       view: domikList.find((domik) => domik.id === domikId).view++,
  //     });
  //   } catch (err) {
  //     // Обработка ошибок и вывод их в консоль.
  //     console.error(err);
  //   }
  // };

  const handleCardClick = async (domikId) => {
    try {
      const domikDocRef = doc(db, "domiktut", domikId);
      await updateDoc(domikDocRef, {
        view: domikList.find((domik) => domik.id === domikId).view + 1,
      });

      // Переход на страницу деталей продукта с использованием navigate
      navigate(`/${domikList.find((domik) => domik.id === domikId).id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="famous-category" data-aos="fade-up">
      <div className="containers">
        <h3 className="famous-title">Популярное в каталоге</h3>
        <div className="row g-4">
          {domikList?.map((domiktut, index) => (
            <FamousCatalogCard
              key={index}
              view={domiktut.view}
              title={domiktut.title}
              price={domiktut.price}
              file={domiktut.file}
              room={domiktut.room}
              addToCart={() => addToCart(domiktut)}
              onCardClick={() => handleCardClick(domiktut.id)}
              data-aos="fade-up"
              data-aos-delay={(index + 3) * 5500}
            />
          ))}
        </div>
        <NavLink
          className="famous-category-btn"
          to={'/catalog'}
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Перейти в каталог
        </NavLink>
      </div>
    </div>
  );
};
