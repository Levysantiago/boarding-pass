import { AirportRepository } from '@app/repositories/airport-repository';
import { FlightRepository } from '@app/repositories/flight-repository';
import { PassengerRepository } from '@app/repositories/passenget-repository';
import { SeatRepository } from '@app/repositories/seat-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAirportRepository } from './prisma/repositories/prisma-airport-repository';
import { PrismaFlightRepository } from './prisma/repositories/prisma-flight-repository';
import { PrismaPassengerRepository } from './prisma/repositories/prisma-passenger-repository';
import { PrismaSeatRepository } from './prisma/repositories/prisma-seat-repository';

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
    {
      provide: SeatRepository,
      useClass: PrismaSeatRepository,
    },
    {
      provide: PassengerRepository,
      useClass: PrismaPassengerRepository,
    },
  ],
  exports: [
    AirportRepository,
    FlightRepository,
    SeatRepository,
    PassengerRepository,
  ],
})
export class DatabaseModule {}
