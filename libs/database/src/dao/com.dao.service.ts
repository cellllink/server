import { Injectable } from '@nestjs/common';
import { CommonRepositoryService } from './repository.service';
import { PComGroupPo, PComGroupPos } from '@database/structure/common/comGroup.structure';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import { PVoid } from 'src/share/type/common.type';

export interface ComGroupDaoServiceImpl {}

export interface ComTagDaoServiceImpl {}

@Injectable()
export class CommonGroupDaoServcie implements ComGroupDaoServiceImpl {
  constructor(public repository: CommonRepositoryService) {}

  async find(belong_uuid: string): PComGroupPos {
    return this.repository.group.find({
      where: {
        belong_uuid,
        logic_delete: 0,
      },
    });
  }

  async findOne(belong_uuid: string, id: number): PComGroupPo {
    const group = await this.repository.group.findOne({
      where: {
        belong_uuid,
        logic_delete: 0,
      },
    });

    baseExceptionCheck(!!group, `该id为${id}的数据不存在`);
    baseExceptionCheck(group.belong_uuid !== belong_uuid, `该id为${id}的数据不属于${belong_uuid}`);

    return group;
  }

  async remove(belong_uuid: string, id: number): PVoid {
    const group = await this.findOne(belong_uuid, id);
    // this.repository.group.update({ ...group, logic_delete: 1 });
  }
}

@Injectable()
export class CommonTagDaoServcie implements ComTagDaoServiceImpl {
  constructor(public repository: CommonRepositoryService) {}
}
