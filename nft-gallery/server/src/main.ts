import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('POSTGRES_DB', process.env.POSTGRES_DB);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
