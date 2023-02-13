import { AirportRepository } from '@app/repositories/airport-repository';
import { FlightRepository } from '@app/repositories/flight-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAirportRepository } from './prisma/repositories/prisma-airport-repository';
import { PrismaFlightRepository } from './prisma/repositories/prisma-flight-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AirportRepository,
      useClass: PrismaAirportRepository,
    },
    {
      provide: FlightRepository,
      useClass: PrismaFlightRepository,
    },
  ],
  exports: [AirportRepository, FlightRepository],
})
export class DatabaseModule {}
