import { Controller, Get } from '@nestjs/common';

@Controller()
export class AirportController {
  constructor() {}

  @Get('/')
  async heartbeat() {
    return { message: 'alive' };
  }
}
