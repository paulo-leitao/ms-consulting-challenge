import React, {useContext} from 'react'
import * as S from './styles'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Header = () => {

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignout = ()=> {
    signOut(auth).then(() => {
      dispatch({type:"LOGOUT"});
      localStorage.clear();
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });    
  }

  return (
    <S.Wrapper>
      <button className='btn btn-sm btn-danger' onClick={handleSignout}>Sair</button>
    </S.Wrapper>
  )
}

export default Header