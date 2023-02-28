import { useEffect, useState } from "react";
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

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOrigin, setSelectedOrigin] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [airports, setAirports] = useState<IAirport[]>([]);
  const [airportsDropdownSelection, setAirportsDropdownSelection] = useState<
    IDropdownItem[]
  >([]);
  const [flights, setFlights] = useState<IFlight[]>([]);

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
    });

    setAirportsDropdownSelection(_airportsDropdownSelection);
  }

  async function fetchFlights() {
    try {
      const params = new URLSearchParams(location.search);

      const flights = await getFlightsService({
        airportFromId: params.get("from"),
        airportToId: params.get("to"),
      });

      setFlights(flights);
    } catch (e) {
      alert("Error while obtaining flights data.");
    }
  }
  useEffect(() => {
    fetchAirportsData();
  }, []);

  useEffect(() => {
    configureAirportsDropdownSelection();
  }, [airports]);

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
                fetchFlights();
              }}
            ></Button>
          </DropdownContainer>
          {/* <DropdownContainer>
            <Dropdown list={[]} label="Ida" id="home-3" />
          </DropdownContainer> */}
        </HeaderContainer>

        <RoutesContainer>
          {flights.map((flight, index) => {
            return <FlightRoute key={`home-flight-${index}`} flight={flight} />;
          })}
        </RoutesContainer>
      </Container>
    </OutsideContainer>
  );
}

export default Home;
