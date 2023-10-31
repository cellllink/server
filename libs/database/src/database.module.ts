import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ManagerService,
  CoreRepositoryService,
  CommonRepositoryService,
  BusinessRepositoryService,
  CoUserDaoService,
  CoOrganizationDaoService,
  CoTeamDaoService,
  CommonDaoServcie,
  BsTodoDaoService,
} from './dao';

import {
  CoUser,
  CoOrganization,
  CoOrganizationUser,
  CoOrganizationTeam,
  CoTeam,
  CoTeamUser,
  CoProduct,
  BsTodoGroup,
  BsTodoItem,
  BsTodoStep,
} from './structure';
// import { ComGroup } from './structure';
// import { BsDefect, BsDefectProject } from './structure';

const DaoServices = [
  ManagerService,
  CoreRepositoryService,
  CommonRepositoryService,
  BusinessRepositoryService,

  CoUserDaoService,
  CoOrganizationDaoService,
  CoTeamDaoService,

  CommonDaoServcie,

  BsTodoDaoService,
];

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      CoUser,
      CoOrganization,
      CoOrganizationUser,
      CoOrganizationTeam,
      CoTeam,
      CoTeamUser,
      CoProduct,

      // ComGroup,

      // BsDefect,
      // BsDefectProject,

      BsTodoGroup,
      BsTodoItem,
      BsTodoStep,
    ]),
  ],
  providers: [].concat(DaoServices),
  exports: [].concat(DaoServices),
})
export class DatabaseModule {}
