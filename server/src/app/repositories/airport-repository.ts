import { Airport } from '@app/entities/airport';

export abstract class AirportRepository {
  abstract create(airport: Airport): Promise<void>;
  abstract findById(airportId: string): Promise<Airport | null>;
  abstract save(airport: Airport): Promise<void>;
  abstract findAll(): Promise<Airport[]>;
}
