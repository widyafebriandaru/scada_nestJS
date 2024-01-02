// victoria-metrics.service.ts
import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class VictoriaMetricsService {
  private readonly victoriaMetricsEndpoint =
    'http://10.14.152.231:8428/api/v1/import/prometheus';

  private getRandomValue(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  private createPrometheusData(): string {
    const postData = {
      metric: 'mampang',
      value: this.getRandomValue(),
      labels: {
        label: 'val_label1',
        label2: 'val_label2',
      },
    };

    return `# TYPE ${postData.metric} gauge\n${
      postData.metric
    }{${Object.entries(postData.labels)
      .map(([key, value]) => `${key}="${value}"`)
      .join(',')}} ${postData.value}`;
  }

  async postDataWithRandomValue(): Promise<string> {
    const prometheusData = this.createPrometheusData();

    try {
      const response = await fetch(this.victoriaMetricsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: prometheusData,
      });

      const data = await response.text();
      return `VictoriaMetrics response: ${data}`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}
