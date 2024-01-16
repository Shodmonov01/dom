// Import necessary dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import FamousCatalogCard from "./FamousCatalogCard";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import DetailsPageCard from "./DetailsPageCard";

const DetailsPage = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [mapState, setMapState] = useState({
    center: [0, 0], 
    zoom: 13,
  });

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

  return (
    <div className="details-page" style={{ padding: "100px" }}>
      <div className="row g-4">
        <DetailsPageCard
          view={itemDetails?.view}
          title={itemDetails?.title}
          price={itemDetails?.price}
          file={itemDetails?.file}
          room={itemDetails?.room}
        />
      </div>

      <YMaps>
        <div>
          <Map
            style={{ width: "600px", height: "500px", borderRadius: "20px" }}
            state={mapState}
          >
            {itemDetails?.coordinates && (
              <Placemark geometry={itemDetails.coordinates} />
            )}
          </Map>
        </div>
      </YMaps>

    </div>
  );
};

export default DetailsPage;
