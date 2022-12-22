import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import {
//   OrganizationCreateDto,
//   OrganizationInfoDto,
//   OrganizationInfoEditDto,
//   OrganizationAddOrRemoveMemberDto,
// } from './organization.dto';
// import { OrganizationService } from './organization.service';

@ApiTags('api/organization')
@Controller('api/organization')
export class OrganizationController {
  // constructor(private organizationService: OrganizationService) {}
  // // 创建组织
  // @Post('create')
  // async create(@Body() organizationCreateDto: OrganizationCreateDto) {
  //   return this.organizationService.create(organizationCreateDto);
  // }
  // // 组织信息
  // @Post('info')
  // async info(@Body() organizationInfoDto: OrganizationInfoDto) {
  //   return await this.organizationService.info(organizationInfoDto.organization_id);
  // }
  // // 组织信息编辑
  // @Post('info/edit')
  // async infoEdit(@Body() organizationInfoEditDto: OrganizationInfoEditDto) {
  //   return await this.organizationService.infoEdit(organizationInfoEditDto);
  // }
  // // 添加成员
  // @Post('addMember')
  // async addMember(@Body() organizationAddOrRemoveMemberDto: OrganizationAddOrRemoveMemberDto) {
  //   return await this.organizationService.addMember(organizationAddOrRemoveMemberDto);
  // }
  // // 移除成员
  // @Post('removeMember')
  // async removeMember(@Body() organizationAddOrRemoveMemberDto: OrganizationAddOrRemoveMemberDto) {
  //   return await this.organizationService.removeMember(organizationAddOrRemoveMemberDto);
  // }
}
