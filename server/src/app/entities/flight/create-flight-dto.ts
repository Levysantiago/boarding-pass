import { IsDate, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateFlightDTO {
  @IsNotEmpty()
  routeId: string;

  @IsNotEmpty()
  @MaxLength(2)
  aircraftCode: string;

  @IsNotEmpty()
  @IsDate()
  finishBookingTime: Date;

  @IsNotEmpty()
  @IsDate()
  boardingTime: Date;

  @IsNotEmpty()
  @IsDate()
  boardingEndingTime: Date;

  @IsNotEmpty()
  @IsDate()
  flightTime: Date;

  @IsNotEmpty()
  terminal: string;

  @IsNotEmpty()
  gate: string;
}
