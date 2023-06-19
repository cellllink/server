import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWTConstant } from 'src/share/constant/auth.constant';
import { UserPo } from 'packages/database/po/core';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWTConstant.secret,
    });
  }

  async validate(user: UserPo) {
    return user;
  }
}
