// socket.module.ts
import { Module } from '@nestjs/common';
// import { SocketGatewayz } from './socket.gateway';
import { ConfigModule } from 'src/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [],
})
export class SocketModule {}
