import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { OrganizationPo, OrganizationUserStatus, TeamPo, UserPo } from 'packages/database/po/core';
import { BaseException } from 'src/share/httpException';
import { OrganizationInviteDto } from './user.dto';
import { UserService } from './user.service';

@ApiTags('CoreUser')
@Controller('/api/core/user')
export class UserController {
  constructor(private coreDaoServcie: CoreDaoServcie, private userService: UserService) {}

  /**
   * 用户信息
   * @param id
   * @returns
   */
  @Post('info/:userId')
  async info(@Param('userId') id: number): Promise<UserPo> {
    const user = await this.coreDaoServcie.findUserById(id);

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
  @ApiBody({ type: OrganizationInviteDto })
  async organizationInvitePass(@Body() dto: OrganizationInviteDto): Promise<string> {
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
  async organizationInviteRefuse(@Body() dto: OrganizationInviteDto): Promise<string> {
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
  @Post('organizations/:userId')
  async organizations(@Param('userId') id: number): Promise<OrganizationPo[]> {
    return await this.coreDaoServcie.findUserOrganizations(id);
  }

  /**
   * 用户的团队列表
   * @param id
   * @returns
   */
  @Post('teams/:userId')
  async teams(@Param('userId') id: number): Promise<TeamPo[]> {
    return await this.coreDaoServcie.findUserTeams(id);
  }
}
