import styled from "styled-components";

export const OutsideContainer = styled.div`
  padding: 100px 100px;

  @media (max-width: 800px) {
    padding: 100px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DropdownContainer = styled.div`
  margin: 0px 10px 50px 10px;
  width: 200px;

  @media (max-width: 800px) {
    width: 300px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    max-width: none;
    flex-direction: column;
  }
`;

export const RoutesContainer = styled.div`
  width: 100%;
  max-width: 600px;

  @media (max-width: 700px) {
    max-width: none;
  }
`;
