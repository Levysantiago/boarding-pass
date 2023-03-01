import { ISeatType } from "./ISeatType";

export interface ISeat {
  flightId: string;
  occupied: boolean;
  code: string;
  side: string;
  seatType: ISeatType;
}
