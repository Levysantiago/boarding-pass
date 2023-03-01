import { CreateAirportService } from '@app/services/airport/create-airport-service';
import { ListAirportsService } from '@app/services/airport/list-airports-service';
import GetFlightService from '@app/services/flights/get-flight-service';
import CreatePassengerService from '@app/services/passenger/CreatePassengerService';
import GetBoardingPassInfoService from '@app/services/passenger/GetBoardingPassInfoService';
import { SearchFlightsByRouteService } from '@app/services/route/search-flights-by-route-service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirportController } from './controllers/airport.controller';
import { FlightController } from './controllers/flight.controller';
import { PassengerController } from './controllers/passenger.controller';
import { RouteController } from './controllers/route.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    AirportController,
    FlightController,
    PassengerController,
    RouteController,
  ],
  providers: [
    ListAirportsService,
    CreateAirportService,
    SearchFlightsByRouteService,
    GetFlightService,
    CreatePassengerService,
    GetBoardingPassInfoService,
  ],
})
export class HttpModule {}
