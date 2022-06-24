import React, { useEffect, useState } from 'react'
import Header from '../../header'
import useApi from '../../../hooks/api-hooks';
import * as S from './styles'
import Aside from '../../aside';

const Home = () => {
  
  const { account, getMovimento, deleteMovimentacao } = useApi();

  const [deleted, setDeleted] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      const user = JSON.parse(localStorage.getItem('account'))
      getMovimento(user.id)
    },1000)
  },[deleted])
  
  const handleDelete = (movimentacaoId)=>{
    deleteMovimentacao(movimentacaoId);
    setDeleted(movimentacaoId);
  }

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <S.Register className="btn btn-outline-secondary" href="/movimentacao">
          Nova Movimentação
        </S.Register>
        <S.TableWrapper>
          <table className="table" >
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Data Hora</th>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Tipo</th>
              </tr>
            </thead>
            <tbody>
              {account.loading ? (<></>):(
                <>
                {account.data.map((data) => (
                  <tr key={data.id}>
                      {/* <th scope="row">{data.id}</th> */}
                      <td>{data.dataHora}</td>
                      <td>{data.descricao}</td>
                      <td>{data.valor}</td>
                      <td>{data.tipo}</td>
                      <td>
                        <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(data.id)}>Deletar</button>
                      </td>
                    </tr>
                ))}
                </>
              )}
            </tbody>
          </table>
        </S.TableWrapper>
      </S.Wrapper>
      <Aside></Aside>
    </S.Container>
  );
}

export default Home