import { Flight } from '@app/entities/flight';
import { FlightRepository } from '@app/repositories/flight-repository';
import { Injectable } from '@nestjs/common';
import { PrismaFlightMapper } from '../mappers/prisma-flight-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaFlightRepository implements FlightRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(flightId: string): Promise<Flight | null> {
    const raw = await this.prismaService.flight.findUnique({
      where: { id: flightId },
      include: {
        seats: {
          include: {
            seatType: true,
          },
        },
      },
    });

    return PrismaFlightMapper.fromPrisma(raw);
  }

  async save(flight: Flight): Promise<void> {
    const raw = PrismaFlightMapper.toPrisma(flight);

    await this.prismaService.flight.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findAll(): Promise<Flight[]> {
    const airports = await this.prismaService.flight.findMany({
      include: {
        route: {
          select: { duration: true },
        },
      },
    });
    return airports.map(PrismaFlightMapper.fromPrisma);
  }
}
