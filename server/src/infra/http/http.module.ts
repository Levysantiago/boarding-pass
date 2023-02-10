import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AirportController } from './controllers/airport.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AirportController],
  providers: [],
})
export class HttpModule {}
