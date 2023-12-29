// mqtt.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { SocketGatewayz } from './socket.gateway';

@Controller('socket')
export class SocketController {
  constructor(private readonly socketGateway: SocketGatewayz) {}

  @Get('subscribe-to-topic/:param')
  subscribeToTopic(@Param('param') param: string): string {
    const topic = `datapoint/${param}`;
    this.socketGateway.server.emit('subscribe-to-topic', { topic });
    return `Subscribed to topic: datapoint/${topic}`;
  }
}
