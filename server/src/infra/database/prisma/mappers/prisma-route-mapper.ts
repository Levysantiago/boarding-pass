import { Route } from '@app/entities/route';
import { Route as RawRoute } from '@prisma/client';

export class PrismaRouteMapper {
  static toPrisma(route: Route) {
    const { airportFrom, airportTo, flights, ..._route } = route;
    return _route;
  }

  static fromPrisma(rawRoute: RawRoute): Route {
    return new Route(rawRoute, rawRoute.id);
  }
}
