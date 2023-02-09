import { Module } from '@nestjs/common';
import { AppService } from './infra/http/app.service';
import { AirportController } from './infra/http/controllers/airport.controller';

@Module({
  imports: [],
  controllers: [AirportController],
  providers: [AppService],
})
export class AppModule {}
