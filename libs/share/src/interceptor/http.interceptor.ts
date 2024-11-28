import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, BadRequestException } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

class Response {
  code: number;
  message: string;
  data: any;
}

function createResponse() {
  return { code: 200, message: '', data: null };
}

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    const response = createResponse();

    return next.handle().pipe(
      map(data => {
        response.data = data;
        return response;
      }),

      catchError((error: HttpException) => {
        const errorResponse = error.getResponse();

        if (typeof errorResponse === 'string') {
          response.code = 500;
          response.message = errorResponse;
        } else {
          response.code = error.getStatus();
          // @ts-ignore
          const message = errorResponse?.message;
          if (!message) response.message = JSON.stringify(errorResponse);
          else if (typeof message === 'string') response.message = message;
          else response.message = JSON.stringify(message);
        }

        return of(response);
      }),
    );
  }
}
