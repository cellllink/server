import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('api.bs.todo.group')
@Controller('/api/bs/todo/group')
export class BsTodoGroupController {
  constructor() {}

  @ApiBody({
    description: '分组&列表 添加',
  })
  @Post('group/add')
  async groupAdd() {}

  @ApiBody({
    description: '分组&列表 编辑',
  })
  @Post('group/edit')
  async groupEdit() {}

  @ApiBody({
    description: '分组&列表 删除',
  })
  @Post('group/delete')
  async groupDelete() {}
}

@ApiTags('api.bs.todo.item')
@Controller('/api/bs/todo/item')
export class BsTodoItemController {
  constructor() {}

  @ApiBody({
    description: '代办 添加',
  })
  @Post('add')
  async add() {}

  @ApiBody({
    description: '代办 编辑',
  })
  @Post('edit')
  async edit() {}

  @ApiBody({
    description: '代办备注 编辑',
  })
  @Post('edit/notice')
  async editNotice() {}

  @ApiBody({
    description: '代办 删除',
  })
  @Post('delete')
  async delete() {}

  @ApiBody({
    description: '代办 详情',
  })
  @Post('detail')
  async detail() {}

  @ApiBody({
    description: '代办列表 分组',
  })
  @Post('list/group')
  async listGroup() {}

  @ApiBody({
    description: '代办列表 今天',
  })
  @Post('list/today')
  async listToday() {}

  @ApiBody({
    description: '代办列表 搜索',
  })
  @Post('list/search')
  async listSearch() {}

  @ApiBody({
    description: '代办列表 重要',
  })
  @Post('list/important')
  async listImportant() {}
}

@ApiTags('api.bs.todo.step')
@Controller('/api/bs/todo/step')
export class BsTodoStepController {
  constructor() {}

  @ApiBody({
    description: '步骤 添加',
  })
  @Post('add')
  async add() {}

  @ApiBody({
    description: '步骤 编辑',
  })
  @Post('edit')
  async edit() {}

  @ApiBody({
    description: '步骤 删除',
  })
  @Post('delete')
  async delete() {}

  @ApiBody({
    description: '步骤 列表',
  })
  @Post('list')
  async list() {}

  @ApiBody({
    description: '步骤 完成',
  })
  @Post('finished')
  async finished() {}

  @ApiBody({
    description: '步骤 未完成',
  })
  @Post('unfinished')
  async unfinished() {}
}

export const BsTodoControllers = [
  BsTodoGroupController,
  BsTodoItemController,
  BsTodoStepController,
];