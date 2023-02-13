import { IsNotEmpty } from 'class-validator';

export class CreateSeatTypeDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;
}
