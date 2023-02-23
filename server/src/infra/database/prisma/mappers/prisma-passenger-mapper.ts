import { Passenger } from '@app/entities/passenger';
import { Passenger as RawPassenger } from '@prisma/client';

export class PrismaPassengerMapper {
  static toPrisma(passenger: Passenger) {
    const { seat, flight, ..._passenger } = passenger;
    return _passenger;
  }

  static fromPrisma(rawPassenger: RawPassenger): Passenger {
    return new Passenger(rawPassenger, rawPassenger.id);
  }
}
