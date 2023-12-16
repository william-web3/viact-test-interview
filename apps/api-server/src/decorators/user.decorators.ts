import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JWTPayload } from 'src/user/types';

export const RequestUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): JWTPayload => {
    const request = ctx.switchToHttp().getRequest();
    const user: JWTPayload = request.user;

    return data ? user?.[data] : user;
  },
);
