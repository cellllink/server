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
        console.log(error);
        if (error instanceof HttpException) {
          return of({
            code: error.getStatus(),
            message: JSON.stringify(error.getResponse()),
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
