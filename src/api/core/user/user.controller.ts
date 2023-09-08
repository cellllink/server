import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from '@database/dao/service';
import { OrganizationPo, OrganizationUserStatus, TeamPo, UserPo } from 'packages/database/po/core';
import { CommonOrganizationDto, CommonUserDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { BaseException } from 'src/share/httpException';
import { UserService } from './user.service';

@ApiTags('CoreUser')
@UseGuards(JwtAuthGuard)
@Controller('/api/core/user')
export class UserController {
  constructor(private coreDaoServcie: CoreDaoServcie, private userService: UserService) {}

  /**
   * 用户信息
   * @param dto
   * @returns
   */
  @Post('info')
  @ApiBody({ type: CommonUserDto })
  async info(@Body() dto: CommonUserDto): Promise<UserPo> {
    const user = await this.coreDaoServcie.findUserById(dto.user_id);

    if (!user) throw new BaseException('该用户不存在');

    return user;
  }

  /**
   * 用户信息编辑
   * @param dto
   * @returns
   */
  @Post('info/edit')
  async infoEdit(@Body() dto: Partial<UserPo>): Promise<string> {
    const user = await this.coreDaoServcie.findUserById(dto.id);

    if (!user) throw new BaseException('该用户不存在');

    await this.coreDaoServcie.repository.user.save({
      ...user,
      ...dto,
    });

    return '编辑成功';
  }

  /**
   * 通过新组织的邀请
   * @param dto
   * @returns
   */
  @Post('organization/invite/pass')
  @ApiBody({ type: CommonOrganizationDto })
  async organizationInvitePass(@Body() dto: CommonOrganizationDto): Promise<string> {
    const { organization_id, user_id } = dto;

    await this.userService.organizationInviteDeal(
      organization_id,
      user_id,
      OrganizationUserStatus.onJob,
    );

    return '已通过';
  }

  /**
   * 拒绝新组织的邀请
   * @param dto
   * @returns
   */
  @Post('organization/invite/refuse')
  @ApiBody({ type: CommonOrganizationDto })
  async organizationInviteRefuse(@Body() dto: CommonOrganizationDto): Promise<string> {
    const { organization_id, user_id } = dto;

    await this.userService.organizationInviteDeal(
      organization_id,
      user_id,
      OrganizationUserStatus.refuse,
    );

    return '已拒绝';
  }

  /**
   * 用户的组织列表
   * @param id
   * @returns
   */
  @Post('organizations')
  async organizations(@Body() dto: CommonOrganizationDto): Promise<OrganizationPo[]> {
    return await this.coreDaoServcie.findUserOrganizations(dto.user_id);
  }

  /**
   * 用户的团队列表
   * @param id
   * @returns
   */
  @Post('teams')
  async teams(@Body() dto: CommonOrganizationDto): Promise<TeamPo[]> {
    return await this.coreDaoServcie.findUserTeams(dto.user_id, dto.organization_id);
  }
}
