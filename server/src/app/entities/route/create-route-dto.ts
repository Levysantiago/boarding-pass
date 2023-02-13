import { IsNotEmpty } from 'class-validator';

export class CreateRouteDTO {
  @IsNotEmpty()
  airportIdFrom: string;

  @IsNotEmpty()
  airportIdTo: string;

  @IsNotEmpty()
  duration: string;
}
