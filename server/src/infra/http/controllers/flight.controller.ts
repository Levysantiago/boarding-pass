import { ListFlightsService } from '@app/services/flights/list-flights-service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('flight')
export class FlightController {
  constructor(private listFlightsService: ListFlightsService) {}

  @Get('/')
  async list() {
    const { data } = await this.listFlightsService.execute();
    return data;
  }
}
