import { Module } from '@nestjs/common';
import { DaoModule } from '@cellink/database/daos';
import { AuthModule } from './common/auth/auth.module';

// common 模块 controller service
import { UserController, UserService, JwtStrategy } from './user';
import { OrganizationController, OrganizationService } from './organization';
import { TeamController, TeamService } from './team';

const Strategies = [JwtStrategy];

const CommonControllers = [UserController, OrganizationController, TeamController];
const CommonServices = [UserService, OrganizationService, TeamService];

const AppControllers = [];
const AppServices = [];

@Module({
  imports: [DaoModule, AuthModule],
  controllers: [...CommonControllers, ...AppControllers],
  providers: [...Strategies, ...CommonServices, ...AppServices],
})
export class AllModule {}
