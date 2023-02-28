import moment from "moment";
import { IFlight } from "../../entities/IFlight";
import {
  AircraftCodeText,
  AircraftIcon,
  BlockContainer,
  Container,
  Title,
  TitleContainer,
  TopicContainer,
  TopicPriceText,
  TopicsContainer,
  TopicText,
  TopicTitle,
} from "./styles";

interface IProps {
  flight: IFlight;
}

export function FlightRoute({ flight }: IProps) {
  return (
    <Container>
      <TitleContainer>
        <Title>{`${flight.flightTime} ${flight.route.airportFrom.city}`}</Title>
        <AircraftIcon />
        <Title>{`17:00 ${flight.route.airportTo.city}`}</Title>
      </TitleContainer>

      <BlockContainer>
        <TopicsContainer>
          <TopicContainer>
            <TopicTitle>Voo</TopicTitle>
            <TopicText>Direto</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Duração</TopicTitle>
            <TopicText>{`${flight.route.duration}`}</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>A partir de</TopicTitle>
            <TopicPriceText>R$185,00</TopicPriceText>
          </TopicContainer>
        </TopicsContainer>
      </BlockContainer>

      <AircraftCodeText>{flight.aircraftCode}</AircraftCodeText>
    </Container>
  );
}
