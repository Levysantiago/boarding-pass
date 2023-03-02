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
import { useEffect, useState } from "react";
import { getFlightService } from "../../services/getFlightService";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { IFlight } from "../../entities/IFlight";
import { IServerError } from "../../error/IServerError";
import { ISeat } from "../../entities/ISeat";
import { Tooltip } from "../../components/Tooltip";

export function SelectSeatsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setFlight] = useState<IFlight>();
  const [seatsLeft, setSeatsLeft] = useState<ISeat[]>([]);
  const [seatsRight, setSeatsRight] = useState<ISeat[]>([]);
  const [seatCodeSelected, setSeatCodeSelected] = useState<string>();

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

  useEffect(() => {
    fetchFlight();
  }, []);

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
                {seatsLeft.map((seat, index) => {
                  return (
                    <Tooltip
                      key={`seat-left-${index}`}
                      title={seat.code}
                      description={`R$ ${seat.seatType.price}`}
                      triggerComponent={
                        <SeatButton
                          onClick={() => {
                            setSeatCodeSelected(seat.code);
                          }}
                        >
                          <SeatIcon
                            isSelected={seatCodeSelected === seat.code}
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
                      triggerComponent={
                        <SeatButton
                          onClick={() => {
                            setSeatCodeSelected(seat.code);
                          }}
                        >
                          <SeatIcon
                            isSelected={seatCodeSelected === seat.code}
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
              disabled={!seatCodeSelected}
              onClick={() => {
                const params = new URLSearchParams(location.search);
                const flightId = params.get("flightId");

                if (flightId && seatCodeSelected) {
                  navigate({
                    pathname: "/passenger",
                    search: `${createSearchParams({
                      flightId,
                      seatCode: seatCodeSelected,
                    })}`,
                  });
                }
              }}
            />
          </ButtonsContainer>
        </AircraftContent>
      </AircraftContainer>
    </Container>
  );
}
