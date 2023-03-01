import GetFlightService from '@app/services/flights/get-flight-service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('flight')
export class FlightController {
  constructor(private getFlightService: GetFlightService) {}

  // @Get('/')
  // async list(@Query() query: { airportFromId?: string; airportToId?: string }) {
  //   const { data } = await this.listFlightsService.execute(query);
  //   return data;
  // }

  @Get('/:flightId')
  async getById(@Param() param: { flightId: string }) {
    const { flightId } = param;
    const { data } = await this.getFlightService.execute({ flightId });
    return data;
  }
}
