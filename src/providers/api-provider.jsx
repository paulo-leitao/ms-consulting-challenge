import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const AccountContext = createContext({
  user_id:0,
  uuid:"",
  data:[],
  loading: false
});

const ApiProvider = ({ children }) => {
  const [ account, setAccount ] = useState({
    loading: false,
    user_id:0,
    uuid:"",
    data:[]
  });

  const getUser = (userCredential) => {
    setAccount((prevState)=>({
      ...prevState,
      loading:true
    }))

    api.get(`correntista/${userCredential}`)
      .then(({ data }) => {
        setAccount((prevState) => ({
          ...prevState,
          uuid: data[0].uid,
          user_id: data[0].id,
        }));
        localStorage.setItem('account', JSON.stringify(data[0]))
        // console.log(data[0].id);
      }).finally(()=>{
        setAccount((prevState)=>({
          ...prevState,
          loading: false,
        }))
      }).catch((e) => {
        console.log(e);
      });
  };

  const getMovimento = (userId) => {
    setAccount((prevState)=>({
      ...prevState,
      loading:true
    }))
    api.get(`movimentacao/${userId}`).then(( {data} )=>{
      setAccount((prevState)=>({
        ...prevState,
        data: data
      }));
    }).finally(()=>{
      setAccount((prevState)=>({
        ...prevState,
        loading: false,
      }))
    })

  };

  const newMovimento = (movimentacao) => {
    api.post('movimentacao', movimentacao)
    .then( ({res}) =>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  const deleteMovimentacao = (movimentacaoId)=>{
    api.delete(`movimentacao/${movimentacaoId}`, { data:{id: movimentacaoId}}).then(({res})=>{
      console.log(res);
    }).catch((e)=>{
      console.log(e);
    })
  }

  const registerUser = (data)=>{
    api.post('correntista',data)
      .then(({res})=>{
        console.log(res);
    }).catch((e)=>{
      console.log(e);
    })

  }

  const contextValue = {
    account,
    getMovimento: useCallback((userId)=>getMovimento(userId),[]),
    newMovimento: useCallback((movimentacao)=>newMovimento(movimentacao),[]),
    getUser: useCallback((userCredential)=>getUser(userCredential),[]),
    deleteMovimentacao: useCallback((movimentacaoId)=>deleteMovimentacao(movimentacaoId),[]),
    registerUser: useCallback((data)=>registerUser(data),[])
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
}

export default ApiProvider;