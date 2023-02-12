import { IsNotEmpty } from 'class-validator';
import { ICreateAirportDTO } from './icreate-airport-dto';

export class CreateAirportDTO implements ICreateAirportDTO {
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;
}
