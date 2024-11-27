import { NestFactory } from '@nestjs/core';
import { OpenModule } from './open.module';

async function bootstrap() {
  const app = await NestFactory.create(OpenModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
