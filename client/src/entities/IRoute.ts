import { IFlight } from "./IFlight";

export interface IRoute {
  airportFromId: string;
  airportToId: string;
  duration: string;
  airportFrom: {
    id: string;
    city: string;
    state: string;
    country: string;
  };
  airportTo: {
    id: string;
    city: string;
    state: string;
    country: string;
  };
  flights?: IFlight[];
}
