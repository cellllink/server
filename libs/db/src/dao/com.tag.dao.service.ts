import { Injectable } from '@nestjs/common';
import { CommonRepository } from './repository';
import { PComGroupPo, PComGroupPos } from '@database/structure/common/comGroup.structure';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { PVoid } from 'src/share/type/common.type';

interface ComTagDaoServiceImpl {}

@Injectable()
export class CommonTagDaoServcie implements ComTagDaoServiceImpl {
  constructor(public repository: CommonRepository) {}
}
