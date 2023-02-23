import GetFlightService from '@app/services/flights/get-flight-service';
import { ListFlightsService } from '@app/services/flights/list-flights-service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('flight')
export class FlightController {
  constructor(
    private listFlightsService: ListFlightsService,
    private getFlightService: GetFlightService,
  ) {}

  @Get('/')
  async list() {
    const { data } = await this.listFlightsService.execute();
    return data;
  }

  @Get('/:flightId')
  async getById(@Param() param: { flightId: string }) {
    const { flightId } = param;
    const { data } = await this.getFlightService.execute({ flightId });
    return data;
  }
}
