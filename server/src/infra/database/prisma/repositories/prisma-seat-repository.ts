import { Seat } from '@app/entities/seat';
import { SeatRepository } from '@app/repositories/seat-repository';
import { Injectable } from '@nestjs/common';
import { PrismaSeatMapper } from '../mappers/prisma-seat-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaSeatRepository implements SeatRepository {
  constructor(private prismaService: PrismaService) {}

  async create(seat: Seat): Promise<void> {
    await this.prismaService.seat.create({
      data: seat,
    });
  }

  async findById(seatId: string): Promise<Seat | null> {
    const raw = await this.prismaService.seat.findUnique({
      where: { id: seatId },
    });

    return PrismaSeatMapper.fromPrisma(raw);
  }

  async save(seat: Seat): Promise<void> {
    const raw = PrismaSeatMapper.toPrisma(seat);

    await this.prismaService.seat.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findByFlightId(flightId: string): Promise<Seat[]> {
    const seats = await this.prismaService.seat.findMany({
      where: { flightId },
    });
    return seats.map(PrismaSeatMapper.fromPrisma);
  }
}
