import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { OrganizationPo, OrganizationUserStatus, TeamPo, UserPo } from 'packages/database/po/core';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { ControllerRouterConfig } from 'src/share/util/controllerConfig.util';
import { UserService } from './user.service';

const UserKeys = ['api', 'co', 'user'];
const UserConfig = new ControllerRouterConfig(UserKeys);
const UserOrganizationConfig = new ControllerRouterConfig([...UserKeys, 'organization']);
const UserTeamConfig = new ControllerRouterConfig([...UserKeys, 'team']);

@ApiTags(UserConfig.tag)
@UseGuards(JwtAuthGuard)
@Controller(UserConfig.controller)
export class CoUserController {
  constructor(private coreDaoServcie: CoreDaoServcie, private userService: UserService) {}

  @Post('info')
  @ApiBody({ type: CommonUserDto })
  async info(@Body() dto: CommonUserDto): Promise<UserPo> {}
}

@ApiTags(UserOrganizationConfig.tag)
@UseGuards(JwtAuthGuard)
@Controller(UserOrganizationConfig.controller)
export class CoUserOrganizationController {
  constructor(private coreDaoServcie: CoreDaoServcie, private userService: UserService) {}
}

@ApiTags(UserTeamConfig.tag)
@UseGuards(JwtAuthGuard)
@Controller(UserTeamConfig.controller)
export class CoUserTeamController {
  constructor(private coreDaoServcie: CoreDaoServcie, private userService: UserService) {}
}
