import { Module } from '@nestjs/common';
import { DaoModule } from 'cell-database';
// import { AuthModule } from './common/auth/auth.module';

// common 模块 controller service
import { UserController, JwtStrategy } from './user';
import { OrganizationController } from './organization';
// import { ApplicationController } from './application';
import { TeamController } from './team';

// import { UserController, UserService, JwtStrategy } from './user';
// import { OrganizationController, OrganizationService } from './organization';
// // import { ApplicationController, ApplicationService } from './application';
// import { TeamController, TeamService } from './team';

// 业务app 模块 controller service
// import { DefctController, DefctService } from './app/defect';

const Strategies = [JwtStrategy];

const CommonControllers = [
  UserController,
  OrganizationController,
  TeamController,
  // ApplicationController,
];
const CommonServices = [];

const AppControllers = [];
const AppServices = [];

// const CommonServices = [UserService, OrganizationService, TeamService, ApplicationService];

// const AppControllers = [DefctController];
// const AppServices = [DefctService];

@Module({
  imports: [DaoModule],
  // imports: [DaoModule, AuthModule],
  controllers: [...CommonControllers, ...AppControllers],
  providers: [...Strategies, ...CommonServices, ...AppServices],
})
export class AllModule {}
