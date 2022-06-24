import React, { useEffect, useState } from 'react'
import * as S from './styles'
import profileImg from '../assets/img/blank-profile.png'
import useApi from '../../hooks/api-hooks'


const Aside = () => {


  const { getUser } = useApi();

  const [user, setUser] = useState({
    nome:'',
    cpf:'',
    email:'',
    conta:{
      saldo:0
    }
  });

  useEffect(()=>{
    setTimeout(()=>{
      const user = JSON.parse(localStorage.getItem('account'));
      getUser(user.uid);
      setUser(user);
    },1000);
  },[])

  return (
    <S.Wrapper>
      <img src={profileImg}/>
      <h2>{user.nome}</h2>
      <p>{user.cpf}</p>
      <p>{user.email}</p>
      <S.SaldoWrapper>
        <h3>Saldo:</h3>
        <p>{user.conta.saldo}</p>
      </S.SaldoWrapper>
    </S.Wrapper>
  )
}

export default Aside