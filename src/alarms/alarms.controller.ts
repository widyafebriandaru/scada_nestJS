// alarms.controller.ts
import { Controller, Get, Req } from '@nestjs/common';

@Controller('alarms')
export class AlarmsController {
  @Get()
  getAlarms(@Req() req) {
    const data = { title: 'Alarms' };
    const ipaddress = req.connection.remoteAddress;
  }
}
