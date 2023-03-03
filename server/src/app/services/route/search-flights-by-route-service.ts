import { Airport } from '@app/entities/airport';
import { Flight } from '@app/entities/flight';
import { Route } from '@app/entities/route';
import { AirportRepository } from '@app/repositories/airport-repository';
import { RouteRepository } from '@app/repositories/route-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

interface IRequest {
  airportFromId?: string;
  airportToId?: string;
}

interface IResponse {
  data: { route: Route; flights: Flight[] };
}

@Injectable()
export class SearchFlightsByRouteService {
  constructor(
    private routeRepository: RouteRepository,
    private airportRepository: AirportRepository,
  ) {}

  async execute(query?: IRequest): Promise<IResponse> {
    const { airportFromId, airportToId } = query;

    let airportFrom: Airport | undefined;
    let airportTo: Airport | undefined;
    if (airportFromId && airportToId) {
      if (airportFromId === airportToId)
        throw new HttpException(
          'Airports selected cannot be the same',
          HttpStatus.BAD_REQUEST,
        );
      airportFrom = await this.airportRepository.findById(airportFromId);
      airportTo = await this.airportRepository.findById(airportToId);
    }
    if (!airportFrom || !airportTo) {
      throw new HttpException('Invalid route selected', HttpStatus.BAD_REQUEST);
    }

    const route = await this.routeRepository.findByAirports({
      airportFromId,
      airportToId,
    });
    if (!route) {
      return {
        data: {
          route: null,
          flights: [],
        },
      };
    }

    route.airportFrom = airportFrom.toHTTP();
    route.airportTo = airportTo.toHTTP();

    const flights = route.flights.map((flight: any) => {
      return flight.toHTTP();
    });

    delete route.flights;

    return { data: { route: route.toHTTP(), flights } };
  }
}
