// app.controller.ts
import { Controller, OnModuleInit } from '@nestjs/common';
import { VictoriaMetricsService } from './victoriametrics.service';

@Controller()
export class VictoriaMetricsController implements OnModuleInit {
  constructor(
    private readonly victoriaMetricsService: VictoriaMetricsService,
  ) {}

  onModuleInit() {
    this.startPostingData();
    this.fetchAndLogData();
  }

  private startPostingData() {
    const postingInterval = setInterval(async () => {
      const result =
        await this.victoriaMetricsService.postDataWithRandomValue();
      console.log(result);
    }, 2500);

    // Stop posting after a certain duration (e.g., 1 hour)
    setTimeout(() => {
      clearInterval(postingInterval);
      console.log('Posting stopped.');
    }, 3600000); // 1 hour (3600 seconds * 1000 milliseconds)
  }

  private fetchAndLogData() {
    this.victoriaMetricsService.fetchDataVM();
  }
}
