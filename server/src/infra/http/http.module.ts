import { CreateAirportService } from '@app/services/airport/create-airport-service';
import { ListAirportsService } from '@app/services/airport/list-airports-service';
import GetFlightService from '@app/services/flights/get-flight-service';
import { ListFlightsService } from '@app/services/flights/list-flights-service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirportController } from './controllers/airport.controller';
import { FlightController } from './controllers/flight.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AirportController, FlightController],
  providers: [
    ListAirportsService,
    CreateAirportService,
    ListFlightsService,
    GetFlightService,
  ],
})
export class HttpModule {}
