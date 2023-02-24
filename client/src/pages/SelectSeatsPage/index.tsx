import {
  AircraftBody,
  AircraftCodeText,
  AircraftColumn,
  AircraftContainer,
  AircraftContent,
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
                <Letter>A</Letter>
                <Letter>A</Letter>
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
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
                <NumberColumnItem>2</NumberColumnItem>
              </NumbersColumn>
            </AircraftColumn>

            <AircraftColumn>
              <LettersLine>
                <Letter>A</Letter>
                <Letter>A</Letter>
                <Letter>A</Letter>
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
        </AircraftContent>
      </AircraftContainer>
    </Container>
  );
}
