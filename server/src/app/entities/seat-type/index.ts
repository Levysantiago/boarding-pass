import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

interface ICreateSeatTypeProps {
  name: string;
  price: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SeatType {
  constructor(props: ICreateSeatTypeProps, id?: string) {
    this.name = props.name;
    this.price = props.price;

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  name: string;

  price: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
