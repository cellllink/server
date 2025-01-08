import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, BadRequestException } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map(data => ({
        code: 200,
        message: null,
        data,
      })),
    );
  }
}
