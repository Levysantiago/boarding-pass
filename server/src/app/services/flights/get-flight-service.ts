import { Flight } from '@app/entities/flight';
import { FlightRepository } from '@app/repositories/flight-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

interface IRequest {
  flightId: string;
}

interface IResponse {
  data: Flight;
}

@Injectable()
class GetFlightService {
  constructor(private flightRepository: FlightRepository) {}

  async execute({ flightId }: IRequest): Promise<IResponse> {
    const flight = await this.flightRepository.findById(flightId);
    if (!flight)
      throw new HttpException('Flight not found.', HttpStatus.NOT_FOUND);

    return { data: flight.toHTTP() };
  }
}

export default GetFlightService;
