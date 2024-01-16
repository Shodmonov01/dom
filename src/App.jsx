import { Header } from "./components/Header/Header";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Footer } from "./components/Footer/Footer";
import Catalog from "./pages/Catalog/Catalog";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

import { db } from "./Firebase";

import React, { useState, useEffect } from "react";
import Cart from "./pages/Cart/Cart";
import DetailsPage from "./pages/DetailsPage/DetailsPage";


function App() {

	const auth = getAuth();

  // Функция для получения UID текущего пользователя
  function GetUserUid() {
    // Использование хука состояния для управления состоянием UID
    const [uid, setUid] = useState(null);
    // Эффект для обработки изменений состояния аутентификации
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Если пользователь аутентифицирован, устанавливаем состояние UID
          setUid(user.uid);
        }
      });
    }, []);
    // Возвращение текущего UID
    return uid;
  }

  // Вызов функции GetUserUid и сохранение UID в переменной 'uid'
  const uid = GetUserUid();
  console.log(uid);

  // Функция для получения информации о текущем пользователе

  // const menuCollectionRef = collection(db, "users");

  // Функция для получения информации о текущем пользователе
  function GetCurrentUser() {
    // Использование хука состояния для управления состоянием пользователя
    const [user, setUser] = useState(null);

    // Эффект для обработки изменений состояния аутентификации
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // Если пользователь аутентифицирован, извлекаем данные пользователя из Firestore
          const getUserData = async () => {
            try {
              const snapshot = await getDoc(doc(db, "users", user.uid));
              // Устанавливаем состояние пользователя с полученным полным именем
              setUser(snapshot.data().FullName);
            } catch (error) {
              console.error("Error getting user data:", error.message);
            }
          };

          getUserData();
        } else {
          // Если пользователь не аутентифицирован, устанавливаем состояние пользователя в null
          setUser(null);
        }
      });

      // Очистка подписки при размонтировании компонента
      return () => unsubscribe();
    }, []);

    // Возвращение информации о текущем пользователе
    return user;
  }

  // Вызов функции GetCurrentUser в компоненте и сохранение информации о пользователе в переменной 'user'
  // Вызов функции GetCurrentUser и сохранение информации о пользователе в переменной 'user'
  const user = GetCurrentUser();
  console.log(user);
  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<DetailsPage/>} />


      </Routes>
			
      <Footer />


    </>
  );
}

export default App;
