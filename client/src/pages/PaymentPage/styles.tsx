import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
`;

export const PaymentInfoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
`;

export const PaymentInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const BoldText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  color: #e4e0ec;
`;

export const DescriptionText = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #e4e0ec;
`;

export const PixContainer = styled.div`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  background-color: #1e0063;
  align-self: center;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
