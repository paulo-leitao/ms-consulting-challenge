import React, { useEffect, useState, useContext } from 'react'
import * as S from './styles'
import { auth } from '../../../firebase'
import useApi from '../../../hooks/api-hooks'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext';


const NewUser = () =>{

  const {registerUser, getUser} = useApi();

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const [form, setForm] = useState({
    nome:'',
    email:'',
    senha:'',
    cpf:''
  })

  useEffect(()=>{
    console.log("FORM: "+JSON.stringify(form))
  },[form])

  const handleSubmit = (event) => {
    event.preventDefault();

    const {email, senha, nome, cpf} = form

    createUserWithEmailAndPassword(auth, email, senha)
    .then((useCredential)=>{
      const user = useCredential.user;
      console.log(user);
      dispatch({type:"LOGIN", payload:user});
      registerUser({
        nome: nome,
        email: email,
        uid: user.uid,
        cpf: cpf
      })
      getUser(user.uid)
      navigate("/");
    })
    .catch((e)=>{
      console.log(e)
    });
  }

  return (
    <S.Wrapper>
      <h1 className="display-6">Novo Usuário</h1>
      <S.Form>
        <div className='col-12'>
          <label htmlFor="nome" className='form-label'>Nome</label>
          <input itemID='nome' className="form-control" type="text" placeholder="Nome" onChange={(event)=>setForm((prevState)=>({...prevState,nome: event.target.value}))}/>
        </div>
        <div>
          <label htmlFor="email" className='form-label'>E-mail</label>
          <input itemID='email' className="form-control" type="email" placeholder="e-mail" onChange={(event)=>setForm((prevState)=>({...prevState,email: event.target.value}))}/>
        </div>
        <div>
          <label htmlFor="cpf" className='form-label'>CPF</label>
          <input itemID='cpf' className="form-control" placeholder="cpf" onChange={(event)=>setForm((prevState)=>({...prevState,cpf: event.target.value}))}/>
        </div>
        <div>
          <label htmlFor="senha" className='form-label'>Senha</label>
          <input itemID='senha' className="form-control" type="password" placeholder="Senha" onChange={(event)=>setForm((prevState)=>({...prevState,senha: event.target.value}))}/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleSubmit}>Cadastrar</button>
        <a className="btn btn-secondary mx-2" href="/">
          Cancelar
        </a>
      </S.Form>
    </S.Wrapper>
  );
}

export default NewUser