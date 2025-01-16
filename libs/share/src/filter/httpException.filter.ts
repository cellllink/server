import { ExceptionFilter, Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let message = '';
    if (exception instanceof BadRequestException) {
      message = (exception.getResponse() as any).message[0];
    } else {
      message = exception.message;
    }

    response.status(200).json({
      code: exception.getStatus(),
      message,
    });
  }
}
