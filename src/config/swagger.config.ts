import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setSwaager(App: INestApplication) {
  // 正式环境不开启 swagger
  if (App.get(ConfigService).get('mode') === 'prod') return;

  const config = new DocumentBuilder()
    .setTitle('Cellink')
    .setDescription('-')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  SwaggerModule.setup('swagger', App, SwaggerModule.createDocument(App, config));
}
