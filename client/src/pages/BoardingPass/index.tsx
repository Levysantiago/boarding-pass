import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IBoardingPassInfo } from "../../entities/IBoardingPassInfo";
import { IServerError } from "../../error/IServerError";
import { getBoardingPassInfoService } from "../../services/getBoardingPassInfoService";
import {
  AircraftBlackIcon,
  Badge,
  BadgeTitle,
  BoardingInfoContainer,
  ColumnItems,
  Container,
  DashedDivider,
  FinalMessageContainer,
  FinalMessageDescription,
  FinalMessageTitle,
  FlightContainer,
  HeaderTitle,
  IssueText,
  LargeTopicDescription,
  LineItems,
  PassengerInfoContainer,
  QrCode,
  QrCodeDescription,
  TopicContainer,
  TopicDescription,
  TopicRegularDescription,
  TopicsLine,
  TopicTitle,
} from "./styles";

export function BoardingPass() {
  const location = useLocation();
  const navigate = useNavigate();

  const [boardingPassInfo, setBoaardingPassInfo] =
    useState<IBoardingPassInfo>();

  async function fetchBoardingPassInfo() {
    const params = new URLSearchParams(location.search);
    const passengerId = params.get("passengerId");

    try {
      if (!passengerId) {
        navigate({ pathname: "/" });
      }

      const _boardingPassInfo = await getBoardingPassInfoService({
        passengerId: passengerId!,
      });

      setBoaardingPassInfo(_boardingPassInfo);
    } catch (e: any) {
      const data: IServerError = JSON.parse(e.message);
      alert(data.message);
    }
  }

  useEffect(() => {
    fetchBoardingPassInfo();
    // eslint-disable-next-line
  }, []);

  return boardingPassInfo ? (
    <Container>
      <HeaderTitle>Cartão de embarque</HeaderTitle>
      <FlightContainer>
        {/* FLIGHT */}
        <TopicsLine style={{ marginBottom: "20px" }}>
          <TopicContainer left>
            <TopicTitle>Voo</TopicTitle>
            <TopicDescription>
              {boardingPassInfo.flight.aircraftCode}
            </TopicDescription>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Data</TopicTitle>
            <TopicDescription>
              {boardingPassInfo.flight.flightDate}
            </TopicDescription>
          </TopicContainer>
        </TopicsLine>

        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>
              {`${boardingPassInfo.flight.route.airportFrom.state}, ${boardingPassInfo.flight.route.airportFrom.country}`}
            </TopicTitle>
            <LargeTopicDescription>
              {`${boardingPassInfo.flight.route.airportFrom.city}`}
            </LargeTopicDescription>
            <TopicRegularDescription>{`${boardingPassInfo.flight.flightTime}`}</TopicRegularDescription>
          </TopicContainer>

          <AircraftBlackIcon />

          <TopicContainer>
            <TopicTitle>
              {`${boardingPassInfo.flight.route.airportTo.state}, ${boardingPassInfo.flight.route.airportTo.country}`}
            </TopicTitle>
            <LargeTopicDescription>
              {`${boardingPassInfo.flight.route.airportTo.city}`}
            </LargeTopicDescription>
            <TopicRegularDescription>{`${boardingPassInfo.flight.arrivalTime}`}</TopicRegularDescription>
          </TopicContainer>
        </TopicsLine>
      </FlightContainer>

      {/* PASSENGER */}
      <PassengerInfoContainer>
        <DashedDivider style={{ top: "0px" }} />

        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>Passageiro</TopicTitle>
            <TopicDescription>{`${boardingPassInfo.firstName} ${boardingPassInfo.lastName}`}</TopicDescription>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Assento</TopicTitle>
            <TopicDescription>{`${boardingPassInfo.seat.code}`}</TopicDescription>
          </TopicContainer>
        </TopicsLine>

        <DashedDivider style={{ bottom: "0px" }} />
      </PassengerInfoContainer>

      {/* BOARDING */}
      <BoardingInfoContainer>
        <LineItems>
          <ColumnItems>
            <TopicContainer left>
              <TopicTitle>Embarque</TopicTitle>
              <Badge>
                <BadgeTitle>{`${boardingPassInfo.flight.boardingTime}`}</BadgeTitle>
              </Badge>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Terminal</TopicTitle>
              <TopicDescription>{`${boardingPassInfo.flight.terminal}`}</TopicDescription>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Portão</TopicTitle>
              <TopicDescription>{`${boardingPassInfo.flight.gate}`}</TopicDescription>
            </TopicContainer>
          </ColumnItems>

          <ColumnItems>
            <QrCode />
            <QrCodeDescription>
              {`Grupo de embarque: ${boardingPassInfo.group}`}
            </QrCodeDescription>
          </ColumnItems>
        </LineItems>

        <FinalMessageContainer>
          <FinalMessageTitle>{`Atenção: `}</FinalMessageTitle>
          <FinalMessageDescription>{`Portão fecha ${boardingPassInfo.flight.boardingEndingTime}`}</FinalMessageDescription>
        </FinalMessageContainer>
      </BoardingInfoContainer>

      <IssueText>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </IssueText>
    </Container>
  ) : (
    <></>
  );
}
