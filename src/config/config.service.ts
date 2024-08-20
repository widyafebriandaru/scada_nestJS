// config.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get port(): number {
    return +process.env.PORT || 3000;
  }

  get databaseUrl(): string {
    return process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase';
  }
}
