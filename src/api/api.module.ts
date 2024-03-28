import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTConstant } from 'src/share/constant/auth.constant';

import { ComController } from './com.controller';

import { CoUserController } from './co.user.controller';
import { CoOrganizationController } from './co.organization.controller';
import { CoTeamController } from './co.team.controller';

import { BsDefectController } from './bs.defect.controller';
import { BsTodoControllers } from './bs.todo.controller';

const BsControllers = [BsDefectController, ...BsTodoControllers];

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: JWTConstant.secret,
      signOptions: { expiresIn: '24h' }, // 过期时间 24 小时
    }),
  ],
  controllers: [
    CoUserController,
    CoOrganizationController,
    CoTeamController,

    ComController,

    // BsDefectController,
    ...BsControllers,
  ],
  providers: [],
})
export class ApiModule {}
