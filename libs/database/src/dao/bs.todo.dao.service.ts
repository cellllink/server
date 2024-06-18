import { Injectable } from '@nestjs/common';
import { BsTodoGroup, BsTodoGroupPo, PBsTodoGroupPo, PBsTodoGroupPos } from '@database/structure/bsTodo.structure';
import { BusinessRepository } from './repository';
import { FindOptionsWhere, In } from 'typeorm';
import { baseExceptionCheck } from 'src/share/util/exception.util';

interface BsTodoDaoServiceImpl {
  // // 查询todo集合&列表
  // findGroupsBySceneUUID(uuid: string): PBsTodoGroupPos;
  // // 查询
}

@Injectable()
export class BsTodoDaoService implements BsTodoDaoServiceImpl {
  constructor(private businessRepository: BusinessRepository) {}

  // async findOne(options: FindOptionsWhere<BsTodoGroup>): PBsTodoGroupPo {
  //   return await this.businessRepository.todoGroup.findOne({
  //     where: {
  //       ...options,
  //       logic_delete: 0,
  //     },
  //   });
  // }

  // async saveGroup(group: Partial<BsTodoGroup>) {
  //   return await this.businessRepository.todoGroup.save(group);
  // }

  // async deleteGroup(id: number) {
  //   const group = await this.findOne({ id });
  //   baseExceptionCheck(!!group, `该id为${id}的数据不存在`);

  //   // 将当前设置删除
  //   await this.saveGroup({
  //     id,
  //     logic_delete: 0,
  //   });
  //   // 将下一条的数据的 order_prev_id 设置为 待删除的 order_prev_id，如果不存在就是第一条了
  //   const nextGroup = await this.findOne({ order_prev_id: id });
  //   if (nextGroup) {
  //     await this.saveGroup({
  //       id: nextGroup.id,
  //       order_prev_id: group.order_prev_id,
  //     });
  //   }
  // }

  // async findGroupsBySceneUUID(scene_uuid: string): PBsTodoGroupPos {
  //   return await this.businessRepository.todoGroup.find({
  //     where: {
  //       scene_uuid,
  //       logic_delete: 0,
  //     },
  //   });
  // }

  // async findGroupsAboutMove(target_id: number, move_id: number): PBsTodoGroupPos {
  //   return await this.businessRepository.todoGroup.find({
  //     where: [
  //       {
  //         id: In([target_id, move_id]),
  //       },
  //       {
  //         order_prev_id: In([target_id, move_id]),
  //       },
  //     ],
  //   });
  // }
}
