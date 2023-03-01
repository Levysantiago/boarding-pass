import { IRoute } from "./IRoute";
import { ISeat } from "./ISeat";

export interface IFlight {
  aircraftCode: string;
  finishBookingTime: string;
  boardingTime: string;
  boardingEndingTime: string;
  flightTime: string;
  arrivalTime: string;
  terminal: string;
  gate: string;
  route?: IRoute;
  seats: ISeat[];
  id: string;
}
