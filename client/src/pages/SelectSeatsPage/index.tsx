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
  SeatButton,
  SeatIcon,
  SeatsContainer,
} from "./styles";
import { Button } from "../../components/Button";
import { useContext, useEffect, useState } from "react";
import { getFlightService } from "../../services/getFlightService";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { IFlight } from "../../entities/IFlight";
import { IServerError } from "../../error/IServerError";
import { ISeat } from "../../entities/ISeat";
import { Tooltip } from "../../components/Tooltip";
import { SummaryContext } from "../../components/context/SummaryContext";

export function SelectSeatsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [flight, setFlight] = useState<IFlight>();
  const [seatsLeft, setSeatsLeft] = useState<ISeat[]>([]);
  const [seatsRight, setSeatsRight] = useState<ISeat[]>([]);
  const [seatSelected, setSeatSelected] = useState<ISeat>();
  const { setSummary, summary } = useContext(SummaryContext);

  async function fetchFlight() {
    const params = new URLSearchParams(location.search);
    const flightId = params.get("flightId");

    if (!flightId) {
      navigate({ pathname: "/" });
      return;
    }

    try {
      const _flight: IFlight = await getFlightService({
        flightId,
      });

      setFlight(_flight);

      if (_flight.seats) {
        const _seatsLeft = _flight.seats.filter((seat: ISeat) => {
          return (
            seat.code.includes("A") ||
            seat.code.includes("B") ||
            seat.code.includes("C")
          );
        });

        const _seatsRight = _flight.seats.filter((seat) => {
          return (
            seat.code.includes("D") ||
            seat.code.includes("E") ||
            seat.code.includes("F")
          );
        });

        setSeatsLeft(_seatsLeft);
        setSeatsRight(_seatsRight);
      }
    } catch (e: any) {
      const data: IServerError = JSON.parse(e.message);
      alert(data.message);
    }
  }

  function handleOnClickContinue() {
    const params = new URLSearchParams(location.search);
    const flightId = params.get("flightId");

    if (flight && seatSelected && flightId) {
      setSummary({
        ...summary,
        flight: {
          arrivalTime: flight.arrivalTime,
          flightTime: flight.flightTime,
          flightDate: flight.flightDate,
          flightPrice: flight.flightPrice,
          seatCode: seatSelected.code,
          seatPrice: seatSelected.seatType.price,
        },
      });

      navigate({
        pathname: "/passenger",
        search: `${createSearchParams({
          flightId,
          seatCode: seatSelected.code,
        })}`,
      });
    }
  }

  useEffect(() => {
    fetchFlight();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <AircraftContainer>
        <AircraftContent>
          <AircraftCodeText>{`Airbus ${flight?.aircraftCode}`}</AircraftCodeText>

          <Divider />

          <AircraftBody>
            <AircraftColumn>
              <LettersLine>
                <Letter>A</Letter>
                <Letter>B</Letter>
                <Letter>C</Letter>
              </LettersLine>

              <SeatsContainer>
                {seatsLeft.map((seat, index) => {
                  return (
                    <Tooltip
                      key={`seat-left-${index}`}
                      title={seat.code}
                      description={`R$ ${seat.seatType.price}`}
                      smallLabel={` ${seat.side}`}
                      highlightText={
                        seat.seatType.name === "Confort"
                          ? "Mais espaço"
                          : undefined
                      }
                      disable={seat.occupied}
                      triggerComponent={
                        <SeatButton
                          onClick={() => {
                            setSeatSelected(seat);
                          }}
                        >
                          <SeatIcon
                            isSelected={seatSelected?.code === seat.code}
                            isOccupied={seat.occupied}
                            isConfort={seat.seatType.name === "Confort"}
                          />
                        </SeatButton>
                      }
                    />
                  );
                })}
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
                <NumberColumnItem>9</NumberColumnItem>
                <NumberColumnItem>10</NumberColumnItem>
                <NumberColumnItem>11</NumberColumnItem>
              </NumbersColumn>
            </AircraftColumn>

            <AircraftColumn>
              <LettersLine>
                <Letter>D</Letter>
                <Letter>E</Letter>
                <Letter>F</Letter>
              </LettersLine>

              <SeatsContainer>
                {seatsRight.map((seat, index) => {
                  return (
                    <Tooltip
                      key={`seat-right-${index}`}
                      title={seat.code}
                      description={`R$ ${seat.seatType.price}`}
                      smallLabel={` ${seat.side}`}
                      highlightText={
                        seat.seatType.name === "Confort"
                          ? "Mais espaço"
                          : undefined
                      }
                      disable={seat.occupied}
                      triggerComponent={
                        <SeatButton
                          onClick={() => {
                            setSeatSelected(seat);
                          }}
                        >
                          <SeatIcon
                            isSelected={seatSelected?.code === seat.code}
                            isOccupied={seat.occupied}
                            isConfort={seat.seatType.name === "Confort"}
                          />
                        </SeatButton>
                      }
                    />
                  );
                })}
              </SeatsContainer>
            </AircraftColumn>
          </AircraftBody>

          <ButtonsContainer>
            <Button
              isBack
              title="Voltar"
              onClick={() => {
                navigate(-1);
              }}
            />
            <Button
              title="Continuar"
              disabled={!seatSelected}
              onClick={handleOnClickContinue}
            />
          </ButtonsContainer>
        </AircraftContent>
      </AircraftContainer>
    </Container>
  );
}
