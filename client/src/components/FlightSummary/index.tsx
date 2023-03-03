import { sumStringNumbers } from "../../helpers/sumStringNumbers";
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
  return summary.flight && summary.route ? (
    <FlightSummaryContainer>
      <Title>Resumo de voo</Title>
      <FlightSummaryContent>
        <SummaryText>{`${summary.flight.flightTime} ${summary.route.cityFrom} -> ${summary.flight.arrivalTime} ${summary.route.cityTo}`}</SummaryText>
        <SummaryText>{`Duração: ${summary.route.duration}`}</SummaryText>
        <SummaryText>{`Data: ${summary.flight.flightDate}`}</SummaryText>
        <SummaryText>{"Voo: Direto"}</SummaryText>
        <SummaryText>{`Assento: ${summary.flight.seatCode}`}</SummaryText>

        <FinalPriceContainer>
          <FinalPriceLabel>Preço final</FinalPriceLabel>
          <FinalPriceValue>{`R$ ${sumStringNumbers({
            a: summary.flight.seatPrice,
            b: summary.flight.flightPrice,
            fixed: 2,
          })}`}</FinalPriceValue>
        </FinalPriceContainer>
      </FlightSummaryContent>
    </FlightSummaryContainer>
  ) : (
    <></>
  );
}
