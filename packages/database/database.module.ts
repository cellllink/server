import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManagerService } from './service/manager.service';
import { CoreRepositoryService } from './service/core.repository.service';

import {
  Group,
  Organization,
  OrganizationUser,
  Product,
  Team,
  TeamUser,
  User,
} from './entity/core';

const Services = [ManagerService, CoreRepositoryService];
const CoreEntities = [Organization, OrganizationUser, Team, TeamUser, User, Group, Product];

@Module({
  imports: [TypeOrmModule.forFeature([...CoreEntities])],
  providers: [...Services],
  exports: [...Services],
})
export class DatabaseModule {}
