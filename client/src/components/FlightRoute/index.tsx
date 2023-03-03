import { IFlight } from "../../entities/IFlight";
import { IRoute } from "../../entities/IRoute";
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
  route: IRoute;
  flight: IFlight;
  onClick?: () => void;
}

export function FlightRoute({ route, flight, onClick }: IProps) {
  return (
    <Container onClick={onClick}>
      <TitleContainer>
        <Title>{`${flight.flightTime} ${route.airportFrom.city}`}</Title>
        <AircraftIcon />
        <Title>{`${flight.arrivalTime} ${route.airportTo.city}`}</Title>
      </TitleContainer>

      <BlockContainer>
        <TopicsContainer>
          <TopicContainer>
            <TopicTitle>Voo</TopicTitle>
            <TopicText>Direto</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Duração</TopicTitle>
            <TopicText>{`${route.duration}`}</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>A partir de</TopicTitle>
            <TopicPriceText>{`R$ ${flight.flightPrice}`}</TopicPriceText>
          </TopicContainer>
        </TopicsContainer>
      </BlockContainer>

      <AircraftCodeText>{flight.aircraftCode}</AircraftCodeText>
    </Container>
  );
}
