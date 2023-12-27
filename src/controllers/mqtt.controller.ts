// your.controller.ts or your.service.ts
import { Controller, Get } from '@nestjs/common';
import { MqttService } from '../services/mqtt.service';

@Controller('MqttController')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Get()
  getHello(): string {
    return 'Welcome to the MQTT controller!';
  }

  @Get('send-message')
  sendMessage(): string {
    this.mqttService.sendMessage('datapoint', 'Hello, MQTT!');
    return 'Message sent';
  }

  @Get('subscribe-to-topic')
  subscribeToTopic(): string {
    this.mqttService.subscribeToTopic('datapoint');
    return 'Subscribed to topic';
  }
}
