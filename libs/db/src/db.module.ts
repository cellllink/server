import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser } from './structure/core';
import { ComGroup, ComTag } from './structure/common';

import { EntityManager, CoreRepository } from './dao';
import { UserDaoService, CoOrganizationDaoService, CoTeamDaoService } from './dao';
// import { CommonTagDaoServcie, CommonGroupDaoServcie } from './dao';

// import { TestSchema } from './structure/test.structure';
// import { MongooseModule } from '@nestjs/mongoose';

const Repositories = [EntityManager, CoreRepository];
const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

// const Repositories = [EntityManager, CoreRepository, CommonRepository, BusinessRepository];
// const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

const CoEntities = [UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([].concat(CoEntities))],
  providers: [].concat(Repositories, CoDaoServices),
  exports: [].concat(Repositories, CoDaoServices),
})
export class DBModule {}
