import { useContext, useEffect, useState } from "react";
import { Dropdown, IDropdownItem } from "../../components/Dropdown";
import { FlightRoute } from "../../components/FlightRoute";
import { getAirportsService } from "../../services/getAirportsService";
import { IAirport } from "../../entities/IAirport";
import {
  Container,
  DropdownContainer,
  HeaderContainer,
  OutsideContainer,
  RoutesContainer,
} from "./styles";
import { Button } from "../../components/Button";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { getFlightsService } from "../../services/getFlightsService";
import { IFlight } from "../../entities/IFlight";
import { IServerError } from "../../error/IServerError";
import { IRoute } from "../../entities/IRoute";
import { SummaryContext } from "../../components/context/SummaryContext";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOrigin, setSelectedOrigin] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [airports, setAirports] = useState<IAirport[]>([]);
  const [airportsDropdownSelection, setAirportsDropdownSelection] = useState<
    IDropdownItem[]
  >([]);
  const [flights, setFlights] = useState<IFlight[]>([]);
  const [route, setRoute] = useState<IRoute>();

  const { setSummary } = useContext(SummaryContext);

  async function fetchAirportsData() {
    try {
      const airportsData = await getAirportsService();

      setAirports(airportsData);
    } catch (e) {
      alert("Error while obtaining airports data.");
    }
  }

  function configureAirportsDropdownSelection() {
    const _airportsDropdownSelection: IDropdownItem[] = [];
    airports.map((airport) => {
      _airportsDropdownSelection.push({
        id: airport.id,
        value: `${airport.state}, ${airport.city} - ${airport.country}`,
      });
      return airport;
    });

    setAirportsDropdownSelection(_airportsDropdownSelection);
  }

  async function fetchFlights() {
    try {
      const params = new URLSearchParams(location.search);

      const data = await getFlightsService({
        airportFromId: params.get("from"),
        airportToId: params.get("to"),
      });

      setFlights(data.flights);
      setRoute(data.route);
    } catch (e: any) {
      const data: IServerError = JSON.parse(e.message);
      alert(data.message);
    }
  }

  function handleOnFlightClick(flight: IFlight) {
    if (route) {
      setSummary({
        route: {
          cityFrom: route.airportFrom.city,
          cityTo: route.airportTo.city,
          duration: route.duration,
        },
      });

      navigate({
        pathname: "/select-seats",
        search: `${createSearchParams({
          flightId: flight.id,
        })}`,
      });
    }
  }

  useEffect(() => {
    fetchAirportsData();
  }, []);

  useEffect(() => {
    configureAirportsDropdownSelection();
    // eslint-disable-next-line
  }, [airports]);

  useEffect(() => {
    if (location.search) {
      fetchFlights();
    }
    // eslint-disable-next-line
  }, [location.search]);

  return (
    <OutsideContainer>
      <Container>
        <HeaderContainer>
          <DropdownContainer>
            <Dropdown
              list={airportsDropdownSelection}
              label="Origem"
              id="home-1"
              selectedIndex={selectedOrigin}
              setSelectedIndex={setSelectedOrigin}
            />
          </DropdownContainer>

          <DropdownContainer>
            <Dropdown
              list={airportsDropdownSelection}
              label="Destino"
              id="home-2"
              selectedIndex={selectedDestination}
              setSelectedIndex={setSelectedDestination}
            />
          </DropdownContainer>

          <DropdownContainer>
            <Button
              title="Buscar"
              onClick={() => {
                navigate({
                  pathname: "/",
                  search: `${createSearchParams({
                    from: airports[selectedOrigin].id,
                    to: airports[selectedDestination].id,
                  })}`,
                });
              }}
            ></Button>
          </DropdownContainer>
          {/* <DropdownContainer>
            <Dropdown list={[]} label="Ida" id="home-3" />
          </DropdownContainer> */}
        </HeaderContainer>

        <RoutesContainer>
          {route
            ? flights.map((flight, index) => {
                return (
                  <FlightRoute
                    route={route}
                    flight={flight}
                    key={`home-flight-${index}`}
                    onClick={() => {
                      handleOnFlightClick(flight);
                    }}
                  />
                );
              })
            : null}
        </RoutesContainer>
      </Container>
    </OutsideContainer>
  );
}

export default Home;
