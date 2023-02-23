import { Airport } from '@prisma/client';
import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { orderSeatsByCode } from 'src/helpers/order-seats-by-code';
import { Seat } from '../seat';

interface IFlightProps {
  routeId: string;
  aircraftCode: string;
  finishBookingTime: Date;
  boardingTime: Date;
  boardingEndingTime: Date;
  flightTime: Date;
  terminal: string;
  gate: string;
  createdAt?: Date;
  updatedAt?: Date;
  route?: { route: string; airportFrom?: Airport; airportTo?: Airport };
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
    this.terminal = props.terminal;
    this.gate = props.gate;
    this.route = props.route;
    this.seats = orderSeatsByCode(props.seats);

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

  terminal: string;

  gate: string;

  route?: { route: string; airportFrom?: Airport; airportTo?: Airport };

  seats?: Seat[];

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Flight {
    const flight = new Flight(this);

    if (flight.seats) {
      flight.seats = flight.seats.map((seat) => {
        return seat.toHTTP();
      });
    }

    return instanceToPlain(flight) as Flight;
  }
}
