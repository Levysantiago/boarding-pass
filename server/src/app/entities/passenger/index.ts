import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';
import { PrismaSeatMapper } from 'src/infra/database/prisma/mappers/prisma-seat-mapper';
import { Flight } from '../flight';
import { Seat } from '../seat';
import { Seat as RawSeat } from '@prisma/client';

interface IPassengerProps {
  flightId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  passport: string;
  cpf: string;
  group: string;
  seat?: Seat;
  flight?: Flight;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Passenger {
  constructor(props: IPassengerProps, id?: string) {
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.birthDate = props.birthDate;
    this.gender = props.gender;
    this.passport = props.passport;
    this.group = props.group;
    this.flightId = props.flightId;
    this.cpf = props.cpf;

    if (props.seat) this.seat = new Seat(props.seat, props.seat.id);

    if (props.flight) this.flight = new Flight(props.flight, props.flight.id);

    this.id = id ?? randomUUID();
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  @Exclude()
  id: string;

  @Exclude()
  flightId: string;

  firstName: string;

  lastName: string;

  birthDate: Date;

  gender: string;

  passport: string;

  cpf: string;

  group: string;

  seat?: Seat;

  flight?: Flight;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Passenger {
    const passenger = new Passenger(this, this.id);

    passenger.seat = passenger.seat.toHTTP();
    passenger.flight = passenger.flight.toHTTP();

    return instanceToPlain(passenger) as Passenger;
  }
}
