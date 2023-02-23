import { Aircraft } from '@app/entities/aircraft';
import { AircraftRepository } from '@app/repositories/aircraft-repository';
import { Injectable } from '@nestjs/common';
import { PrismaAircraftMapper } from '../mappers/prisma-aircraft-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAircraftRepository implements AircraftRepository {
  constructor(private prismaService: PrismaService) {}

  async create(aircraft: Aircraft): Promise<void> {
    await this.prismaService.aircraft.create({
      data: aircraft,
    });
  }

  async findById(aircraftId: string): Promise<Aircraft> {
    const raw = await this.prismaService.aircraft.findUnique({
      where: { id: aircraftId },
    });

    return PrismaAircraftMapper.fromPrisma(raw);
  }

  async findByCode(aircraftCode: string): Promise<Aircraft> {
    const raw = await this.prismaService.aircraft.findUnique({
      where: { code: aircraftCode },
    });

    return PrismaAircraftMapper.fromPrisma(raw);
  }

  async save(aircraft: Aircraft): Promise<void> {
    const raw = PrismaAircraftMapper.toPrisma(aircraft);

    await this.prismaService.aircraft.update({
      where: { id: raw.id },
      data: raw,
    });
  }
}
