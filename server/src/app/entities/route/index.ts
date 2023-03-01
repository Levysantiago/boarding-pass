import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { Airport } from '../airport';
import { Flight } from '../flight';

interface IRouteProps {
  airportFromId: string;
  airportToId: string;
  duration: string;
  airportFrom?: Airport;
  airportTo?: Airport;
  flights?: Flight[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class Route {
  constructor(props: IRouteProps, id?: string) {
    this.airportFromId = props.airportFromId;
    this.airportToId = props.airportToId;
    this.duration = props.duration;
    if (props.airportFrom) {
      this.airportFrom = new Airport(props.airportFrom, props.airportFrom.id);
    }
    if (props.airportTo) {
      this.airportTo = new Airport(props.airportTo, props.airportTo.id);
    }
    if (props.flights) {
      this.flights = props.flights.map((flight) => {
        return new Flight(flight, flight.id);
      });
    }

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  airportFromId: string;

  airportToId: string;

  airportFrom?: Airport;

  airportTo?: Airport;

  flights?: Flight[];

  duration: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP() {
    const route = new Route(this, this.id);
    if (route.airportFrom) route.airportFrom = route.airportFrom.toHTTP();
    if (route.airportTo) route.airportTo = route.airportTo.toHTTP();
    if (route.flights)
      route.flights = route.flights.map((flight) => {
        return flight.toHTTP();
      });
    return instanceToPlain(route) as Route;
  }
}
