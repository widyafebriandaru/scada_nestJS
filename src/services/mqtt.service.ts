// mqtt.service.ts
import * as mqtt from 'mqtt';

export class MqttService {
  private readonly client;

  constructor() {
    console.log('Initializing MQTT service');
    this.client = mqtt.connect('mqtt://10.14.152.231:1883'); // replace with your MQTT broker URL

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (error) => {
      console.error('Error connecting to MQTT broker:', error);
    });
  }

  sendMessage(topic: string, message: string): void {
    this.client.publish(topic, message);
  }

  subscribeToTopic(topic: string): void {
    this.client.subscribe(`${topic}/#`);

    this.client.on('message', (receivedTopic, message) => {
      console.log(
        `Received message on topic ${receivedTopic}: ${message.toString()}`,
      );
      // You can handle the received message here
    });
  }
}
