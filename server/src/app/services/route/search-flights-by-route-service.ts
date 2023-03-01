import { Airport } from '@app/entities/airport';
import { Flight } from '@app/entities/flight';
import { Route } from '@app/entities/route';
import { AirportRepository } from '@app/repositories/airport-repository';
import { RouteRepository } from '@app/repositories/route-repository';
import { SeatTypeRepository } from '@app/repositories/seat-type-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as moment from 'moment';

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
    private seatTypeRepository: SeatTypeRepository,
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

    const route = await this.routeRepository.findByAirports({
      airportFromId,
      airportToId,
    });
    if (!route || (!airportFrom && !airportTo))
      throw new HttpException('Route not found', HttpStatus.NOT_FOUND);

    route.airportFrom = airportFrom.toHTTP();
    route.airportTo = airportTo.toHTTP();

    const flights = route.flights.map((flight: any) => {
      flight.flightTime = moment(flight.flightTime).locale('br').format('LT');
      flight.boardingTime = moment(flight.boardingTime)
        .locale('br')
        .format('LT');
      flight.boardingEndingTime = moment(flight.boardingEndingTime)
        .locale('br')
        .format('LT');
      flight.finishBookingTime = moment(flight.finishBookingTime)
        .locale('br')
        .format('LT');
      flight.arrivalTime = moment(flight.arrivalTime).locale('br').format('LT');

      return flight.toHTTP();
    });

    delete route.flights;

    return { data: { route: route.toHTTP(), flights } };
  }
}
