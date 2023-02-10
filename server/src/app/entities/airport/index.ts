import { randomUUID } from 'crypto';
import { IAirport } from './IAirport';
import { ICreateAirportDTO } from './ICreateAirportDTO';

interface IAirportProps extends ICreateAirportDTO {
  createdAt: Date;
  updatedAt: Date;
}

export class Airport implements IAirport {
  private _id: string;
  private props: IAirportProps;

  constructor(props: ICreateAirportDTO, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get city(): string {
    return this.props.city;
  }

  get state(): string {
    return this.props.state;
  }

  get country(): string {
    return this.props.country;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
