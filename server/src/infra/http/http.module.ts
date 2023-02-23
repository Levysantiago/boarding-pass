import { CreateAirportService } from '@app/services/airport/create-airport-service';
import { ListAirportsService } from '@app/services/airport/list-airports-service';
import GetFlightService from '@app/services/flights/get-flight-service';
import { ListFlightsService } from '@app/services/flights/list-flights-service';
import CreatePassengerService from '@app/services/passenger/CreatePassengerService';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirportController } from './controllers/airport.controller';
import { FlightController } from './controllers/flight.controller';
import { PassengerController } from './controllers/passenger.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AirportController, FlightController, PassengerController],
  providers: [
    ListAirportsService,
    CreateAirportService,
    ListFlightsService,
    GetFlightService,
    CreatePassengerService,
  ],
})
export class HttpModule {}
