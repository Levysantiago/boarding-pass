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

export const FlightSummaryContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 500px;
`;

export const PassengerInfoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 500px;
`;

export const FlightSummary = styled.div`
  margin-top: 20px;
  background-color: #1e0063;
  width: 100% - 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;

export const SummaryText = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #e4e0ec;
  margin-bottom: 4px;
`;

export const FinalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  right: 50px;
`;

export const FinalPriceLabel = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #e4e0ec;
  margin-bottom: 4px;
`;

export const FinalPriceValue = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #bea3ff;
  margin-bottom: 4px;
`;

export const PassengerInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 200px;
  margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 50px 0px 20px 0px;
`;
