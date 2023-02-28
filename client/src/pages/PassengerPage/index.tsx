import { useState } from "react";
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
  const [selectedGender, setSelectedGender] = useState(0);

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
          <Dropdown
            list={[
              { id: "0", value: "Masculino" },
              { id: "1", value: "Feminino" },
              { id: "2", value: "Outro" },
            ]}
            label="Sexo"
            id="passenger-1"
            selectedIndex={selectedGender}
            setSelectedIndex={setSelectedGender}
          />
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
