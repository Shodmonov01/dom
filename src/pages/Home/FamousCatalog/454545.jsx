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
  onSnapshot 
} from "firebase/firestore";
import FamousCatalogCard from "../../../components/FamousCatalogCard";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from 'react-router-dom';



export const FamousCatalog = () => {


  const [domikList, setDomikList] = useState([]);
  const [products, setProducts] = useState([]);


  const menuCollectionRef = collection(db, "domiktut");

  const history = useNavigate();



  const getDomikList = async () => {
    try {
        const products = await getDocs(menuCollectionRef);
        const productsArray = [];

        for (const snap of products.docs) {
            const data = snap.data();
            data.ID = snap.id;
            productsArray.push({ ...data });
        }

        setDomikList(productsArray);
    } catch (error) {
        console.error('Error getting products:', error);
    }
};

  useEffect(() => {
    getDomikList();
  }, []);




  const [totalProducts, setTotalProducts] = useState(0);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartRef = collection(db, `Cart ${user.uid}`);
        const unsubscribeCart = onSnapshot(cartRef, (snapshot) => {
          // const qty = snapshot.size; // Use snapshot.size to get the number of documents
          // setTotalProducts(qty);
        });

        return () => unsubscribeCart(); // Cleanup the cart listener when the component unmounts
      }
    });

    return () => unsubscribeAuth(); // Cleanup the auth listener when the component unmounts
  }, []);

  let Product;

  const addToCart = (product) => {
    if (uid !== null) {
      Product = product;
      Product.qty = 1;
      Product.TotalProductPrice = Product.qty * Product.price;

      db.collection(`Cart ${uid}`)
        .doc(product.ID)
        .set(Product)
        .then(() => {
          console.log("Успешно добавлено в корзину");
        });
    } else {
      history("/login");
    }
  };

  return (
    <div className="famous-category">
      <div className="containers">
        <h3 className="famous-title">Популярное в каталоге</h3>
        <div className="row g-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
          {domikList?.map((domiktut, index) => (
            <FamousCatalogCard
              key={index}
              title={domiktut.title}
              price={domiktut.price}
              file={domiktut.file}
              room={domiktut.room}
              addToCart = {addToCart}
            />
          ))}
          </div>

        </div>
        <a className="famous-category-btn" href="#">
          Перейти в каталог
        </a>
      </div>
    </div>
  );
};
