import { CreatePassengerDTO } from '@app/entities/passenger/create-passenger-dto';
import CreatePassengerService from '@app/services/passenger/CreatePassengerService';
import GetBoardingPassInfoService from '@app/services/passenger/GetBoardingPassInfoService';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('passenger')
export class PassengerController {
  constructor(
    private createPassengerService: CreatePassengerService,
    private getBoardingPassInfoService: GetBoardingPassInfoService,
  ) {}

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
    const { data } = await this.createPassengerService.execute({
      firstName,
      lastName,
      birthDate,
      gender,
      cpf,
      passport,
      flightId,
      seatCode,
    });

    return data;
  }

  @Get('/:passengerId/boardingPass')
  async getBoardingPass(@Param() params: { passengerId: string }) {
    const { passengerId } = params;
    const { data } = await this.getBoardingPassInfoService.execute({
      passengerId,
    });
    return data;
  }
}
