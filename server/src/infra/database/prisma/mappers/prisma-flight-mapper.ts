import { Flight } from '@app/entities/flight';
import { Flight as RawFlight, Seat as RawSeat } from '@prisma/client';
import { PrismaSeatMapper } from './prisma-seat-mapper';

export class PrismaFlightMapper {
  static toPrisma(flight: Flight): RawFlight {
    const { route, seats, ...raw } = flight;
    return raw;
  }

  static fromPrisma(rawFlight: RawFlight): Flight {
    const flight = new Flight(rawFlight, rawFlight.id);

    // Configuring seats
    if (flight.seats) {
      flight.seats = flight.seats.map((seat) => {
        return PrismaSeatMapper.fromPrisma(seat as RawSeat);
      });
    }

    return flight;
  }
}
