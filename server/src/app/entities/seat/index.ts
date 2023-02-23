import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { SeatType } from '../seat-type';

interface ICreateSeatProps {
  flightId: string;
  seatTypeId: string;
  passengerId?: string;
  code: string;
  /** window | middle | corridor */
  side: 'window' | 'middle' | 'corridor';
  occupied: boolean;
  seatType?: SeatType;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Seat {
  constructor(props: ICreateSeatProps, id?: string) {
    this.flightId = props.flightId;
    this.seatTypeId = props.seatTypeId;
    this.passengerId = props.passengerId;
    props.passengerId ? (this.occupied = true) : (this.occupied = false);
    this.code = props.code;
    this.side = props.side;

    if (props.seatType)
      this.seatType = new SeatType(props.seatType, props.seatType.id);

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  flightId: string;

  @Exclude()
  seatTypeId: string;

  @Exclude()
  passengerId?: string;

  code: string;

  side: 'window' | 'middle' | 'corridor';

  occupied: boolean;

  seatType?: SeatType;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Seat {
    const seat = new Seat(this, this.id);
    if (seat.seatType) seat.seatType = seat.seatType.toHTTP();
    return instanceToPlain(seat) as Seat;
  }
}
