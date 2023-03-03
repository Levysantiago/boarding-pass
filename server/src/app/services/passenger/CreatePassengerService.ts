import { Passenger } from '@app/entities/passenger';
import { PassengerRepository } from '@app/repositories/passenger-repository';
import { SeatRepository } from '@app/repositories/seat-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

interface IRequest {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  passport: string;
  cpf: string;

  seatCode: string;
  flightId: string;
}
interface IResponse {
  data: Passenger;
}

@Injectable()
export default class CreatePassengerService {
  constructor(
    private passengerRepository: PassengerRepository,
    private seatRepository: SeatRepository,
  ) {}

  async execute({
    firstName,
    lastName,
    birthDate,
    gender,
    passport,
    cpf,
    flightId,
    seatCode,
  }: IRequest): Promise<IResponse> {
    const seats = await this.seatRepository.findAll({
      flightId,
      code: seatCode,
    });
    const seat = seats[0];
    if (!seat) throw new Error('Seat not found.');
    if (seat.occupied)
      throw new HttpException(
        'Seat is already occupied.',
        HttpStatus.BAD_REQUEST,
      );

    // Creating passenger
    const passenger = new Passenger({
      firstName,
      lastName,
      birthDate: new Date(birthDate),
      gender,
      passport,
      cpf,
      flightId,
      group: '1',
    });

    // Updating seat
    seat.passengerId = passenger.id;

    // Persisting passenger
    await this.passengerRepository.create(passenger);
    // Updating the seat
    await this.seatRepository.save(seat);

    return { data: passenger };
  }
}
