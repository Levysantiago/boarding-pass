import { Dispatch, SetStateAction } from "react";

export interface ISummaryData {
  route?: {
    cityFrom: string;
    cityTo: string;
    duration: string;
  };

  flight?: {
    flightTime: string;
    flightDate: string;
    arrivalTime: string;
    flightPrice: string;
    seatCode: string;
    seatPrice: string;
  };
}

export interface ISummaryContext {
  summary: ISummaryData | undefined;
  setSummary: Dispatch<SetStateAction<ISummaryData | undefined>>;
}
