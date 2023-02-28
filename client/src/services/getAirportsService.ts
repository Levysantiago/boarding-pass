import axios from "./server";

export async function getAirportsService() {
  const response = await axios.get("/airport");
  return response.data;
}
