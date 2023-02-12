import { Airport } from '@app/entities/airport';
import { AirportRepository } from '@app/repositories/airport-repository';
import { Injectable } from '@nestjs/common';
import { PrismaAirportMapper } from '../mappers/prisma-airport-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAirportRepository implements AirportRepository {
  constructor(private prismaService: PrismaService) {}

  async create(airport: Airport): Promise<void> {
    await this.prismaService.airport.create({
      data: airport,
    });
  }

  async findById(airportId: string): Promise<Airport> {
    const raw = await this.prismaService.airport.findUnique({
      where: { id: airportId },
    });

    return PrismaAirportMapper.fromPrisma(raw);
  }

  async save(airport: Airport): Promise<void> {
    const raw = PrismaAirportMapper.toPrisma(airport);

    await this.prismaService.airport.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findAll(): Promise<Airport[]> {
    const airports = await this.prismaService.airport.findMany();
    return airports.map(PrismaAirportMapper.fromPrisma);
  }
}
