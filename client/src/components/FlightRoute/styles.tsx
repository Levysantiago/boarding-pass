import styled from "styled-components";
import aircraftIcon from "../../assets/aircraft.svg";

export const Container = styled.button.attrs({ type: "button" })`
  display: flex;
  flex-direction: column;
  background-color: #1e0063;
  padding: 20px 50px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
  border: none;
  text-align: start;
  align-items: center;
  width: 100%;

  &:hover {
    box-shadow: 4px 4px 15px rgba(30, 0, 99, 0.25);
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlockContainer = styled.div`
  width: 100%;
`;

export const Title = styled.span`
  font-size: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #e4e0ec;
  margin: 0px 20px;
`;

export const TopicPriceText = styled.span`
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #e4e0ec;
`;

export const TopicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopicContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopicTitle = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
`;
export const TopicText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #e4e0ec;
`;

export const AircraftCodeText = styled.span`
  font-size: 10px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #bea3ff;
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const AircraftIcon = styled.img.attrs({
  src: aircraftIcon,
  alt: "Aircraft icon",
})``;
