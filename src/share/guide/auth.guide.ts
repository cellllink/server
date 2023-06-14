import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context.switchToHttp().getRequest());

    // const token = context.switchToHttp().getRequest().headers['token'];
    return true;
  }
}
