import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MqttModule } from './mqtt/mqtt.module';
import { SocketModule } from 'src/websocket/socket.module';
// import { SocketGatewayz } from 'src/websocket/socket.gateway';
import { ConfigModule } from 'src/config/config.module';
import { VictoriaMetricsModule } from './victoriametrics/victoriametrics.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MqttModule,
    SocketModule,
    ConfigModule,
    VictoriaMetricsModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
