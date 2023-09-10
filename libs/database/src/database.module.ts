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

import { CoUser, CoOrganization, CoOrganizationUser, CoTeam, CoTeamUser } from './structure';
import { ComGroup } from './structure';
import { BsDefect, BsDefectProject } from './structure';

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
      CoTeam,
      CoTeamUser,

      ComGroup,

      BsDefect,
      BsDefectProject,
    ]),
  ],
  providers: [].concat(DaoServices),
  exports: [].concat(DaoServices),
})
export class DatabaseModule {}
