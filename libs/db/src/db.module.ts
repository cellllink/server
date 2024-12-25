import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser } from './structure/core';
import { ComGroup, ComTag } from './structure/common';

import { EntityManager, CoreRepository } from './repository';
import { UserDao } from './dao/core';
import { UserEntity } from './structure/core/user.structure';
// import { UserDaoService, CoOrganizationDaoService, CoTeamDaoService } from './dao';
// import { CommonTagDaoServcie, CommonGroupDaoServcie } from './dao';

// import { TestSchema } from './structure/test.structure';
// import { MongooseModule } from '@nestjs/mongoose';

const Repositories = [EntityManager, CoreRepository];
const CoreDaos = [UserDao];

// const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

// const Repositories = [EntityManager, CoreRepository, CommonRepository, BusinessRepository];
// const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

// const CoEntities = [UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser];
const CoEntities = [UserEntity];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([].concat(CoEntities))],
  // providers: [].concat(Repositories, CoDaoServices),
  // exports: [].concat(Repositories, CoDaoServices),

  providers: [].concat(Repositories, CoreDaos),
  exports: [].concat(Repositories, CoreDaos),
})
export class DBModule {}
