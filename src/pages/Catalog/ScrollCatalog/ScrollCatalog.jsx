import React, { useEffect, useState } from "react";
import "./ScrollCatalog.scss"; 
import { db } from "../../../Firebase";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import ProductCard from "../../../components/ProductCard";

function ScrollCatalog() {

  const [domikList, setDomikList] = useState([]); // Хранит список объектов "domik".
  const [currentMarker, setCurrentMarker] = useState(null); // Хранит координаты выбранного маркера на карте.
  const [mapState, setMapState] = useState({
    center: [39.77, 64.42], // Координаты центра карты по умолчанию.
    zoom: 13, // Уровень масштабирования карты по умолчанию.
  });

  const menuCollectionRef = collection(db, "domiktut");

    // Использование хука useEffect для вызова функции getDomikList при монтировании компонента.
    useEffect(() => {
      getDomikList();
    }, []);

  // Определение асинхронной функции getDomikList для получения и обновления списка объектов "domik" из коллекции Firebase.
  const getDomikList = async () => {
    try {
      // Получение данных из коллекции Firestore.
      const data = await getDocs(menuCollectionRef);
      // Отображение данных, извлечение необходимой информации и добавление свойства 'id'.
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Обновление состояния domikList отфильтрованными данными.
      setDomikList(filteredData);
    } catch (err) {
      // Обработка ошибок и вывод их в консоль.
      console.error(err);
    }
  };

  // Определение функции handleCardClick для обработки события клика на карточке продукта.
  // Устанавливает текущий маркер на карте и обновляет состояние карты.
  // const handleCardClick = (coordinates) => {
  //   setCurrentMarker(coordinates);
  //   // Установка состояния карты с выбранными координатами и уровнем масштабирования по умолчанию.
  //   setMapState({
  //     center: coordinates,
  //     zoom: 13,
  //   });
  // };

  const handleCardClick = async (domikId, coordinates) => {
    setCurrentMarker(coordinates);
    // Установка состояния карты с выбранными координатами и уровнем масштабирования по умолчанию.
    setMapState({
      center: coordinates,
      zoom: 13,
    });
  
    try {
      // Получение ссылки на документ "domiktut" по его ID.
      const domikDocRef = doc(db, "domiktut", domikId);
      // Обновление значения "view" в документе "domiktut" в Firebase.
      await updateDoc(domikDocRef, {
        view: domikList.find((domik) => domik.id === domikId).view ++,
      });
    } catch (err) {
      // Обработка ошибок и вывод их в консоль.
      console.error(err);
    }
  };

  
  // Рендеринг компонента с списком карточек продуктов и картой Yandex.
  return (
    <>
      <div className="catalog_page">
        <div className="catalog_section">
          {domikList?.map((domiktut, index) => (
            <ProductCard
              key={index}
              view={domiktut.view}
              title={domiktut.title}
              price={domiktut.price}
              file={domiktut.file}
              room={domiktut.room}
              // Привязка обработчика события клика, устанавливающего текущий маркер на карте.
              onCardClick={() => handleCardClick(domiktut.id, domiktut.coordinates)}
              />
          ))}
        </div>

        <YMaps>
          <div>
            <Map
              style={{ width: "600px", height: "500px", borderRadius: "20px" }}
              state={mapState}
              // Обработка события изменения границ для обновления состояния карты.
              onBoundsChange={(e) => {
                // Обновление состояния карты новыми координатами центра.
                setMapState({ ...mapState, center: e.get("newCenter") });
              }}
            >
              {domikList.map((domiktut) => (
                // Добавление компонента Placemark на карту для каждых координат объекта "domik".
                <Placemark
                  key={domiktut.id}
                  geometry={domiktut.coordinates}
                />
              ))}
              {/* Если установлен currentMarker, добавление специального фиолетового маркера на карте. */}
              {currentMarker && (
                <Placemark
                  geometry={currentMarker}
                  options={{ preset: "islands#violetDotIcon" }}
                />
              )}
            </Map>
          </div>
        </YMaps>
      </div>
    </>
  );
}

export default ScrollCatalog;
