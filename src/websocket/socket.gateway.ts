// app.gateway.ts
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common/decorators/core';

@WebSocketGateway({ cors: true })
@Injectable()
export class SocketGatewayz
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  handleConnection(client: any): any {
    console.log(`Client connected: ${client.id}`);
  }
  handleDisconnect(client: any): any {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('mqttData') // Define a custom message event
  handleMqttData(client: any, data: any): void {
    this.server.emit('mqttData', data); // Broadcast the MQTT data to all connected clients
  }

  @SubscribeMessage('frontendMessage') // Handle messages from the frontend
  handleFrontendMessage(client: any, message: string): void {
    console.log('XXXXXXXXXXXXXXXX Received message from frontend:', message);
    // Process the message as needed
  }
}
