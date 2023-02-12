import { Aircraft } from '@app/entities/aircraft';
import { Aircraft as RawAircraft } from '@prisma/client';

export class PrismaAircraftMapper {
  static toPrisma(aircraft: Aircraft) {
    return aircraft;
  }

  static fromPrisma(rawAircraft: RawAircraft): Aircraft {
    return new Aircraft(rawAircraft, rawAircraft.id);
  }
}
