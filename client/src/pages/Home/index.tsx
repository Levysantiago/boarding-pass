import { Dropdown } from "../../components/Dropdown";
import { Route } from "../../components/Route";
import {
  Container,
  DropdownContainer,
  HeaderContainer,
  OutsideContainer,
  RoutesContainer,
} from "./styles";

function Home() {
  return (
    <OutsideContainer>
      <Container>
        <HeaderContainer>
          <DropdownContainer>
            <Dropdown id={1} />
          </DropdownContainer>

          <DropdownContainer>
            <Dropdown id={2} />
          </DropdownContainer>

          <DropdownContainer>
            <Dropdown id={3} />
          </DropdownContainer>
        </HeaderContainer>

        <RoutesContainer>
          <Route />
          <Route />
        </RoutesContainer>
      </Container>
    </OutsideContainer>
  );
}

export default Home;
