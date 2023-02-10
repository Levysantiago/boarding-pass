import { AirportRepository } from '@app/repositories/airport-repository';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AirportController {
  constructor(private airportRepository: AirportRepository) {}

  @Get('/')
  async heartbeat() {
    const airport = await this.airportRepository.findAll();
    console.log(airport);
    return { message: 'alive' };
  }
}
