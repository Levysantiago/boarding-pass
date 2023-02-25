import {
  FinalPriceContainer,
  FinalPriceLabel,
  FinalPriceValue,
  FlightSummaryContainer,
  FlightSummaryContent,
  SummaryText,
  Title,
} from "./styles";

export function FlightSummary() {
  return (
    <FlightSummaryContainer>
      <Title>Resumo de voo</Title>
      <FlightSummaryContent>
        <SummaryText>{"17:00 GRU -> 18:30 SFO"}</SummaryText>
        <SummaryText>{"Duração 1 h 30 min"}</SummaryText>
        <SummaryText>{"Voo Direto"}</SummaryText>
        <SummaryText>{"Assento 10A"}</SummaryText>

        <FinalPriceContainer>
          <FinalPriceLabel>Preço final</FinalPriceLabel>
          <FinalPriceValue>R$ 255,00</FinalPriceValue>
        </FinalPriceContainer>
      </FlightSummaryContent>
    </FlightSummaryContainer>
  );
}
