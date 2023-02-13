import { Flight } from '@app/entities/flight';
import { Flight as RawFlight } from '@prisma/client';

export class PrismaFlightMapper {
  static toPrisma(flight: Flight) {
    return flight;
  }

  static fromPrisma(rawFlight: RawFlight): Flight {
    return new Flight(rawFlight, rawFlight.id);
  }
}
