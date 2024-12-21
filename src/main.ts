import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { env } from 'src/common/config/env';
import { SwaggerConfig } from 'src/common/swagger/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  new SwaggerConfig(app).configure();

  await app.listen(env.PORT);
}

bootstrap();
