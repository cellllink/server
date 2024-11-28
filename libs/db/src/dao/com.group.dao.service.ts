import { Injectable } from '@nestjs/common';
import { CommonRepository } from './repository';
import { PComGroupPo, PComGroupPos } from '@db/structure/common';
import { baseExceptionCheck } from '@share/util/exception.util';
import { PVoid } from '@share/type/common.type';

interface ComGroupDaoServiceImpl {}

@Injectable()
export class CommonGroupDaoServcie implements ComGroupDaoServiceImpl {
  constructor(public commonRepository: CommonRepository) {}

  async find(owner_uuid: string): PComGroupPos {
    return this.commonRepository.group.find({
      where: {
        owner_uuid,
        logic_delete: 0,
      },
    });
  }

  async findOne(owner_uuid: string, id: number): PComGroupPo {
    const group = await this.commonRepository.group.findOne({
      where: {
        owner_uuid,
        logic_delete: 0,
      },
    });

    baseExceptionCheck(!!group, `该id为${id}的数据不存在`);
    baseExceptionCheck(group.owner_uuid !== owner_uuid, `该id为${id}的数据不属于${owner_uuid}`);

    return group;
  }

  async remove(owner_uuid: string, id: number): PVoid {
    const group = await this.findOne(owner_uuid, id);
    // this.repository.group.update({ ...group, logic_delete: 1 });
  }
}
