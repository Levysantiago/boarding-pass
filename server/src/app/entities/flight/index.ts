import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import * as moment from 'moment';
import { orderSeatsByNumber } from 'src/helpers/order-seats-by-number';
import { Route } from '../route';
import { Seat } from '../seat';

interface IFlightProps {
  routeId: string;
  aircraftCode: string;
  finishBookingTime: Date;
  boardingTime: Date;
  boardingEndingTime: Date;
  flightTime: Date;
  arrivalTime: Date;
  terminal: string;
  gate: string;
  createdAt?: Date;
  updatedAt?: Date;
  route?: Route;
  seats?: Seat[];
}

export class Flight {
  constructor(props: IFlightProps, id?: string) {
    this.routeId = props.routeId;
    this.aircraftCode = props.aircraftCode;
    this.finishBookingTime = props.finishBookingTime;
    this.boardingTime = props.boardingTime;
    this.boardingEndingTime = props.boardingEndingTime;
    this.flightTime = props.flightTime;
    this.arrivalTime = props.arrivalTime;
    this.terminal = props.terminal;
    this.gate = props.gate;
    if (props.route) {
      this.route = new Route(props.route, props.route.id);
    }
    if (props.seats) {
      this.seats = orderSeatsByNumber(props.seats);
      this.seats = props.seats.map((seat) => {
        return new Seat(seat, seat.id);
      });
    }

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  id: string;

  @Exclude()
  routeId: string;

  aircraftCode: string;

  finishBookingTime: Date;

  boardingTime: Date;

  boardingEndingTime: Date;

  flightTime: Date;

  arrivalTime: Date;

  terminal: string;

  gate: string;

  route?: Route;

  seats?: Seat[];

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Flight {
    const flight: any = new Flight(this, this.id);

    flight.flightTime = moment(flight.flightTime).locale('br').format('LT');
    flight.boardingTime = moment(flight.boardingTime).locale('br').format('LT');
    flight.boardingEndingTime = moment(flight.boardingEndingTime)
      .locale('br')
      .format('LT');
    flight.finishBookingTime = moment(flight.finishBookingTime)
      .locale('br')
      .format('LT');
    flight.arrivalTime = moment(flight.arrivalTime).locale('br').format('LT');

    if (flight.seats) {
      flight.seats = flight.seats.map((seat) => {
        return seat.toHTTP();
      });
    }

    if (flight.route) flight.route = flight.route.toHTTP();

    return instanceToPlain(flight) as Flight;
  }
}
