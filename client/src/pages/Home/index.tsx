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
            <Dropdown id="home-1" />
          </DropdownContainer>

          <DropdownContainer>
            <Dropdown id="home-2" />
          </DropdownContainer>

          <DropdownContainer>
            <Dropdown id="home-3" />
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
