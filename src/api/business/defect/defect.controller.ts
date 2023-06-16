import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseException } from 'src/share/httpException';

@ApiTags('BusinessDefect')
@Controller('/api/business/defect')
export class DefectController {
  constructor() {}

  // 看一下save 方法 是不是不需要传递 所有的东西

  // 缺陷列表 - 支持各种筛选
  @Post('list')
  // @ApiBody({ type: OrganizationCreateDto })
  async list(@Body() dto: any): Promise<string> {
    return '';
  }

  // 缺陷创建
  @Post('create')
  // @ApiBody({ type: OrganizationCreateDto })
  async create(@Body() dto: any): Promise<string> {
    return '';
  }

  // 缺陷编辑
  @Post('edit')
  // @ApiBody({ type: OrganizationCreateDto })
  async edit(@Body() dto: any): Promise<string> {
    return '';
  }

  // 缺陷详情
  @Post('detail/:defectId')
  // @ApiBody({ type: OrganizationCreateDto })
  async detail(@Body() dto: any): Promise<string> {
    return '';
  }

  // 内容详情
  @Post('detail/content/:defectContentId')
  // @ApiBody({ type: OrganizationCreateDto })
  async defectContentDetail(@Body() dto: any): Promise<string> {
    return '';
  }
}
