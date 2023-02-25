import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { FlightSummary } from "../../components/FlightSummary";
import { Input } from "../../components/Input";
import {
  ButtonsContainer,
  Container,
  InputContainer,
  PassengerInfo,
  PassengerInfoContainer,
  Title,
} from "./styles";

export function PassengerPage() {
  return (
    <Container>
      <FlightSummary />
      <PassengerInfoContainer>
        <Title>Passageiro</Title>
      </PassengerInfoContainer>

      <PassengerInfo>
        <InputContainer>
          <Input label="Nome" />
        </InputContainer>

        <InputContainer>
          <Input label="Sobrenome" />
        </InputContainer>

        <InputContainer>
          <Input label="Data de nascimento" />
        </InputContainer>

        <InputContainer>
          <Dropdown id="passenger-1" />
        </InputContainer>

        <InputContainer>
          <Input label="Passaporte" />
        </InputContainer>

        <InputContainer>
          <Input label="CPF" />
        </InputContainer>
      </PassengerInfo>

      <ButtonsContainer>
        <Button isBack title="Voltar" />
        <Button title="Continuar" />
      </ButtonsContainer>
    </Container>
  );
}
