import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  CoUserPo,
  CoOrganizationPo,
  CoTeamPo,
  CoOrganizationUserStatusEnum,
  PCoUserPo,
} from '@database/structure';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { CoUserDaoService } from '@database/dao';

@ApiTags('ApiCoUser')
@Controller('/api/co/user')
export class CoUserController {
  constructor(private coUserDaoService: CoUserDaoService) {}

  @Post('info')
  @ApiBody({ type: CommonUserDto })
  async info(@Body() { user_id }: CommonUserDto): PCoUserPo {
    return this.coUserDaoService.findUserById(user_id);
  }

  @Post('info/edit')
  async infoEdit() {}
}
