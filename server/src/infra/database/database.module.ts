import { AirportRepository } from '@app/repositories/airport-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAirportRepository } from './prisma/repositories/prisma-airport-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AirportRepository,
      useClass: PrismaAirportRepository,
    },
  ],
  exports: [AirportRepository],
})
export class DatabaseModule {}
