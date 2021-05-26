import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // will strip validated(returned) object of any properties that do not use any validation decorators
      whitelist: true,
      //
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
