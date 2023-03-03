export interface IBoardingPassInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  passport: string;
  group: string;
  cpf: string;
  seat: {
    flightId: string;
    occupied: boolean;
    code: string;
    side: string;
    seatType: {
      name: string;
      price: string;
    };
  };
  flight: {
    aircraftCode: string;
    finishBookingTime: string;
    boardingTime: string;
    boardingEndingTime: string;
    flightTime: string;
    flightDate: string;
    arrivalTime: string;
    terminal: string;
    gate: string;
    route: {
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
    };
    id: string;
  };
}
