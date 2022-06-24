import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  margin: 10% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: cadetblue;
  border-radius: 6px;
  box-shadow: 0 0 5px black;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input{
    margin-top: 10px;
  }

  & > button {
    margin-bottom: 25px;
    margin-top: 10px;
  }

  & > span {
    color: red;
    font-weight: 600;
  }
`;