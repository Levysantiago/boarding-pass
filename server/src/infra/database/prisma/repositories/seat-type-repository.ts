import { SeatType } from '@app/entities/seat-type';
import { SeatTypeRepository } from '@app/repositories/seat-type-repository';
import { Injectable } from '@nestjs/common';
import { PrismaSeatTypeMapper } from '../mappers/prisma-seat-type-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaSeatTypeRepository implements SeatTypeRepository {
  constructor(private prismaService: PrismaService) {}

  async create(seatType: SeatType): Promise<void> {
    await this.prismaService.seatType.create({
      data: PrismaSeatTypeMapper.toPrisma(seatType),
    });
  }

  async findById(seatTypeId: string): Promise<SeatType | null> {
    const raw = await this.prismaService.seatType.findUnique({
      where: { id: seatTypeId },
    });

    return PrismaSeatTypeMapper.fromPrisma(raw);
  }

  async save(seatType: SeatType): Promise<void> {
    const raw = PrismaSeatTypeMapper.toPrisma(seatType);

    await this.prismaService.seatType.update({
      where: { id: raw.id },
      data: raw,
    });
  }

  async findAll(): Promise<SeatType[]> {
    const seatTypes = await this.prismaService.seatType.findMany({});
    return seatTypes.map(PrismaSeatTypeMapper.fromPrisma);
  }
}
