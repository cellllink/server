import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'cellinkPrivateKey',
      // secretOrKey: JWTConstant.secret,
    });
  }

  async validate({ user_id }: JwtHeaderUserInfo) {
    return { user_id };
  }
}

export interface JwtHeaderUserInfo {
  user_id: number;
}
