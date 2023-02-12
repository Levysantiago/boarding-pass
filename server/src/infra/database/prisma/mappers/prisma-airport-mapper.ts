import { Airport } from '@app/entities/airport';
import { Airport as RawAirport } from '@prisma/client';

export class PrismaAirportMapper {
  static toPrisma(airport: Airport) {
    return airport;
  }

  static fromPrisma(rawAirport: RawAirport): Airport {
    return new Airport(rawAirport, rawAirport.id);
  }
}
