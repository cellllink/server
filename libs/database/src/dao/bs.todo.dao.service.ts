import { Injectable } from '@nestjs/common';
import { BsTodoGroup, BsTodoGroupPo, PBsTodoGroupPos } from '@database/structure/bsTodo.structure';
import { BusinessRepositoryService } from './repository.service';
import { LogicDeleteStatusEnum } from '@database/share/enum/common.enum';
import { In } from 'typeorm';

export interface BsTodoDaoServiceImpl {
  // 查询todo集合&列表
  findGroupsBySceneUUID(uuid: string): PBsTodoGroupPos;

  // 查询
}

@Injectable()
export class BsTodoDaoService implements BsTodoDaoServiceImpl {
  constructor(private business: BusinessRepositoryService) {}

  async saveGroup(group: Partial<BsTodoGroup>) {
    return await this.business.todoGroup.save(group);
  }

  async deleteGroup(id: number) {
    await this.business.todoGroup.save({
      id,
      logic_delete: LogicDeleteStatusEnum.deleted,
    });
  }

  findGroupsBySceneUUID(scene_uuid: string): PBsTodoGroupPos {
    return this.business.todoGroup.find({
      where: {
        scene_uuid,
        logic_delete: LogicDeleteStatusEnum.normal,
      },
    });
  }

  async findGroupsAboutMove(target_id: number, move_id: number): PBsTodoGroupPos {
    return await this.business.todoGroup.find({
      where: [
        {
          id: In([target_id, move_id]),
        },
        {
          order_prev_id: In([target_id, move_id]),
        },
      ],
    });
  }
}
