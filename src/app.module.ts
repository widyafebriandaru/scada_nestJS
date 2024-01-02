import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { SocketModule } from 'src/websocket/socket.module';
// import { SocketGatewayz } from 'src/websocket/socket.gateway';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [MqttModule, SocketModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
