import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

interface IRouteProps {
  airportIdFrom: string;
  airportIdTo: string;
  duration: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Route {
  constructor(props: IRouteProps, id?: string) {
    this.airportIdFrom = props.airportIdFrom;
    this.airportIdTo = props.airportIdTo;
    this.duration = props.duration;

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  airportIdFrom: string;

  airportIdTo: string;

  duration: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
