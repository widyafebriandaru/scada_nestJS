// your.module.ts
import { Module } from '@nestjs/common';
import { MqttController } from '../controllers/mqtt.controller';
import { MqttService } from 'src/services/mqtt.service';

@Module({
  providers: [MqttService],
  controllers: [MqttController],
})
export class MqttModule {}
