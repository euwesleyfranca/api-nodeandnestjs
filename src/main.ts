import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Usando o Pattern Factory para criar o modulo raiz
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
// a função bootstrap, significa o ponto de início. É o começo da aplicação
bootstrap();
