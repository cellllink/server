import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

interface SwaggerConfigOption {
  description?: string;
  version?: string;
}

export function setupSwaager(App: INestApplication, option?: SwaggerConfigOption) {
  // 正式环境不开启 swagger
  if (App.get(ConfigService).get('isProdMode')) return;

  const config = new DocumentBuilder()
    .setTitle('Cellllink')
    .setDescription(option?.description || '-')
    .setVersion(option?.version || '1.0.0')
    .addBearerAuth()
    .build();

  SwaggerModule.setup('swagger', App, SwaggerModule.createDocument(App, config));
}
