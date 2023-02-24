import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const AircraftContainer = styled.div`
  width: 400px;
  margin-top: 40px;
  background: #1e0063;
  border-radius: 200px 200px 36px 36px;
`;

export const AircraftContent = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Divider = styled.div`
  border: 1px solid #3d1892;
  width: 300px;
`;

export const AircraftCodeText = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
`;

export const AircraftBody = styled.div`
  display: flex;
  gap: 50px;
`;

export const AircraftColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumbersColumn = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 28.2px;
`;

export const NumberColumnItem = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
`;

export const LettersLine = styled.div`
  display: flex;
  gap: 27px;
  margin: 0px 8px 10px 8px;
`;

export const Letter = styled.span`
  font-size: 12px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #bea3ff;
`;

export const SeatsContainer = styled.div`
  display: grid;
  gap: 15px 10px;
  grid-template-columns: auto auto auto;
`;

export const SeatIcon = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0px 20px 0px;
`;
