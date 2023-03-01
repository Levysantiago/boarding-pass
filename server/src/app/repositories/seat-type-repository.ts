import { SeatType } from '@app/entities/seat-type';

export abstract class SeatTypeRepository {
  abstract create(seatType: SeatType): Promise<void>;
  abstract findById(seatTypeId: string): Promise<SeatType | null>;
  abstract findAll(): Promise<SeatType[]>;
  abstract save(seatType: SeatType): Promise<void>;
}
