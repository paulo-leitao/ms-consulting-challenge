import React, { useEffect, useState } from 'react'
import Header from '../../header'
import useApi from '../../../hooks/api-hooks';
import * as S from './styles'
import {useNavigate} from 'react-router-dom';

const NewTrade = () => {

  const { state, newMovimento, getUser } = useApi();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('account'))
  
  const [ movimentacao, setMovimentacao ] = useState({
    idConta: user.id,
    valor: 0,
    tipo: "",
    descricao: "",
  });
  
  // useEffect(()=>{
  //   console.log(movimentacao);
  // },[movimentacao])
    
  const handleMovimento = () => {
    newMovimento(movimentacao);
    getUser(user.uid);
    navigate('/');
  }

  return (
    <div>
      <Header />
      <S.Wrapper>
        <div className='jumbotron'>
          <h1 className='display-6'>Nova Movimentação</h1>
          <hr className='my-2'/>
          <div className='pb-3'>
            <div className='col-12'>
              <label htmlFor="iDescricao" className='form-label'> Descrição </label>
              <input type="text" id="iDescricao" className='form-control' placeholder="Informe uma descrição" onChange={(event)=>setMovimentacao((prevState)=>({...prevState,descricao: event.target.value}))}/>
            </div>
            <div className='col-md-5'>
              <label htmlFor="iTipo" className='form-label'> Tipo Movimentação </label>
              <select defaultValue={'default'} id="iTipo" className='form-select' onChange={(event)=>setMovimentacao((prevState)=>({...prevState,tipo: event.target.value}))}>
                <option value={'default'} disabled>Selecione</option>
                <option value={'Entrada'}>Entrada</option>
                <option value={'Saida'}>Saida</option>
              </select>
            </div>
            <div className='col-md-5'>
              <label htmlFor="iValor" className='form-label'> R$ Valor </label>
              <input type="text" id="iValor" className='form-control' onChange={(event)=>setMovimentacao((prevState)=>({...prevState,valor: event.target.value}))}/>
            </div>
          </div>
          <div className='d-grid gap-2 d-md-flex'>
            <button type="button" className='btn btn-primary' onClick={handleMovimento}> Confirmar </button>
            <a className='btn btn-secondary' href="/"> Cancelar </a>
          </div>
        </div>
      </S.Wrapper>
    </div>
  );
}

export default NewTrade