import { IsNotEmpty } from 'class-validator';

export class CreateRouteDTO {
  @IsNotEmpty()
  airportFromId: string;

  @IsNotEmpty()
  airportToId: string;

  @IsNotEmpty()
  duration: string;
}
