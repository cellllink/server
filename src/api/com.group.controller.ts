import { CommonGroupDaoServcie } from '@database/dao';
import { PComGroupPos } from '@database/structure/common/comGroup.structure';
import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { PVoid } from 'src/share/type/common.type';

@ApiTags('ApiCom')
@Controller('/api/com/group')
export class ComGroupController {
  constructor(private commonGroupDaoServcie: CommonGroupDaoServcie) {}

  @ApiBody({
    description: '',
  })
  @Post('list/:owner_uuid')
  async list(@Param() { owner_uuid }: any): PComGroupPos {
    return this.commonGroupDaoServcie.find(owner_uuid);
  }

  @ApiBody({
    description: '',
  })
  @Post('edit/:owner_uuid')
  async groupDelete(@Param() { owner_uuid }: any, @Body() { id }: any): PVoid {
    this.commonGroupDaoServcie.findOne(owner_uuid, id);
  }
}
