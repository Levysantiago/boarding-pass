import { Passenger } from '@app/entities/passenger';
import { PassengerRepository } from '@app/repositories/passenget-repository';
import { Injectable } from '@nestjs/common';
import { PrismaPassengerMapper } from '../mappers/prisma-passenger-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaPassengerRepository implements PassengerRepository {
  constructor(private prismaService: PrismaService) {}

  async create(passenger: Passenger): Promise<void> {
    await this.prismaService.passenger.create({
      data: passenger,
    });
  }

  async findById(passengerId: string): Promise<Passenger | null> {
    const raw = await this.prismaService.passenger.findUnique({
      where: { id: passengerId },
    });

    return raw ? PrismaPassengerMapper.fromPrisma(raw) : null;
  }

  async save(passenger: Passenger): Promise<void> {
    const raw = PrismaPassengerMapper.toPrisma(passenger);

    await this.prismaService.passenger.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findAll(): Promise<Passenger[]> {
    const passengers = await this.prismaService.passenger.findMany();
    return passengers.map(PrismaPassengerMapper.fromPrisma);
  }
}
