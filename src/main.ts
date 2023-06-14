import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './share/services';
import { HttpInterceptor } from './share/http.interceptor';
import { setSwaager } from './config/swagger.config';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as csurf from 'csurf';

async function bootstrap() {
  const App = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  setSwaager(App);

  // 允许跨域
  App.enableCors();
  // 全局拦截器
  App.useGlobalInterceptors(new HttpInterceptor());
  // 全局 DTO 校验器
  App.useGlobalPipes(new ValidationPipe());
  // CSRF 保护
  // App.use(csurf());

  const Port = App.get(ConfigService).get('http.port');
  await App.listen(Port);

  console.info(`项目已启动在 ${Port} 端口`);
}

bootstrap();
