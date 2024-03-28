import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setSwaager(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Cellink')
    .setDescription('-')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  SwaggerModule.setup('swagger', app, SwaggerModule.createDocument(app, config));
}
