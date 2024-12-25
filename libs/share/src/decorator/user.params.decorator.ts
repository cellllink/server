import { createParamDecorator } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';

import { JwtHeaderUserInfo } from '@share/jwt/jwt.strategy';

export const UserParams = createParamDecorator((_: unknown, ctx: ExecutionContext) => {
  console.log(ctx, ctx.switchToHttp());
  const request = ctx.switchToHttp().getRequest();
  return request.user as JwtHeaderUserInfo;
});
