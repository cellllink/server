import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CoUser, CoOrganization, CoOrganizationUser, CoTeam, CoTeamUser } from '../structure/core';
import { ComGroup, ComTag } from '../structure/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestDocument } from '@database/structure/test.structure';

@Injectable()
export class CoreRepository {
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
export class CommonRepository {
  constructor(
    // @InjectModel('TestSchema')
    // public readonly test: Model<TestDocument>,

    @InjectRepository(ComGroup)
    public readonly group: Repository<ComGroup>,

    @InjectRepository(ComTag)
    public readonly tag: Repository<ComTag>,
  ) {}
}

@Injectable()
export class BusinessRepository {
  constructor() {}

  // @InjectRepository(BsTodoGroup)
  // public readonly todoGroup: Repository<BsTodoGroup>,

  // @InjectRepository(BsTodoItem)
  // public readonly todoItem: Repository<BsTodoItem>,

  // @InjectRepository(BsTodoStep)
  // public readonly todoStep: Repository<BsTodoStep>,
}
