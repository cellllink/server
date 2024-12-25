import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable {
    return next.handle().pipe(
      map(data => ({
        code: 200,
        message: null,
        data,
      })),
    );
  }
}
