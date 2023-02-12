export interface ICreateAircraftDTO {
  code: string;
  firstSeatNumber: number;
  lastSeatNumber: number;
  firstSeatLetter: string;
  lastSeatLetter: string;
  created_at?: Date;
  updated_at?: Date;
}
