import { Airport } from '@app/entities/airport';
import { Flight } from '@app/entities/flight';
import { AirportRepository } from '@app/repositories/airport-repository';
import { FlightRepository } from '@app/repositories/flight-repository';
import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

interface IRequest {
  airportFromId?: string;
  airportToId?: string;
}

interface IResponse {
  data: Flight[];
}

@Injectable()
export class ListFlightsService {
  constructor(
    private flightRepository: FlightRepository,
    private airportRepository: AirportRepository,
  ) {}

  async execute(query?: IRequest): Promise<IResponse> {
    const { airportFromId, airportToId } = query;

    const flights = await this.flightRepository.findAll();

    let airportFrom: Airport | undefined;
    let airportTo: Airport | undefined;
    if (airportFromId && airportToId) {
      airportFrom = await this.airportRepository.findById(airportFromId);
      airportTo = await this.airportRepository.findById(airportToId);
    }

    const data = flights.map((flight: any) => {
      if (airportFrom && airportTo) {
        flight.route.airportFrom = airportFrom.toHTTP();
        flight.route.airportTo = airportTo.toHTTP();
      }

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

      return flight.toHTTP();
    });

    return { data };
  }
}
