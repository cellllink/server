import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  Group,
  Organization,
  OrganizationUser,
  Product,
  Team,
  TeamUser,
  User,
} from '../entity/core';

@Injectable()
export class CoreRepositoryService {
  constructor(
    @InjectRepository(Group)
    public readonly group: Repository<Group>,

    @InjectRepository(Organization)
    public readonly organization: Repository<Organization>,

    @InjectRepository(OrganizationUser)
    public readonly organizationUser: Repository<OrganizationUser>,

    @InjectRepository(Product)
    public readonly product: Repository<Product>,

    @InjectRepository(Team)
    public readonly team: Repository<Team>,

    @InjectRepository(TeamUser)
    public readonly teamUser: Repository<TeamUser>,

    @InjectRepository(User)
    public readonly user: Repository<User>,
  ) {}
}
