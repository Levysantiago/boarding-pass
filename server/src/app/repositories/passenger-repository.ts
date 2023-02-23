import { Passenger } from '@app/entities/passenger';

export abstract class PassengerRepository {
  abstract create(passenger: Passenger): Promise<void>;
  abstract findById(passengetId: string): Promise<Passenger | null>;
  abstract save(passenger: Passenger): Promise<void>;
}
