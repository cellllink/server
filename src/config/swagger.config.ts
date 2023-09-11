import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

export function setSwaager(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Cellink')
    .setDescription('-')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
  fs.writeFileSync('./static/swagger-spec.json', JSON.stringify(document));
}
