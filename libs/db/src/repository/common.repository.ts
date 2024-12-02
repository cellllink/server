import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ComGroup, ComTag } from '@db/structure/common';

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
