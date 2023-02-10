import { IAirport } from '@app/entities/airport/IAirport';

export abstract class AirportRepository {
  abstract create(airport: IAirport): Promise<void>;
  abstract findById(airportId: string): Promise<IAirport | null>;
  abstract save(airport: IAirport): Promise<void>;
  abstract findAll(): Promise<IAirport[]>;
}
