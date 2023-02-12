import { IsNotEmpty } from 'class-validator';

export class CreateAircraftDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  firstSeatNumber: number;

  @IsNotEmpty()
  lastSeatNumber: number;

  @IsNotEmpty()
  firstSeatLetter: string;

  @IsNotEmpty()
  lastSeatLetter: string;
}
