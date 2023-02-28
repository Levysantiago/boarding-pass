import { useState } from "react";
import { IAirport } from "../../entities/IAirport";
import {
  ArrowDownIcon,
  Container,
  DropdownButton,
  DropdownList,
  DropdownText,
  Label,
  ListItem,
  ListItemText,
} from "./styles";

export interface IDropdownItem {
  id: string;
  value: string;
}

interface IProps {
  id: string;
  label: string;
  list: IDropdownItem[];
  selectedIndex: number;
  setSelectedIndex: (selected: number) => void;
}

export function Dropdown({
  id,
  list,
  label,
  selectedIndex,
  setSelectedIndex,
}: IProps) {
  function onDropdownClick() {
    const dropdownList = document.getElementById(`dropdown-list-${id}`);

    if (dropdownList) {
      if (dropdownList.style.visibility !== "visible") {
        dropdownList.style.visibility = "visible";
      } else {
        dropdownList.style.visibility = "hidden";
      }
    }
  }

  return (
    <Container>
      <Label>{label}</Label>
      <DropdownButton onClick={onDropdownClick}>
        <DropdownText>{list[selectedIndex]?.value || ""}</DropdownText>
        <ArrowDownIcon />
        <DropdownList id={`dropdown-list-${id}`}>
          {list.map((item, index) => {
            return (
              <ListItem
                key={`${id}-${index}`}
                selected={index === selectedIndex}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <ListItemText>{item.value}</ListItemText>
              </ListItem>
            );
          })}
        </DropdownList>
      </DropdownButton>
    </Container>
  );
}
