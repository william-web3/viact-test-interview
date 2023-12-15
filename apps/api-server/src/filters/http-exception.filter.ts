import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { isArray } from 'class-validator';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode = exception.getStatus();
    const error = exception.message;
    const exceptionResponse = exception.getResponse();

    response.status(statusCode).json({
      statusCode,
      status: 'failed',
      error,
      message: isArray(exceptionResponse['message'])
        ? exceptionResponse['message']
        : [exceptionResponse['message']],
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
    });
  }
}
