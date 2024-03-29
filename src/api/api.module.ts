import { Module } from '@nestjs/common';

import { ComController } from './com.controller';

import { CoUserController } from './co.user.controller';
import { CoOrganizationController } from './co.organization.controller';
import { CoTeamController } from './co.team.controller';

import { BsDefectController } from './bs.defect.controller';
import { BsTodoControllers } from './bs.todo.controller';

const BsControllers = [BsDefectController, ...BsTodoControllers];

@Module({
  imports: [],
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
