import { Flight } from '@app/entities/flight';
import { AirportRepository } from '@app/repositories/airport-repository';
import { FlightRepository } from '@app/repositories/flight-repository';
import { Injectable } from '@nestjs/common';
import { Airport } from '@prisma/client';

interface IRequest {
  airportFromId: string;
  airportToId: string;
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
    const flights = await this.flightRepository.findAll();

    let airportFrom: Airport | undefined;
    let airportTo: Airport | undefined;
    if (query) {
      airportFrom = await this.airportRepository.findById(query.airportFromId);
      airportTo = await this.airportRepository.findById(query.airportToId);
    }

    const data = flights.map((flight) => {
      flight.route.airportFrom = airportFrom;
      flight.route.airportTo = airportTo;
      return flight.toHTTP();
    });

    return { data };
  }
}
