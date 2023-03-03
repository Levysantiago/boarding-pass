import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { SummaryContext } from "../../components/context/SummaryContext";
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
  const { summary } = useContext(SummaryContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!summary) navigate(-1);
  }, [summary, navigate]);

  return (
    <Container>
      <FlightSummary summary={summary!} />

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
