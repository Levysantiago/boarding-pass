import axios from "./server";

interface IGetFlightQuery {
  airportFromId: string | null;
  airportToId: string | null;
}

export async function getFlightsService(query?: IGetFlightQuery) {
  try {
    const response = await axios.get("/route/flights", { params: query });
    return response.data;
  } catch (e: any) {
    if (e.response && e.response.data) {
      throw new Error(JSON.stringify(e.response.data));
    }

    throw new Error(
      JSON.stringify({
        statusCode: 500,
        message: "Error while obtaining flights data",
      })
    );
  }
}
