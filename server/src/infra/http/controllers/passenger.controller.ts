import { CreatePassengerDTO } from '@app/entities/passenger/create-passenger-dto';
import CreatePassengerService from '@app/services/passenger/CreatePassengerService';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('passenger')
export class PassengerController {
  constructor(private createPassengerService: CreatePassengerService) {}

  @Post('/')
  async create(@Body() body: CreatePassengerDTO) {
    const {
      firstName,
      lastName,
      birthDate,
      gender,
      cpf,
      passport,
      flightId,
      seatCode,
    } = body;
    await this.createPassengerService.execute({
      firstName,
      lastName,
      birthDate,
      gender,
      cpf,
      passport,
      flightId,
      seatCode,
    });
  }
}
