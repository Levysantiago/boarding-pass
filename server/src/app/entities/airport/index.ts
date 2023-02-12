import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { ICreateAirportDTO } from './dto/icreate-airport-dto';

export class Airport {
  constructor(props: ICreateAirportDTO, id?: string) {
    this.id = id ?? randomUUID();
    this.city = props.city;
    this.state = props.state;
    this.country = props.country;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  id: string;

  state: string;

  city: string;

  country: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Airport {
    return instanceToPlain(this) as Airport;
  }
}
