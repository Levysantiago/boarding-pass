import axios from "./server";

interface IGetFlightQuery {
  flightId: string;
}

export async function getFlightService({ flightId }: IGetFlightQuery) {
  try {
    const response = await axios.get(`/flight/${flightId}`);
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
