import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GroupEntity } from '@db/structure/common';

@Injectable()
export class CommonRepository {
  constructor(
    // @InjectModel('TestSchema')
    // public readonly test: Model<TestDocument>,

    @InjectRepository(GroupEntity)
    public readonly group: Repository<GroupEntity>,
    // @InjectRepository(ComTag)
    // public readonly tag: Repository<ComTag>,
  ) {}
}
