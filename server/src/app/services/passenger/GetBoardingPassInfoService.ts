import { Passenger } from '@app/entities/passenger';
import { AirportRepository } from '@app/repositories/airport-repository';
import { PassengerRepository } from '@app/repositories/passenger-repository';
import { Injectable } from '@nestjs/common';

interface IRequest {
  passengerId: string;
}

interface IResponse {
  data: Passenger;
}

@Injectable()
export default class GetBoardingPassInfoService {
  constructor(
    private passengerRepository: PassengerRepository,
    private airportRepository: AirportRepository,
  ) {}

  async execute({ passengerId }: IRequest): Promise<IResponse> {
    const passenger = await this.passengerRepository.findById(passengerId);
    if (!passenger) throw new Error('Passenger not found');

    const airportFrom = await this.airportRepository.findById(
      passenger.flight.route.airportIdFrom,
    );
    const airportTo = await this.airportRepository.findById(
      passenger.flight.route.airportIdTo,
    );

    passenger.flight.route.airportFrom = airportFrom;
    passenger.flight.route.airportTo = airportTo;

    return { data: passenger.toHTTP() };
  }
}
