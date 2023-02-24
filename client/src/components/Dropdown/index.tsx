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

interface IProps {
  id: number;
}

export function Dropdown({ id }: IProps) {
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
      <Label>Origem</Label>
      <DropdownButton onClick={onDropdownClick}>
        <DropdownText>São Paulo, GRU - Brasil</DropdownText>
        <ArrowDownIcon />
        <DropdownList id={`dropdown-list-${id}`}>
          <ListItem selected>
            <ListItemText>São Paulo, GRU - Brasil</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>São Paulo, GRU - Brasil</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>São Paulo, GRU - Brasil</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>São Paulo, GRU - Brasil</ListItemText>
          </ListItem>
        </DropdownList>
      </DropdownButton>
    </Container>
  );
}
