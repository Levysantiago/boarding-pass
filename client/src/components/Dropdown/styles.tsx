import styled from "styled-components";
import arrowDownIcon from "../../assets/arrow-down.svg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  color: #e4e0ec;
`;

export const DropdownButton = styled.button`
  height: 40px;
  background-color: #1e0063;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
  border: none;
  position: relative;
`;

export const DropdownText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  color: #e4e0ec;
`;

export const ArrowDownIcon = styled.img.attrs({
  src: arrowDownIcon,
  alt: "Arrow down icon",
})`
  height: 15px;
  position: absolute;
  right: 10px;
`;

export const DropdownList = styled.div`
  height: 120px;
  background-color: #1e0063;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  visibility: hidden;
  position: absolute;
  top: 40px;
  left: 0px;
  right: 0px;
  z-index: 1;
`;

export const ListItem = styled.div(
  (props: { selected?: boolean }) => `
  height: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props.selected ? "#6141ad" : "#381192"};

  &:hover {
    background-color: ${props.selected ? "#6141ad" : "#48249c"};
  }
`
);

export const ListItemText = styled.span`
  font-size: 14px;
  font-family: "Rubik", sans-serif;
  color: #e4e0ec;
`;
