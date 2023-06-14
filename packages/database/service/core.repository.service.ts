import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Organization, OrganizationUser, Team, TeamUser, User } from '../entity/core';

@Injectable()
export class CoreRepositoryService {
  constructor(
    @InjectRepository(Organization)
    public readonly organization: Repository<Organization>,

    @InjectRepository(OrganizationUser)
    public readonly organizationUser: Repository<OrganizationUser>,

    @InjectRepository(Team)
    public readonly team: Repository<Team>,

    @InjectRepository(TeamUser)
    public readonly teamUser: Repository<TeamUser>,

    @InjectRepository(User)
    public readonly user: Repository<User>,
  ) {}
}
