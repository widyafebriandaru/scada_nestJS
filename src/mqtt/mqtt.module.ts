// your.module.ts
import { Module } from '@nestjs/common';
import { MqttController } from './mqtt.controller';
import { MqttService } from '../mqtt/mqtt.service';
import { SocketGatewayz } from '../websocket/socket.gateway';

@Module({
  providers: [MqttService, SocketGatewayz],
  controllers: [MqttController],
})
export class MqttModule {}
