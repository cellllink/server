import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoUser, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser } from './structure/core';
import { ComGroup, ComTag } from './structure/common';

import { EntityManager, CoreRepository, CommonRepository, BusinessRepository } from './dao';
import { CoUserDaoService, CoOrganizationDaoService, CoTeamDaoService } from './dao';
import { CommonTagDaoServcie, CommonGroupDaoServcie } from './dao';

// import { TestSchema } from './structure/test.structure';
// import { MongooseModule } from '@nestjs/mongoose';

const Repositories = [EntityManager, CoreRepository, CommonRepository, BusinessRepository];
const CoDaoServices = [CoUserDaoService, CoOrganizationDaoService, CoTeamDaoService];
const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([CoUser, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser, ComGroup, ComTag])],
  providers: [...Repositories, ...CoDaoServices, ...ComDaoServices],
  exports: [...Repositories, ...CoDaoServices, ...ComDaoServices],
})
export class DatabaseModule {}
