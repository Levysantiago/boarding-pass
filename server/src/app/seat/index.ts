import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

interface ICreateSeatProps {
  flightId: string;
  seatTypeId: string;
  passengerId?: string;
  code: string;
  /** window | middle | corridor */
  side: 'window' | 'middle' | 'corridor';
  createdAt?: Date;
  updatedAt?: Date;
}

export class Seat {
  constructor(props: ICreateSeatProps, id?: string) {
    this.flightId = props.flightId;
    this.seatTypeId = props.seatTypeId;
    this.passengerId = props.passengerId;
    this.code = props.code;
    this.side = props.side;

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  flightId: string;

  seatTypeId: string;

  passengerId?: string;

  code: string;

  side: 'window' | 'middle' | 'corridor';

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
