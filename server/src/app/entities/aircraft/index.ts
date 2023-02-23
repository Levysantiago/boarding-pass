import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';

interface ICreateAircraftProps {
  code: string;
  firstSeat: string;
  lastSeat: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Aircraft {
  constructor(props: ICreateAircraftProps, id?: string) {
    this.code = props.code;
    this.firstSeat = props.firstSeat;
    this.lastSeat = props.lastSeat;

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  code: string;

  firstSeat: string;

  lastSeat: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Aircraft {
    return instanceToPlain(this) as Aircraft;
  }
}
