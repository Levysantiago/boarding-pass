import { Airport } from '@app/entities/airport';
import { AirportRepository } from '@app/repositories/airport-repository';
import { Injectable } from '@nestjs/common';

interface IRequest {}

interface IResponse {
  data: Airport[];
}

@Injectable()
export class ListAirportsService {
  constructor(private airportRepository: AirportRepository) {}

  async execute(request?: IRequest): Promise<IResponse> {
    const airports = await this.airportRepository.findAll();

    const data = airports.map((airport) => {
      return airport.toHTTP();
    });

    return { data };
  }
}
