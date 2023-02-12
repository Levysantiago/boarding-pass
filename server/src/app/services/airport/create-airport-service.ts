import { Airport } from '@app/entities/airport';
import { CreateAirportDTO } from '@app/entities/airport/dto/create-airport-dto';
import { AirportRepository } from '@app/repositories/airport-repository';
import { Injectable } from '@nestjs/common';

interface IRequest extends CreateAirportDTO {}

interface IResponse {
  data: Airport;
}

@Injectable()
export class CreateAirportService {
  constructor(private airportRepository: AirportRepository) {}

  async execute(request: IRequest): Promise<IResponse> {
    const { city, state, country } = request;

    // Creating local instance
    const airport = new Airport({ city, country, state });

    // Creating in db
    await this.airportRepository.create(airport);

    return { data: airport.toHTTP() };
  }
}
