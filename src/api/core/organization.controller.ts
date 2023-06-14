import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { OrganizationPo, UserPo } from 'packages/database/po/core';
import { BaseException } from 'src/share/httpException';
import { OrganizationCreateDto, OrganizationEditDto } from './organization.dto';

@ApiTags('CoreOrganization')
@Controller('/api/core/organization')
export class OrganizationController {
  constructor(private coreDaoServcie: CoreDaoServcie) {}

  // 创建
  @Post('create')
  @ApiBody({ type: OrganizationCreateDto })
  async register(@Body() dto: OrganizationCreateDto): Promise<string> {
    const { name, user_id } = dto;

    const organization = await this.coreDaoServcie.repository.organization.save({
      name,
      owner_id: user_id,
    });
    await this.coreDaoServcie.repository.organizationUser.save({
      organization_id: organization.id,
      user_id,
      join_time: new Date(),
      status: 2,
    });

    return '创建成功';
  }

  // 组织信息
  @Post('info/:organizationId')
  async info(@Param('organizationId') id: number): Promise<OrganizationPo> {
    const organization = await this.coreDaoServcie.findOrganizationById(id);

    if (!organization) throw new BaseException('该组织不存在');

    return organization;
  }

  @Post('info/edit')
  @ApiBody({ type: OrganizationCreateDto })
  async infoEdit(@Body() dto: OrganizationEditDto): Promise<string> {
    // TODO
    return '编辑成功';
  }

  // 邀请成员
  @Post('member/invite')
  @ApiBody({ type: OrganizationCreateDto })
  async memberInvite(@Body() dto: OrganizationEditDto): Promise<string> {
    // TODO
    return '编辑成功';
  }

  // 移除成员
  @Post('member/remove')
  @ApiBody({ type: OrganizationCreateDto })
  async memberRemove(@Body() dto: OrganizationEditDto): Promise<string> {
    // TODO
    return '编辑成功';
  }

  // 成员列表
  @Post('members/:organizationId')
  async members(@Param('organizationId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findOrganizationUsers(id);
  }
}
