import { Aircraft } from '@app/entities/aircraft';
import { AircraftRepository } from '@app/repositories/aircraft-repository';
import { Injectable } from '@nestjs/common';

interface IRequest {
  aircraftCode: string;
}

interface IResponse {
  data: Aircraft;
}

@Injectable()
class GetAircraftService {
  constructor(private aircraftRepository: AircraftRepository) {}

  async execute({ aircraftCode }: IRequest): Promise<IResponse> {
    const aircraft = await this.aircraftRepository.findByCode(aircraftCode);
    if (!aircraft) throw new Error('Aircraft not found!');

    return { data: aircraft.toHTTP() };
  }
}

export default GetAircraftService;
