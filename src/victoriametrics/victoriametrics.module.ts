import { VictoriaMetricsController } from './victoriametrics.controller';
import { VictoriaMetricsService } from './victoriametrics.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [VictoriaMetricsService],
  controllers: [VictoriaMetricsController],
})
export class VictoriaMetricsModule {}
