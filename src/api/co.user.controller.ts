import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  CoUserPo,
  CoOrganizationPo,
  CoTeamPo,
  CoOrganizationUserStatusEnum,
} from '@database/structure';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';

@ApiTags('ApiCoUser')
@Controller('/api/co/user')
export class CoUserController {
  constructor() {}

  @Post('info')
  @ApiBody({ type: CommonUserDto })
  async info(@Body() dto: CommonUserDto): Promise<CoUserPo> {
    return;
  }
}
