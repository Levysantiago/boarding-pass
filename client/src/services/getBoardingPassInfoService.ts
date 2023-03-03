import { IBoardingPassInfo } from "../entities/IBoardingPassInfo";
import axios from "./server";

export async function getBoardingPassInfoService({
  passengerId,
}: {
  passengerId: string;
}): Promise<IBoardingPassInfo> {
  try {
    const response = await axios.get(`/passenger/${passengerId}/boardingPass`);
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
