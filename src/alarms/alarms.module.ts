// alarms.module.ts
import { Module } from '@nestjs/common';
import { AlarmsController } from './alarms.controller';

@Module({
  controllers: [AlarmsController],
})
export class AlarmsModule {}
