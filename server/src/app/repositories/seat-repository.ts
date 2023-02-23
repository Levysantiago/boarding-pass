import { Seat } from '@app/entities/seat';

export abstract class SeatRepository {
  abstract create(seat: Seat): Promise<void>;
  abstract findById(seatId: string): Promise<Seat | null>;
  abstract findByFlightId(flightId: string): Promise<Seat[]>;
  abstract save(seat: Seat): Promise<void>;
}
