import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { Airport } from '../airport';

interface IRouteProps {
  airportIdFrom: string;
  airportIdTo: string;
  duration: string;
  airportFrom?: Airport;
  airportTo?: Airport;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Route {
  constructor(props: IRouteProps, id?: string) {
    this.airportIdFrom = props.airportIdFrom;
    this.airportIdTo = props.airportIdTo;
    this.duration = props.duration;
    if (props.airportFrom)
      this.airportFrom = new Airport(props.airportFrom, props.airportFrom.id);
    if (props.airportTo)
      this.airportTo = new Airport(props.airportTo, props.airportTo.id);

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  airportIdFrom: string;

  airportIdTo: string;

  airportFrom?: Airport;

  airportTo?: Airport;

  duration: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP() {
    const route = new Route(this, this.id);
    if (route.airportFrom) route.airportFrom = route.airportFrom.toHTTP();
    if (route.airportTo) route.airportTo = route.airportTo.toHTTP();
    return instanceToPlain(route) as Route;
  }
}
