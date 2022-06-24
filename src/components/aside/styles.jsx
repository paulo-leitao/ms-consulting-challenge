import styled from "styled-components";

export const Wrapper = styled.aside`
  display:flex;
  grid-area: aside;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  & > img{
    margin: 25px auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 5px black;
  }
`;

export const SaldoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;