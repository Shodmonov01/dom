import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Firebase'
import {useNavigate} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



export const Login = () => {
    
    
    const history = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');


    {}
    const handleLogin=(e)=>{
        e.preventDefault();
        // console.log(email, password);
        const auth = getAuth();
        

        signInWithEmailAndPassword(auth, email,password).then(()=>{
            setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                history('/');
            },3000)
        }).catch(error=>setErrorMsg(error.message));
        
    }
    console.log(auth);
    return (
        <div className='container' style={{padding:'100px'}}>
            <br></br>
            <br></br>
            <h1>Войти</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='form-group' autoComplete="off"
            onSubmit={handleLogin}>               
                <label>Email</label>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Пароль</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <button style={{marginBottom:'20px'}} type="submit" className='btn btn-success btn-md'>LOGIN</button>
                    <br />
                    <span >У вас нет аккаунта? Регистрируйтесь 
                    <Link to="/signup" className='link'> тут</Link></span>
                </div>
            </form>
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    )
}
