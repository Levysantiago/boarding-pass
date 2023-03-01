import { AirportRepository } from '@app/repositories/airport-repository';
import { FlightRepository } from '@app/repositories/flight-repository';
import { PassengerRepository } from '@app/repositories/passenger-repository';
import { RouteRepository } from '@app/repositories/route-repository';
import { SeatRepository } from '@app/repositories/seat-repository';
import { SeatTypeRepository } from '@app/repositories/seat-type-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAirportRepository } from './prisma/repositories/prisma-airport-repository';
import { PrismaFlightRepository } from './prisma/repositories/prisma-flight-repository';
import { PrismaPassengerRepository } from './prisma/repositories/prisma-passenger-repository';
import { PrismaRouteRepository } from './prisma/repositories/prisma-route-repository';
import { PrismaSeatRepository } from './prisma/repositories/prisma-seat-repository';
import { PrismaSeatTypeRepository } from './prisma/repositories/seat-type-repository';

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
    {
      provide: RouteRepository,
      useClass: PrismaRouteRepository,
    },
    {
      provide: SeatTypeRepository,
      useClass: PrismaSeatTypeRepository,
    },
  ],
  exports: [
    AirportRepository,
    FlightRepository,
    SeatRepository,
    SeatTypeRepository,
    PassengerRepository,
    RouteRepository,
  ],
})
export class DatabaseModule {}
