import { Dropdown } from "../../components/Dropdown";
import { Container, DropdownContainer, HeaderContainer } from "./styles";

function Home() {
  return (
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
    </Container>
  );
}

export default Home;
