import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CoreDaoServcie } from 'packages/dao/service';
import { OrganizationPo, OrganizationUserStatus, UserPo } from 'packages/database/po/core';
import { ProductPo } from 'packages/database/po/core/product.po';
import { CommonOrganizationDto } from 'src/share/dto/api.common.dto';
import { JwtAuthGuard } from 'src/share/guide';
import { BaseException } from 'src/share/httpException';
import { baseExceptionCheck } from 'src/share/util/exception.util';
import {
  OrganizationCreateDto,
  OrganizationInviteDto,
  OrganizationDimissionDto,
} from './organization.dto';

@ApiTags('CoreOrganization')
@UseGuards(JwtAuthGuard)
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

  // 编辑组织信息
  @Post('info/edit')
  async infoEdit(@Body() dto: Partial<OrganizationPo>): Promise<string> {
    const organization = await this.coreDaoServcie.findOrganizationById(dto.id);

    if (!organization) throw new BaseException('该组织不存在');

    await this.coreDaoServcie.repository.organization.save({
      ...organization,
      ...dto,
    });

    return '编辑成功';
  }

  // 邀请成员
  @Post('member/invite')
  @ApiBody({ type: OrganizationInviteDto })
  async memberInvite(@Body() dto: OrganizationInviteDto): Promise<string> {
    const { organization_id, user_id } = dto;

    // 判断成员是否在职或审核中
    const organizationUser = await this.coreDaoServcie.findOrganizationUser(
      organization_id,
      user_id,
      [OrganizationUserStatus.invite, OrganizationUserStatus.onJob],
    );

    if (organizationUser.status === OrganizationUserStatus.invite) return '已发出邀请';
    if (organizationUser.status === OrganizationUserStatus.onJob) return '该成员已入职';

    this.coreDaoServcie.repository.organizationUser.save({
      organization_id,
      user_id,
      status: OrganizationUserStatus.invite,
    });

    return '邀请成功';
  }

  // 成员离职
  @Post('member/dimission')
  @ApiBody({ type: OrganizationDimissionDto })
  async memberDimission(@Body() dto: OrganizationDimissionDto): Promise<string> {
    const { organization_id, user_id } = dto;

    const organizationUser = await this.coreDaoServcie.findOrganizationUser(
      organization_id,
      user_id,
    );

    if (!organizationUser) throw new BaseException('该用户不存在');

    await this.coreDaoServcie.repository.organizationUser.save({
      ...organizationUser,
      status: OrganizationUserStatus.dimission,
    });
    return '离职成功';
  }

  // 在职成员列表
  @Post('members/onjob/:organizationId')
  async members(@Param('organizationId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findOrganizationUsers(id);
  }

  // 离职成员列表
  @Post('members/dimissioned/:organizationId')
  async membersDimissioned(@Param('organizationId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findOrganizationUsers(id, [OrganizationUserStatus.dimission]);
  }

  // 已邀请入职成员列表
  @Post('members/invited/:organizationId')
  async membersInvited(@Param('organizationId') id: number): Promise<UserPo[]> {
    return await this.coreDaoServcie.findOrganizationUsers(id, [OrganizationUserStatus.invite]);
  }

  // 产品列表
  @Post('products')
  @ApiBody({ type: CommonOrganizationDto })
  async products(@Body() dto: CommonOrganizationDto): Promise<ProductPo[]> {
    return await this.coreDaoServcie.findOrganizationProducts(dto.organization_id);
  }

  // 添加产品
  @Post('product/add')
  async productAdd(@Body() dto: Partial<ProductPo>): Promise<string> {
    await this.coreDaoServcie.repository.product.save(dto);
    return '添加成功';
  }

  // 编辑产品
  @Post('product/edit')
  async productEdit(@Body() dto: Partial<ProductPo> & CommonOrganizationDto): Promise<string> {
    const { id, organization_id } = dto;

    const product = await this.coreDaoServcie.findOrganizationProduct(id, organization_id);
    baseExceptionCheck(!product, '该产品不存在');

    await this.coreDaoServcie.repository.product.save(dto);

    return '添加成功';
  }

  // 产品详情
  // @Post('product/detail')
  // @ApiBody({ type: CommonOrganizationDto })
  // async productDetail(@Body() dto: CommonOrganizationDto): Promise<ProductPo> {
  //   const product = this.coreDaoServcie.findOrganizationProduct(id, organization_id);

  //   if (!product) throw new BaseException('该产品不存在');
  // }

  // 移除产品
  @Post('product/remove')
  @ApiBody({ type: CommonOrganizationDto })
  async productRemove(@Body() dto: CommonOrganizationDto): Promise<ProductPo[]> {
    return await this.coreDaoServcie.findOrganizationProducts(dto.organization_id);
  }
}
