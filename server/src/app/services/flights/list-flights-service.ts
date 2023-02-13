import { Flight } from '@app/entities/flight';
import { FlightRepository } from '@app/repositories/flight-repository';
import { Injectable } from '@nestjs/common';

interface IRequest {
  airportFromId: string;
  airportToId: string;
}

interface IResponse {
  data: Flight[];
}

@Injectable()
export class ListFlightsService {
  constructor(private flightRepository: FlightRepository) {}

  async execute(query?: IRequest): Promise<IResponse> {
    const flights = await this.flightRepository.findAll();

    const data = flights.map((flight) => {
      return flight.toHTTP();
    });

    return { data };
  }
}
