// mqtt.service.ts
import * as mqtt from 'mqtt';
import { Injectable } from '@nestjs/common';
import { SocketGatewayz } from '../websocket/socket.gateway';

@Injectable()
export class MqttService {
  private client;
  private readonly brokerUrl = 'mqtt://10.14.152.231:1883';

  constructor(private readonly socketGateway: SocketGatewayz) {
    console.log('Initializing MQTT service');
    this.client = mqtt.connect(this.brokerUrl);

    //Connect to MQTT
    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    //Reconnect on error
    this.client.on('error', (error) => {
      console.error('Error connecting to MQTT broker:', error);
      this.reconnect();
    });

    //Reconnection on close
    this.client.on('close', () => {
      console.log('Connection to MQTT broker closed');
      this.reconnect();
    });

    //START DATAPOINT SUBSCRIBE CONNECTION
    this.client.subscribe(`datapoint/#`); //kasih log kalau berhasil dan gagal
    this.client.on('message', (receivedTopic, message) => {
      // console.log(
      //   `Received message on topic ${receivedTopic}: ${message.toString()}`,
      // );
      this.socketGateway.handleMqttData(null, {
        topic: receivedTopic,
        message: message.toString(),
      });
    });
  }

  private connect() {
    this.client = mqtt.connect(this.brokerUrl);
    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });
  }

  private reconnect() {
    console.log('Reconnecting to MQTT broker...');
    setTimeout(() => {
      this.connect();
    }, 5000);
  }
  // Handle PUBLISH
  sendMessage(topic: string, message: string): void {
    this.client.publish(topic, message);
  }

  // Handle Sukricep
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
