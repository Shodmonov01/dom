// Импорт необходимых модулей и компонентов из React и других зависимостей
import React, { useState } from 'react';
import {auth,  db } from '../Firebase'; // Предполагается, что auth и fs - это конфигурации аутентификации Firebase и базы данных Firestore
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs }  from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


// Определение компонента Signup как функционального компонента
export const Signup = () => {
    // Создание объекта history с использованием хука useHistory для управления навигацией
    const history = useNavigate();

    // Определение переменных состояния с использованием хука useState для управления вводом формы и сообщениями
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    // Обработчик событий для формы регистрации
    const handleSignup = async (e) => {
        e.preventDefault();
    
        // Инициализация Firebase аутентификации и Firestore

    
        try {
            // Использование аутентификации Firebase для создания нового пользователя
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
    
            console.log(credentials);


        // Получение токена доступа (idToken) после успешной аутентификации
            const idToken = await credentials.user.getIdToken();
            console.log('Authorization Token:', idToken);
    
            // После успешной аутентификации, добавление информации о пользователе в коллекцию 'users' в Firestore
            await setDoc(doc(db, 'users', credentials.user.uid), {
                FullName: fullName,
                Email: email,
                Password: password
            });
    
            // Если добавление информации о пользователе также успешно, отображение сообщения об успешной регистрации
            setSuccessMsg('Регистрация прошла успешно. Вы будете автоматически перенаправлены на страницу входа.');
            setFullname('');
            setEmail('');
            setPassword('');
            setErrorMsg('');
    
            // Через некоторое время перенаправление на страницу входа
            setTimeout(() => {
                setSuccessMsg('');
                history('/login');
            }, 1000);
        } catch (error) {
            // Обработка ошибок при создании пользователя
            setErrorMsg(error.message);
        }
    };

    // Вернуть разметку компонента
    return (
        <div className='container' style={{padding:'100px'}}>
            <br></br>
            <br></br>
            <h1>Регистрация</h1>
            <hr></hr>
            {successMsg && <>
                {/* Вывод сообщения об успешной регистрации, если оно присутствует */}
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            {/* Форма для ввода данных пользователя с обработчиком submit */}
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label>Полное имя</label>
                {/* Поле ввода для полного имени с обработчиком изменения значения */}
                <input type="text" className='form-control' required
                    onChange={(e) => setFullname(e.target.value)} value={fullName}></input>
                <br></br>
                <label>Email</label>
                {/* Поле ввода для электронной почты с обработчиком изменения значения */}
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Пароль</label>
                {/* Поле ввода для пароля с обработчиком изменения значения */}
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    {/* Ссылка для перехода на страницу входа и кнопка для отправки формы */}
<<<<<<< HEAD
                    <button style={{marginBottom:'20px'}} type="submit" className='btn btn-success btn-md'>РЕГИСТРАЦИЯ</button>
                    <br />
                    <span>Уже есть аккаунт? Войти
                        <Link to="/login" className='link'> здесь</Link>
                    </span>
=======
                    <span>Уже есть аккаунт? Войти
                        <Link to="/login" className='link'> здесь</Link>
                    </span>
                    <button type="submit" className='btn btn-success btn-md'>РЕГИСТРАЦИЯ</button>
>>>>>>> 0169c0238ed0c99adc5b154071c970a19402cc42
                </div>
            </form>
            {errorMsg && <>
                <br></br>
                {/* Вывод сообщения об ошибке, если оно присутствует */}
                <div className='error-msg'>{errorMsg}</div>
            </>}
        </div>
    );
};
