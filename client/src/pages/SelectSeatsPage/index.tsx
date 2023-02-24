import {
  AircraftBody,
  AircraftCodeText,
  AircraftColumn,
  AircraftContainer,
  AircraftContent,
  ButtonsContainer,
  Container,
  Divider,
  Letter,
  LettersLine,
  NumberColumnItem,
  NumbersColumn,
  SeatIcon,
  SeatsContainer,
} from "./styles";
import seatFreeIcon from "../../assets/seat-free.svg";
import { Button } from "../../components/Button";

export function SelectSeatsPage() {
  return (
    <Container>
      <AircraftContainer>
        <AircraftContent>
          <AircraftCodeText>Airbus RS995</AircraftCodeText>

          <Divider />

          <AircraftBody>
            <AircraftColumn>
              <LettersLine>
                <Letter>A</Letter>
                <Letter>B</Letter>
                <Letter>C</Letter>
              </LettersLine>

              <SeatsContainer>
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
              </SeatsContainer>
            </AircraftColumn>

            <AircraftColumn>
              <NumbersColumn>
                <NumberColumnItem>1</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>3</NumberColumnItem>
                <NumberColumnItem>4</NumberColumnItem>
                <NumberColumnItem>5</NumberColumnItem>
                <NumberColumnItem>6</NumberColumnItem>
                <NumberColumnItem>7</NumberColumnItem>
                <NumberColumnItem>8</NumberColumnItem>
              </NumbersColumn>
            </AircraftColumn>

            <AircraftColumn>
              <LettersLine>
                <Letter>D</Letter>
                <Letter>E</Letter>
                <Letter>F</Letter>
              </LettersLine>

              <SeatsContainer>
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
                <SeatIcon src={seatFreeIcon} />
              </SeatsContainer>
            </AircraftColumn>
          </AircraftBody>

          <ButtonsContainer>
            <Button isBack title="Voltar" />
            <Button title="Continuar" />
          </ButtonsContainer>
        </AircraftContent>
      </AircraftContainer>
    </Container>
  );
}
