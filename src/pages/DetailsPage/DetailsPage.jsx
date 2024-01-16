// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import FamousCatalogCard from "../../components/FamousCatalogCard";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import DetailsPageCard from "../../components/DetailsPageCard/DetailsPageCard";

import { db, auth, storage } from "../../Firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import './DetailsPage.scss'

const DetailsPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [mapState, setMapState] = useState({
    center: [0, 0], 
    zoom: 13,
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribeAuth();
  }, []);

  const fetchItemDetails = async () => {
    try {
      const itemDocRef = doc(db, "domiktut", id);
      const itemData = (await getDoc(itemDocRef)).data();
      setItemDetails(itemData);

      if (itemData?.coordinates) {
        setMapState({
          center: itemData.coordinates,
          zoom: 13,
        });
      }
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  useEffect(() => {
    fetchItemDetails();
  }, [id]);

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

  return (
    <div className="details-page">
      <div className=" page-card">
        <DetailsPageCard
          view={itemDetails?.view}
          title={itemDetails?.title}
          price={itemDetails?.price}
          file={itemDetails?.file}
          room={itemDetails?.room}
          addToCart={() => addToCart(itemDetails)}

        />
      </div>

      <div className="details-map">
      <YMaps>
        <div>
          <Map
            style={{ width: "700px", height: "600px", borderRadius: "50%" }}
            state={mapState}
          >
            {itemDetails?.coordinates && (
              <Placemark geometry={itemDetails.coordinates} />
            )}
          </Map>
        </div>
      </YMaps>
      </div>

    </div>
  );
};

export default DetailsPage;
