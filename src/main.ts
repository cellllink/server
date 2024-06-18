import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomLogger } from './share/services';
import { HttpInterceptor } from './share/http.interceptor';
import { setSwaager } from './config';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

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

  const Port = App.get(ConfigService).get('serve.port');
  await App.listen(Port);

  console.info(`项目已启动在 ${Port} 端口`);
}

bootstrap();
