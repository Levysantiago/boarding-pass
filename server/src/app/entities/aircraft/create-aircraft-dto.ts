import { IsNotEmpty } from 'class-validator';

export class CreateAircraftDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  firstSeat: string;

  @IsNotEmpty()
  lastSeat: string;
}
