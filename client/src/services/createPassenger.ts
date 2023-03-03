import { IPassenger } from "../entities/IPassenger";
import axios from "./server";

export async function createPassengerService(passenger: IPassenger) {
  try {
    console.log(passenger);

    const response = await axios.post("/passenger", passenger);
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
