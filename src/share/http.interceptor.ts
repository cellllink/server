import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Response {
  code: number;
  message: string;
  data: any;
}

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    return next.handle().pipe(
      map(data => ({
        code: 200,
        message: '',
        data,
      })),

      catchError((error: HttpException) => {
        if (error instanceof HttpException) {
          const code = error.getStatus();
          const errorResponse = error.getResponse();
          const message =
            typeof errorResponse === 'string' ? errorResponse : JSON.stringify(errorResponse);

          return of({
            code,
            message,
            data: null,
          });
        }

        return of({
          code: 500,
          message: '',
          data: null,
        });
      }),
    );
  }
}
