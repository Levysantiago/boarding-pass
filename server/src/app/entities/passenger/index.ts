import { Exclude } from 'class-transformer';

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
    this.flightId;
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
}
