import {
  AircraftBlackIcon,
  Badge,
  BadgeTitle,
  Ball1,
  BoardingInfoContainer,
  BoardingPassContainer,
  ColumnItems,
  Container,
  DashedDivider,
  FinalMessageContainer,
  FinalMessageDescription,
  FinalMessageTitle,
  LargeTopicDescription,
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
  return (
    <Container>
      <BoardingPassContainer>
        {/* FLIGHT */}
        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>Voo</TopicTitle>
            <TopicDescription>RS995</TopicDescription>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Voo</TopicTitle>
            <TopicDescription>RS995</TopicDescription>
          </TopicContainer>
        </TopicsLine>

        <TopicsLine>
          <TopicContainer left>
            <TopicTitle>Ilhéus, Brasil</TopicTitle>
            <LargeTopicDescription>IOS</LargeTopicDescription>
            <TopicRegularDescription>17:00</TopicRegularDescription>
          </TopicContainer>

          <AircraftBlackIcon />

          <TopicContainer>
            <TopicTitle>São Paulo, Brasil</TopicTitle>
            <LargeTopicDescription>GRU</LargeTopicDescription>
            <TopicRegularDescription>18:30</TopicRegularDescription>
          </TopicContainer>
        </TopicsLine>

        <DashedDivider />

        {/* PASSENGER */}
        <PassengerInfoContainer>
          <TopicsLine>
            <TopicContainer left>
              <TopicTitle>Passageiro</TopicTitle>
              <TopicDescription>Carlos</TopicDescription>
            </TopicContainer>

            <TopicContainer>
              <TopicTitle>Assento</TopicTitle>
              <TopicDescription>10A</TopicDescription>
            </TopicContainer>
          </TopicsLine>
        </PassengerInfoContainer>

        <DashedDivider />

        {/* BOARDING */}
        <BoardingInfoContainer>
          <ColumnItems>
            <TopicContainer left>
              <TopicTitle>Embarque</TopicTitle>
              <Badge>
                <BadgeTitle>16:15</BadgeTitle>
              </Badge>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Terminal</TopicTitle>
              <TopicDescription>2</TopicDescription>
            </TopicContainer>

            <TopicContainer left>
              <TopicTitle>Portão</TopicTitle>
              <TopicDescription>15</TopicDescription>
            </TopicContainer>
          </ColumnItems>

          <ColumnItems>
            <QrCode />
            <QrCodeDescription>Grupo de embarque: 3</QrCodeDescription>
          </ColumnItems>
        </BoardingInfoContainer>

        <FinalMessageContainer>
          <FinalMessageTitle>{`Atenção: `}</FinalMessageTitle>
          <FinalMessageDescription>Portão fecha 16:45</FinalMessageDescription>
        </FinalMessageContainer>

        <Ball1 />
      </BoardingPassContainer>
    </Container>
  );
}
