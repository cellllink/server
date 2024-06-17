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
  BsTodoDaoService,
  CommonTagDaoServcie,
  CommonGroupDaoServcie,
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
import { TestSchema } from './structure/test.structure';
import { MongooseModule } from '@nestjs/mongoose';
// import { ComGroup } from './structure';
// import { BsDefect, BsDefectProject } from './structure';

const DaoServices = [
  ManagerService,
  CoreRepositoryService,
  CommonRepositoryService,
  BusinessRepositoryService,

  CommonGroupDaoServcie,
  CommonTagDaoServcie,

  CoUserDaoService,
  CoOrganizationDaoService,
  CoTeamDaoService,

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

    MongooseModule.forFeature([
      {
        name: 'TestSchema',
        schema: TestSchema,
      },
    ]),
  ],
  providers: [].concat(DaoServices),
  exports: [].concat(DaoServices),
})
export class DatabaseModule {}
