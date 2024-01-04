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
      metric: 'bebasaja',
      value: this.getRandomValue(),
      labels: {
        label: 'cobagantiisinya',
        label2: 6969696969,
      },
    };
    return `${postData.metric}{${Object.entries(postData.labels)
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

  // GET DATA FORM DB
  async fetchDataVM(): Promise<void> {
    const query = 'mampang{label="val_label1",label2="val_label2"}';
    // const step = '1h';
    setInterval(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const response = await fetch(
          // `${this.victoriaMetricsEndpoint}?query=${encodeURIComponent(query)}`,
          `http://10.14.152.231:8428/api/v1/query?query=mampang&step=1h`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        // console.log('Response Status:', response.status);
        // console.log('Response Headers:', response.headers.raw());
        // console.log('RESPONSE', response);

        if (response.status === 204) {
          console.log('No data available.');
        } else {
          const data = await response.text(); // Read the response as text
          // console.log('Fetched data:', data);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }, 2500);
  }
}
