import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import {
  ButtonsContainer,
  Container,
  FinalPriceContainer,
  FinalPriceLabel,
  FinalPriceValue,
  FlightSummary,
  FlightSummaryContainer,
  InputContainer,
  PassengerInfo,
  PassengerInfoContainer,
  SummaryText,
  Title,
} from "./styles";

export function PassengerPage() {
  return (
    <Container>
      <FlightSummaryContainer>
        <Title>Resumo de voo</Title>
        <FlightSummary>
          <SummaryText>{"17:00 GRU -> 18:30 SFO"}</SummaryText>
          <SummaryText>{"Duração 1 h 30 min"}</SummaryText>
          <SummaryText>{"Voo Direto"}</SummaryText>
          <SummaryText>{"Assento 10A"}</SummaryText>

          <FinalPriceContainer>
            <FinalPriceLabel>Preço final</FinalPriceLabel>
            <FinalPriceValue>R$ 255,00</FinalPriceValue>
          </FinalPriceContainer>
        </FlightSummary>
      </FlightSummaryContainer>

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
