import { CreateAirportDTO } from '@app/entities/airport/create-airport-dto';
import { CreateAirportService } from '@app/services/airport/create-airport-service';
import { ListAirportsService } from '@app/services/airport/list-airports-service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('airport')
export class AirportController {
  constructor(
    private listAirportsService: ListAirportsService,
    private createAirportService: CreateAirportService,
  ) {}

  @Get('/')
  async list() {
    const { data } = await this.listAirportsService.execute();
    return data;
  }

  @Post('/')
  async create(@Body() body: CreateAirportDTO) {
    const { city, state, country } = body;

    const { data } = await this.createAirportService.execute({
      city,
      state,
      country,
    });

    return data;
  }
}
