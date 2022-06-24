import React, { useState, useContext } from 'react'
import * as S from './styles'
import { auth } from '../../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import useApi from '../../../hooks/api-hooks';

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const {getUser} = useApi();

  const handleLogin = (event) => {
    event.preventDefault();
    
    signInWithEmailAndPassword (auth, email, password)
      .then((userCredential)=>{
        const user = userCredential.user;
        console.log("USER.UID: "+user.uid)
        dispatch({type:"LOGIN", payload:user});
        getUser(user.uid)
        navigate("/");
      })
      .catch((error)=>{
        setError(true);
      });
  };

  return (
    <S.Wrapper>
      <h1 className='display-6'>Login</h1>
      <S.Form>
        <input className="form-control" type='email' placeholder='e-mail' onChange={(event)=>setEmail(event.target.value)}/>
        <input className="form-control" type='password' placeholder='senha' onChange={(event)=>setPassword(event.target.value)}/>
        <button className='btn btn-primary mx-2' type='submit' onClick={handleLogin}> Entrar</button>
        <a className='btn btn-secondary mx-2'  href='/new-user'> Criar nova conta</a>
        {error && <span>E-mail ou Senha inválidos!</span>}
      </S.Form>
    </S.Wrapper>
  )
}

export default Login