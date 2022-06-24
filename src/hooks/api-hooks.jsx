import { useContext } from 'react'
import { AccountContext } from '../providers/api-provider';

const useApi = () => {
  const { account, getMovimento, newMovimento, getUser, deleteMovimentacao, registerUser } = useContext( AccountContext );
  
  return { account, getMovimento, newMovimento, getUser, deleteMovimentacao, registerUser };
};

export default useApi;