import { useEffect } from "react";
import { ISummaryData } from "../context/ISummaryContext";
import {
  FinalPriceContainer,
  FinalPriceLabel,
  FinalPriceValue,
  FlightSummaryContainer,
  FlightSummaryContent,
  SummaryText,
  Title,
} from "./styles";

export interface IProps {
  summary: ISummaryData;
}

export function FlightSummary({ summary }: IProps) {
  return (
    <FlightSummaryContainer>
      <Title>Resumo de voo</Title>
      <FlightSummaryContent>
        <SummaryText>{`${summary.flight?.flightTime} ${summary.route?.cityFrom} -> ${summary.flight?.arrivalTime} ${summary.route?.cityTo}`}</SummaryText>
        <SummaryText>{`Duração ${summary.route?.duration}`}</SummaryText>
        <SummaryText>{"Voo Direto"}</SummaryText>
        <SummaryText>{`Assento ${summary.flight?.seatCode}`}</SummaryText>

        <FinalPriceContainer>
          <FinalPriceLabel>Preço final</FinalPriceLabel>
          <FinalPriceValue>{`R$ ${summary.flight?.seatPrice}`}</FinalPriceValue>
        </FinalPriceContainer>
      </FlightSummaryContent>
    </FlightSummaryContainer>
  );
}
