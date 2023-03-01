import { Flight } from '@app/entities/flight';

export abstract class FlightRepository {
  abstract findById(flightId: string): Promise<Flight | null>;
  abstract save(flight: Flight): Promise<void>;
  abstract findAll(query?: { routeId?: string }): Promise<Flight[]>;
}
