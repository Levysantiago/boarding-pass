import { Flight } from '@app/entities/flight';
import { Seat } from '@app/entities/seat';
import { Flight as RawFlight } from '@prisma/client';

export class PrismaFlightMapper {
  static toPrisma(flight: Flight): RawFlight {
    const { route, seats, ...raw } = flight;
    return raw;
  }

  static fromPrisma(rawFlight: RawFlight): Flight {
    const flight = new Flight(rawFlight, rawFlight.id);

    // Configuring seats
    flight.seats = flight.seats.map((seat) => {
      return new Seat(seat);
    });

    return flight;
  }
}
