import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { GroupDao } from '@db/dao/common';
import { GroupPo } from '@db/structure/common';
import { getBlurMiddleNum } from '@share/util/tool.util';

import { ListDto, AddDto, CopyDto, RemoveDto, MoveDto } from './dtovo/group.dtovo';

@ApiTags('Group')
@Controller('/group')
export class GroupController {
  constructor(private groupDao: GroupDao) {}

  @Post('/list')
  @ApiBody({ description: '' })
  async list(@Body() { owner_uuid }: ListDto): Promise<GroupPo[]> {
    return await this.groupDao.findByOwnerUUID(owner_uuid);
  }

  @Post('/create')
  @ApiBody({ description: '' })
  async create(@Body() dto: AddDto): Promise<void> {
    await this.groupDao.commonRepository.group.save(dto);
  }

  @Post('/copy')
  @ApiBody({ description: '' })
  async copy(@Body() dto: CopyDto): Promise<void> {
    const list = await this.groupDao.findByOwnerUUID(dto.owner_uuid);
    const currentIndex = list.findIndex(i => i.id === dto.id);
    const currentGroup = list[currentIndex];

    await this.groupDao.commonRepository.group.save({
      owner_uuid: currentGroup.owner_uuid,
      name: currentGroup.name + '(副本)',
      desc: currentGroup.desc,
      sore_order: getBlurMiddleNum(list[currentIndex + 1]?.sore_order, list[currentIndex].sore_order),
    });
  }

  @Post('/move')
  @ApiBody({ description: '' })
  async move(@Body() dto: MoveDto): Promise<void> {
    const currentGroup = await this.groupDao.findOneById(dto.owner_uuid, dto.id);
    currentGroup.sore_order = getBlurMiddleNum(dto.start, dto.end);
    await this.groupDao.commonRepository.group.save(currentGroup);

    // ---
    // const list = await this.groupDao.findByOwnerUUID(dto.owner_uuid);
    // const filterCurrentList = list.filter(i => i.id !== dto.currentId);

    // const targetGroup = filterCurrentList.find(i => i.id === dto.targetId);
    // const targetGroupIndex = filterCurrentList.findIndex(i => i.id === dto.targetId);

    // let newSoreOrder: number = null;
    // if (targetGroupIndex === 0) {
    //   newSoreOrder = getBlurMiddleNum(1, targetGroup.sore_order);
    // } else {
    //   const prevGroup = filterCurrentList[targetGroupIndex - 1];
    //   newSoreOrder = getBlurMiddleNum(prevGroup.sore_order, targetGroup.sore_order);
    // }

    // const currentGroup = list.find(i => i.id === dto.currentId);
    // await this.groupDao.commonRepository.group.save(Object.assign(currentGroup, { sore_order: newSoreOrder }));
  }

  @Post('/remove')
  @ApiBody({ description: '' })
  async remove(@Body() dto: RemoveDto): Promise<void> {
    await this.groupDao.delete(dto.id);
  }
}
