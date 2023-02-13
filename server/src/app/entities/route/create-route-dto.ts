import { IsNotEmpty } from 'class-validator';

export class CreateRouteDTO {
  @IsNotEmpty()
  airportIdTo: string;

  @IsNotEmpty()
  duration: string;
}
