import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  // app.use(cookieParser());
  // app.use(
  //   session({
  //     secret: 'your-secret-key',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: { secure: false }, // Set to true in production if using HTTPS
  //   }),
  // );
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  await app.listen(3000);
}
bootstrap();
