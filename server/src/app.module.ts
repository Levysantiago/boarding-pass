import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { AppService } from './infra/http/app.service';
import { AirportController } from './infra/http/controllers/airport.controller';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [AirportController],
  providers: [AppService],
})
export class AppModule {}
