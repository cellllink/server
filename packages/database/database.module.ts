import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerService } from './service/manager.service';
import { CoreRepositoryService } from './service/core.repository.service';
import { CoUser, CoOrganization, CoOrganizationUser, CoTeam, CoTeamUser } from './structure';
import { ComGroup } from './structure';
import { OrgProduct } from './structure';
import { BsDefect, BsDefectProject } from './structure';

const Services = [ManagerService, CoreRepositoryService];

const CoreEntities = [CoUser, CoOrganization, CoOrganizationUser, CoTeam, CoTeamUser];
const CommonEntities = [ComGroup];
const OrgEntities = [OrgProduct];
const BsEntities = [BsDefect, BsDefectProject];

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([...CoreEntities, ...CommonEntities, ...OrgEntities, ...BsEntities]),
  ],
  providers: [...Services],
  exports: [...Services],
})
export class DatabaseModule {}
