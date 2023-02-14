import { Flight } from '@app/entities/flight';
import { Flight as RawFlight } from '@prisma/client';

export class PrismaFlightMapper {
  static toPrisma(flight: Flight): RawFlight {
    const { route, ...raw } = flight;
    return raw;
  }

  static fromPrisma(rawFlight: RawFlight): Flight {
    return new Flight(rawFlight, rawFlight.id);
  }
}
