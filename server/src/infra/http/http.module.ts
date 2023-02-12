import { CreateAirportService } from '@app/services/airport/create-airport-service';
import { ListAirportsService } from '@app/services/airport/list-airports-service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirportController } from './controllers/airport.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AirportController],
  providers: [ListAirportsService, CreateAirportService],
})
export class HttpModule {}
