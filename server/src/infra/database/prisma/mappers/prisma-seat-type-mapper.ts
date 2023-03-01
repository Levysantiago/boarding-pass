import { SeatType } from '@app/entities/seat-type';
import { SeatType as RawSeatType } from '@prisma/client';

export class PrismaSeatTypeMapper {
  static toPrisma(seatType: SeatType): RawSeatType {
    return seatType as RawSeatType;
  }

  static fromPrisma(rawSeatType: RawSeatType): SeatType {
    return new SeatType(rawSeatType as SeatType, rawSeatType.id);
  }
}
