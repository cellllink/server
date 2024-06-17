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
  @Post('list/:belong_uuid')
  async list(@Param() { belong_uuid }: any): PComGroupPos {
    return this.commonGroupDaoServcie.find(belong_uuid);
  }

  @ApiBody({
    description: '',
  })
  @Post('edit/:belong_uuid')
  async groupDelete(@Param() { belong_uuid }: any, @Body() { id }: any): PVoid {
    this.commonGroupDaoServcie.findOne(belong_uuid, id);
  }
}
