import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser } from './structure/core';
// import { ComGroup, ComTag } from './structure/common';

import { EntityManager, CoreRepository, CommonRepository } from './repository';
import { UserDao } from './dao/core';
import { GroupDao } from './dao/common';
import { CommonEntitys, GroupEntity } from './structure/common';
import { CoreEntities } from './structure/core';
// import { UserDaoService, CoOrganizationDaoService, CoTeamDaoService } from './dao';
// import { CommonTagDaoServcie, CommonGroupDaoServcie } from './dao';

// import { TestSchema } from './structure/test.structure';
// import { MongooseModule } from '@nestjs/mongoose';

const Repositories = [EntityManager, CoreRepository, CommonRepository];
const CoreDaos = [UserDao];
const CommonDaos = [GroupDao];

// const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

// const Repositories = [EntityManager, CoreRepository, CommonRepository, BusinessRepository];
// const CoDaoServices = [UserDaoService, CoOrganizationDaoService, CoTeamDaoService];
// const ComDaoServices = [CommonTagDaoServcie, CommonGroupDaoServcie];

// const CoEntities = [UserEntity, CoOrganization, CoOrganizationUser, CoOrganizationTeam, CoTeam, CoTeamUser];

const CommonEntities = [GroupEntity];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([].concat(CoreEntities, CommonEntitys))],
  // providers: [].concat(Repositories, CoDaoServices),
  // exports: [].concat(Repositories, CoDaoServices),

  providers: [].concat(Repositories, CoreDaos, CommonDaos),
  exports: [].concat(Repositories, CoreDaos, CommonDaos),
})
export class DBModule {}
