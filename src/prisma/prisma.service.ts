import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const postgreUrl = process.env.DATABASE_URL;
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:skynettxqp23@10.14.152.231:5432/iconics?schema=public',
        },
      },
    });
  }
}
