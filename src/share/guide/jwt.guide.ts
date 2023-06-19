import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  //   canActivate(context: ExecutionContext) {
  //     const [request] = context.getArgs();
  //     // 这里需要校验一下 Token 中的用户信息和当前参数中的用户是否是同一人
  //     console.log(request.body);
  //     return super.canActivate(context);
  //   }
}
