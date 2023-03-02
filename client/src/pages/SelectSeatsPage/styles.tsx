import React from "react";
import styled from "styled-components";
import seatSelectedIcon from "../../assets/seat-selected.svg";
import seatHoveredIcon from "../../assets/seat-hovered.svg";
import seatFreeIcon from "../../assets/seat-free.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const AircraftContainer = styled.div`
  width: 400px;
  margin-top: 40px;
  padding-bottom: 30px;
  margin-bottom: 100px;
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
  margin-top: 2px;
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

export const SeatButton = styled.button.attrs({ type: "button" })`
  border: none;
  background-color: transparent;
`;

export const SeatIcon = styled.img.attrs((props: { isSelected: boolean }) => ({
  src: props.isSelected ? seatSelectedIcon : seatFreeIcon,

  onMouseEnter: (event: React.MouseEvent) => {
    const element: HTMLImageElement = event.target as HTMLImageElement;

    if (!props.isSelected) {
      element.src = seatHoveredIcon;
    }
  },
  onMouseLeave: (event: React.MouseEvent) => {
    const element: HTMLImageElement = event.target as HTMLImageElement;
    if (!props.isSelected) {
      element.src = seatFreeIcon;
    }
  },
}))(
  (props: { isSelected: boolean }) => `
  width: 25px;
  cursor: pointer;
`
);

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
