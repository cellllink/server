import { NestFactory } from '@nestjs/core';
// import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { CustomLogger } from './share/services';
import { HttpInterceptor } from './share/interceptors';
import { setSwaager } from './config/swagger.config';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as csurf from 'csurf';

async function bootstrap() {
  // Fastify 性能更好，但是跑起来，还有点小问题
  // const FastifyApp = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  //   {
  //     logger: new CustomLogger(),
  //   },
  // );
  const ExpressApp = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });
  const app = ExpressApp;

  setSwaager(app);

  // 允许跨域
  app.enableCors();
  // 全局拦截器
  app.useGlobalInterceptors(new HttpInterceptor());
  // 全局 DTO 校验器
  app.useGlobalPipes(new ValidationPipe());
  // CSRF 保护
  // app.use(csurf());

  const port = app.get(ConfigService).get('http.port');
  setTimeout(() => console.log(`项目已启动在 ${port} 端口`), 1000);

  await app.listen(port);
}
bootstrap();
