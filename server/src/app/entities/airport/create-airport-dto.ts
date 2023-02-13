import { IsNotEmpty } from 'class-validator';

export class CreateAirportDTO {
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;
}
