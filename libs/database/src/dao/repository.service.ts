import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  CoUser,
  CoOrganization,
  CoOrganizationUser,
  CoTeam,
  CoTeamUser,
  ComGroup,
} from '../structure';

@Injectable()
export class CoreRepositoryService {
  constructor(
    @InjectRepository(CoUser)
    public readonly user: Repository<CoUser>,

    @InjectRepository(CoOrganization)
    public readonly organization: Repository<CoOrganization>,

    @InjectRepository(CoOrganizationUser)
    public readonly organizationUser: Repository<CoOrganizationUser>,

    @InjectRepository(CoTeam)
    public readonly team: Repository<CoTeam>,

    @InjectRepository(CoTeamUser)
    public readonly teamUser: Repository<CoTeamUser>,
  ) {}
}

@Injectable()
export class CommonRepositoryService {
  constructor() // @InjectRepository(ComGroup)
  // public readonly group: Repository<ComGroup>,
  {}
}

@Injectable()
export class BusinessRepositoryService {
  constructor() {}
}
