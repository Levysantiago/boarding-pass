import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateSeatDTO {
  @IsNotEmpty()
  flightId: string;

  @IsNotEmpty()
  seatTypeId: string;

  @IsEmpty()
  passengerId?: string;

  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  side: 'window' | 'middle' | 'corridor';
}
