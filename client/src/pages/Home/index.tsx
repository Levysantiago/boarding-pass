import { useEffect, useState } from "react";
import { Dropdown, IDropdownItem } from "../../components/Dropdown";
import { Route } from "../../components/Route";
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

function Home() {
  const [selectedOrigin, setSelectedOrigin] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [airports, setAirports] = useState<IAirport[]>([]);
  const [airportsDropdownSelection, setAirportsDropdownSelection] = useState<
    IDropdownItem[]
  >([]);

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

  useEffect(() => {
    fetchAirportsData();
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
                console.log(airports[selectedOrigin]);
                console.log(airports[selectedDestination]);
              }}
            ></Button>
          </DropdownContainer>
          {/* <DropdownContainer>
            <Dropdown list={[]} label="Ida" id="home-3" />
          </DropdownContainer> */}
        </HeaderContainer>

        <RoutesContainer>
          <Route />
          <Route />
        </RoutesContainer>
      </Container>
    </OutsideContainer>
  );
}

export default Home;
