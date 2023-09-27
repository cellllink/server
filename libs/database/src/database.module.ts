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
} from './dao';

import {
  CoUser,
  CoOrganization,
  CoOrganizationUser,
  CoOrganizationTeam,
  CoTeam,
  CoTeamUser,
  CoProduct,
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
    ]),
  ],
  providers: [].concat(DaoServices),
  exports: [].concat(DaoServices),
})
export class DatabaseModule {}
