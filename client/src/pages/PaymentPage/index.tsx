import { Button } from "../../components/Button";
import { FlightSummary } from "../../components/FlightSummary";
import {
  BoldText,
  ButtonContainer,
  Container,
  DescriptionText,
  PaymentInfo,
  PaymentInfoContainer,
  PixContainer,
  Title,
} from "./styles";

export function PaymentPage() {
  return (
    <Container>
      <FlightSummary />

      <PaymentInfoContainer>
        <Title>Pagamento via PIX</Title>
        <PaymentInfo>
          <BoldText>Valor: R$ 255,00</BoldText>

          <DescriptionText>
            Código PIX válido até 00/00/000 16:14:37 (Horário de Brasília)
          </DescriptionText>

          <PixContainer />
        </PaymentInfo>

        <ButtonContainer>
          <Button title="Cartão de embarque" />
        </ButtonContainer>
      </PaymentInfoContainer>
    </Container>
  );
}
