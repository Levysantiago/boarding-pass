import { Aircraft } from '@app/entities/aircraft';

export abstract class AircraftRepository {
  abstract create(aircraft: Aircraft): Promise<void>;
  abstract findById(aircraftId: string): Promise<Aircraft | null>;
  abstract findByCode(aircraftCode: string): Promise<Aircraft>;
  abstract save(aircraft: Aircraft): Promise<void>;
}
