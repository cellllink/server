import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTConstant } from 'src/share/constants/auth.constant';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // async validateUser(account: string, password: string): Promise<any> {
  //   const user = await this.usersService.userDao.repository.findOne({
  //     where: { account },
  //   });
  //   if (user && user.password === password) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  createAuthToken(userId: number) {
    return this.jwtService.sign(
      { userId },
      {
        secret: JWTConstant.secret,
      },
    );
  }
}
