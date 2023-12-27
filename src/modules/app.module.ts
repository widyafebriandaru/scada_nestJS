import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MqttModule } from './mqtt.module';

@Module({
  imports: [MqttModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
