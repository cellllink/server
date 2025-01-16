import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { GroupDao } from '@db/dao/common';
import { GroupPo } from '@db/structure/common';

import { AddDto, ListDto, RemoveDto } from './dtovo/group.dtovo';

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

  @Post('/remove')
  @ApiBody({ description: '' })
  async remove(@Body() dto: RemoveDto): Promise<void> {
    await this.groupDao.delete(dto.id);
  }
}
