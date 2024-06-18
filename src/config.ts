import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setSwaager(App: INestApplication) {
  // 正式环境不开启 swagger
  if (App.get(ConfigService).get('mode') === 'prod') return;

  const config = new DocumentBuilder().setTitle('Cellink').setDescription('-').setVersion('1.0.0').addBearerAuth().build();

  SwaggerModule.setup('swagger', App, SwaggerModule.createDocument(App, config));
}

export const configuration = () => ({
  mode: process.env.mode,

  serve: {
    port: parseInt(process.env.serve_port),
  },

  db: {
    mysql: {
      host: process.env.db_mysql_host,
      port: parseInt(process.env.db_mysql_port),
      username: process.env.db_mysql_username,
      password: process.env.db_mysql_password,
      database: process.env.db_mysql_database,
    },

    mongoose: {
      uri: process.env.db_mongoose_uri,
    },

    redis: {
      url: process.env.db_redis_url,
    },
  },
});
