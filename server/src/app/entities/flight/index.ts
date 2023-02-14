import { Airport } from '@prisma/client';
import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';

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

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
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

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Flight {
    return instanceToPlain(this) as Flight;
  }
}
