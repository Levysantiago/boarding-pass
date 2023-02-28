import axios from "./server";

interface IGetFlightQuery {
  airportFromId: string | null;
  airportToId: string | null;
}

export async function getFlightsService(query?: IGetFlightQuery) {
  const response = await axios.get("/flight", { params: query });
  return response.data;
}
