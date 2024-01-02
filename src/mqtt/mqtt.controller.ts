// your.controller.ts or your.service.ts
import { Controller, Get, Param } from '@nestjs/common';
import { MqttService } from './mqtt.service';

@Controller('MqttController')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Get()
  getHello(): string {
    return 'Welcome to the MQTT controller!';
  }

  @Get('send-message')
  sendMessage(): string {
    this.mqttService.sendMessage('event', 'Hello MQTT ini dari nestJS!');
    return 'Message sent';
  }

  //Subscribe Specific Topic
  @Get('subscribe-to-topic/:param')
  subscribeToTopic(@Param('param') param: string): string {
    const topic = `datapoint/${param}`;
    this.mqttService.subscribeToTopic(topic); //jadiin dinamis
    return `Subscribed to topic: ${topic}`;
  }
}
