import { Injectable } from '@nestjs/common';
import {
  BsTodoGroup,
  BsTodoGroupPo,
  PBsTodoGroupPo,
  PBsTodoGroupPos,
} from '@database/structure/bsTodo.structure';
import { BusinessRepositoryService } from './repository.service';
import { LogicDeleteStatusEnum } from '@database/share/enum/common.enum';
import { FindOptionsWhere, In } from 'typeorm';
import { baseExceptionCheck } from 'src/share/util/exception.util';

export interface BsTodoDaoServiceImpl {
  // 查询todo集合&列表
  findGroupsBySceneUUID(uuid: string): PBsTodoGroupPos;

  // 查询
}

@Injectable()
export class BsTodoDaoService implements BsTodoDaoServiceImpl {
  constructor(private business: BusinessRepositoryService) {}

  async findOne(options: FindOptionsWhere<BsTodoGroup>): PBsTodoGroupPo {
    return await this.business.todoGroup.findOne({
      where: {
        ...options,
        logic_delete: LogicDeleteStatusEnum.normal,
      },
    });
  }

  async saveGroup(group: Partial<BsTodoGroup>) {
    return await this.business.todoGroup.save(group);
  }

  async deleteGroup(id: number) {
    const group = await this.findOne({ id });
    baseExceptionCheck(!group, `该id为${id}的数据不存在`);

    // 将当前设置删除
    await this.saveGroup({
      id,
      logic_delete: LogicDeleteStatusEnum.deleted,
    });
    // 将下一条的数据的 order_prev_id 设置为 待删除的 order_prev_id，如果不存在就是第一条了
    const nextGroup = await this.findOne({ order_prev_id: id });
    if (nextGroup) {
      await this.saveGroup({
        id: nextGroup.id,
        order_prev_id: group.order_prev_id,
      });
    }
  }

  async findGroupsBySceneUUID(scene_uuid: string): PBsTodoGroupPos {
    return await this.business.todoGroup.find({
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
