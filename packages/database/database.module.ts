import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManagerService } from './service/manager.service';
import { CoreRepositoryService } from './service/core.repository.service';

import { Organization, OrganizationUser, Team, TeamUser, User } from './entity/core';

const Services = [ManagerService, CoreRepositoryService];
const CoreEntities = [Organization, OrganizationUser, Team, TeamUser, User];

@Module({
  imports: [TypeOrmModule.forFeature([...CoreEntities])],
  providers: [...Services],
  exports: [...Services],
})
export class DatabaseModule {}
