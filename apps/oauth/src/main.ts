import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwaager } from '@share/config/swagger';

(async function () {
  const app = await NestFactory.create(AppModule);

  setupSwaager(app, {
    description: '授权登录服务',
  });

  await app.listen(process.env.serve_port_auth || 3000);
})();
