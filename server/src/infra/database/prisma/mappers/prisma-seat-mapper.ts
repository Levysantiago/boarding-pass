import { Seat } from '@app/entities/seat';
import { Seat as RawSeat } from '@prisma/client';

export class PrismaSeatMapper {
  static toPrisma(seat: Seat): RawSeat {
    return seat as RawSeat;
  }

  static fromPrisma(rawSeat: RawSeat): Seat {
    return new Seat(rawSeat as Seat, rawSeat.id);
  }
}
