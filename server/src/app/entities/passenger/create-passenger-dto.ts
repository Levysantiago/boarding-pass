import { IsNotEmpty, IsPassportNumber, MaxLength } from 'class-validator';

export class CreatePassengerDTO {
  @IsNotEmpty()
  flightId: string;

  @IsNotEmpty()
  @MaxLength(50)
  firstName: string;

  @IsNotEmpty()
  @MaxLength(50)
  lastName: string;

  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  @IsPassportNumber('BR')
  passport: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  @MaxLength(2)
  group: string;
}
