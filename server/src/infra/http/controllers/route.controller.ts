import { SearchFlightsByRouteService } from '@app/services/route/search-flights-by-route-service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('route')
export class RouteController {
  constructor(
    private searchFlightsByRouteService: SearchFlightsByRouteService,
  ) {}

  @Get('/flights')
  async list(@Query() query: { airportFromId?: string; airportToId?: string }) {
    const { data } = await this.searchFlightsByRouteService.execute(query);
    return data;
  }
}
