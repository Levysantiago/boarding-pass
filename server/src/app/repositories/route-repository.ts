import { Route } from '@app/entities/route';

export abstract class RouteRepository {
  abstract findById(routeId: string): Promise<Route | null>;
  abstract findByAirports(query: {
    airportFromId: string;
    airportToId: string;
  }): Promise<Route | null>;
  abstract save(route: Route): Promise<void>;
  abstract findAll(query?: {
    airportFromId?: string;
    airportToId?: string;
  }): Promise<Route[]>;
}
