import { Injectable } from '@nestjs/common';

import { CommonRepository } from '@db/repository';
import { LogicDeleteEnum } from '@share/enmu/logicDelete.enum';
import { GroupPo } from '@db/structure/common';

@Injectable()
export class GroupDao {
  constructor(public commonRepository: CommonRepository) {}

  // 通过uuid查询分组列表
  async findByOwnerUUID(owner_uuid: string): Promise<GroupPo[]> {
    return this.commonRepository.group.find({
      where: { owner_uuid, logic_delete: LogicDeleteEnum.normal },
    });
  }

  // 删除分组
  delete(id: number) {
    return this.commonRepository.group.save({
      id,
      logic_delete: LogicDeleteEnum.deleted,
    });
  }
}
