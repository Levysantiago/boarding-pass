import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';
import { ICreateAircraftDTO } from './icreate-aircraft-dto';

export class Aircraft {
  constructor(props: ICreateAircraftDTO, id?: string) {
    this.code = props.code;
    this.firstSeatLetter = props.firstSeatLetter;
    this.lastSeatLetter = props.lastSeatLetter;
    this.firstSeatNumber = props.firstSeatNumber;
    this.lastSeatNumber = props.lastSeatNumber;

    this.id = id ?? randomUUID();
    this.created_at = props.created_at ?? new Date();
    this.updated_at = props.updated_at ?? new Date();
  }

  @Exclude()
  id: string;

  code: string;

  firstSeatNumber: number;

  lastSeatNumber: number;

  firstSeatLetter: string;

  lastSeatLetter: string;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;
}
