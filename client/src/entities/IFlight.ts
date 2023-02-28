export interface IFlight {
  aircraftCode: string;
  finishBookingTime: string;
  boardingTime: string;
  boardingEndingTime: string;
  flightTime: string;
  terminal: string;
  gate: string;
  route: {
    airportIdFrom: string;
    airportIdTo: string;
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
  };
  id: string;
}
