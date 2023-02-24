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

export function Route() {
  return (
    <Container>
      <TitleContainer>
        <Title>17:00 GRU</Title>
        <AircraftIcon />
        <Title>17:00 SFO</Title>
      </TitleContainer>

      <BlockContainer>
        <TopicsContainer>
          <TopicContainer>
            <TopicTitle>Voo</TopicTitle>
            <TopicText>Direto</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>Duração</TopicTitle>
            <TopicText>1 h 30 min</TopicText>
          </TopicContainer>

          <TopicContainer>
            <TopicTitle>A partir de</TopicTitle>
            <TopicPriceText>R$185,00</TopicPriceText>
          </TopicContainer>
        </TopicsContainer>
      </BlockContainer>

      <AircraftCodeText>RS995</AircraftCodeText>
    </Container>
  );
}
