// socket.module.ts
import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [SocketModule, ConfigModule],
  providers: [SocketGateway],
})
export class SocketModule {}
