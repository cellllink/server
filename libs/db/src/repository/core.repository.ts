import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@db/structure/core/user.structure';

@Injectable()
export class CoreRepository {
  constructor(
    @InjectRepository(UserEntity)
    public readonly user: Repository<UserEntity>,
    // @InjectRepository(CoOrganization)
    // public readonly organization: Repository<CoOrganization>,
    // @InjectRepository(CoOrganizationUser)
    // public readonly organizationUser: Repository<CoOrganizationUser>,
    // @InjectRepository(CoTeam)
    // public readonly team: Repository<CoTeam>,
    // @InjectRepository(CoTeamUser)
    // public readonly teamUser: Repository<CoTeamUser>,
  ) {}
}
