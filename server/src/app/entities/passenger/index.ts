import { Exclude, instanceToPlain } from 'class-transformer';
import { randomUUID } from 'crypto';

interface IPassengerProps {
  flightId: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  passport: string;
  cpf: string;
  group: string;
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

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  toHTTP(): Passenger {
    return instanceToPlain(this) as Passenger;
  }
}
