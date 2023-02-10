import { Airport } from '@app/entities/airport';
import { IAirport } from '@app/entities/airport/IAirport';
import { Airport as RawAirport } from '@prisma/client';

export class PrismaAirportMapper {
  static toPrisma(airport: IAirport) {
    return {
      id: airport.id,
      city: airport.city,
      state: airport.state,
      country: airport.country,
      createdAt: airport.createdAt,
      updatedAt: airport.updatedAt,
    };
  }

  static fromPrisma(rawAirport: RawAirport): IAirport {
    return new Airport(
      {
        city: rawAirport.city,
        state: rawAirport.state,
        country: rawAirport.country,
        createdAt: rawAirport.createdAt,
        updatedAt: rawAirport.updatedAt,
      },
      rawAirport.id,
    );
  }
}
