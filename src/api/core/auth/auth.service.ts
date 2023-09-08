import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CoreDaoServcie } from '@database/dao/service';
import { JWTConstant } from 'src/share/constant/auth.constant';

@Injectable()
export class AuthService {
  constructor(private coreDaoServcie: CoreDaoServcie, private jwtService: JwtService) {}

  createAuthToken(userId: number) {
    const content = { userId };

    return this.jwtService.sign(content, {
      secret: JWTConstant.secret,
    });
  }
}
