import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  grid-area: header;
  justify-content: flex-end;
  background-color: cadetblue;
  color: white;

  & > button {
    align-self: center;
    margin-right: 20px;
  }
`;