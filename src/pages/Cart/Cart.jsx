// Импортируем необходимые модули и компоненты из React и Firebase
import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { db, auth } from "../../Firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CartCard from "../../components/CartCard";

// Определяем компонент Cart
function Cart() {
  // Объявляем переменные состояния с помощью хука 'useState'
  const [cart, setCart] = useState([]); // Состояние для хранения товаров в корзине пользователя
  const [user, setUser] = useState(null); // Состояние для хранения информации о текущем пользователе

  // Используем хук 'useEffect' для выполнения побочных эффектов в компоненте
  useEffect(() => {
    // Определяем асинхронную функцию для получения данных корзины
    const fetchData = async () => {
      try {
        // Получаем текущего пользователя из аутентификации Firebase
        const user = auth.currentUser;
        // Обновляем состояние 'user' текущим пользователем
        setUser(user);

        // Проверяем, вошел ли пользователь в систему
        if (user) {
          // Создаем ссылку на коллекцию корзины пользователя в Firestore
          const cartRef = collection(db, `Cart ${user.uid}`);
          // Получаем документы из коллекции корзины
          const cartSnapshot = await getDocs(cartRef);
          // Отображаем данные документов в массив и обновляем состояние 'cart'
          const cartItems = cartSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCart(cartItems);
        }
      } catch (error) {
        console.error("Ошибка при получении данных корзины:", error);
      }
    };

    // Подписываемся на изменения состояния аутентификации пользователя
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      fetchData(); // Вызываем функцию fetchData при изменении состояния аутентификации
    });

    // Функция очистки для отписки от изменений состояния аутентификации
    return () => unsubscribeAuth();
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании компонента

  // Еще один хук 'useEffect' для обработки изменений состояния аутентификации
  useEffect(() => {
    // Подписываемся на изменения состояния аутентификации
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      // Обновляем состояние 'user' текущим пользователем
      setUser(user);
    });

    // Функция очистки для отписки от изменений состояния аутентификации
    return () => unsubscribeAuth();
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании компонента

  // Функция для добавления товара в заказ
  const addToOrder = async (domiktut) => {
    if (user) {
      const orderRef = collection(db, "Order");

      try {
        const orderData = {
          ...domiktut,
          uid: user.uid,
          email: user.email,
        };

        // Добавляем товар в заказ
        const docRef = await addDoc(orderRef, orderData);
        const addedDocId = docRef.id;

        console.log("Успешно добавлено в заказ. ID документа:", addedDocId);

        // Теперь удаляем товар из корзины
        const cartItemRef = doc(db, `Cart ${user.uid}`, domiktut.id);
        await deleteDoc(cartItemRef);
        console.log("Товар успешно удален из корзины.");
      } catch (error) {
        console.error("Ошибка при добавлении в заказ:", error);
      }
    }
  };

  // Рендерим компонент Cart
  return (
    <>
      <div className="row g-4" style={{ padding: "150px", margin: "0px" }}>
        <h1 style={{ textAlign: "center" }}>Избранные</h1>

        {/* Отображаем каждый товар в состоянии 'cart' с помощью компонента CartCard */}
        {cart?.map((domiktut, index) => (
          <CartCard
            key={index}
            title={domiktut.title}
            price={domiktut.price}
            file={domiktut.file}
            room={domiktut.room}
            addToOrder={() => addToOrder(domiktut)}
          />
        ))}
      </div>
    </>
  );
}

// Экспортируем компонент Cart как компонент по умолчанию
export default Cart;
