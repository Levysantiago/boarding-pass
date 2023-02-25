import styled from "styled-components";

export const FlightSummaryContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  max-width: 500px;
`;

export const FlightSummaryContent = styled.div`
  margin-top: 20px;
  background-color: #1e0063;
  width: 100% - 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
`;

export const Title = styled.span`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
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
