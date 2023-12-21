import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Set to true in production if using HTTPS
    }),
  );
  await app.listen(3000);
}
bootstrap();
