import { Injectable } from '@nestjs/common';
import { CommonRepository } from './repository';
import { PComGroupPo, PComGroupPos } from '@db/structure/common/comGroup.structure';
import { baseExceptionCheck } from '@share/util/exception.util';
// import { PVoid } from '@share/type/common.type';

interface ComTagDaoServiceImpl {}

@Injectable()
export class CommonTagDaoServcie implements ComTagDaoServiceImpl {
  constructor(public repository: CommonRepository) {}
}
