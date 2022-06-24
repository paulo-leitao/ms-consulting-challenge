import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  grid-template-rows: auto auto 30%;
  grid-template-areas: "header header" "aside main" "footer footer";
`;

export const Wrapper = styled.main`
  display: flex;
  grid-area: main;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0;
`;

export const TableWrapper = styled.div`
  width: -webkit-fill-available;
  margin: 0 100px;
  flex-direction: row;
`;

export const Register = styled.a`
  align-self: end;
  margin-right: 100px;
`;