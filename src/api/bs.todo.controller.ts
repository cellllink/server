import { BsTodoDaoService } from '@database/dao/bs.todo.dao.service';
import { PBsTodoGroupPos } from '@database/structure';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import {
  GroupAddDto,
  GroupDeleteDto,
  GroupEditDto,
  GroupListDto,
  GroupMoveDto,
} from './dto&vo/bs.todo.dto';

@ApiTags('api.bs.todo.group')
@Controller('/api/bs/todo/group')
export class BsTodoGroupController {
  constructor(private bsTodoDaoService: BsTodoDaoService) {}

  @ApiBody({
    description: '分组&列表 添加',
    type: GroupAddDto,
  })
  @Post('add')
  async groupAdd(@Body() group: GroupAddDto): Promise<void> {
    await this.bsTodoDaoService.saveGroup(group);
  }

  @ApiBody({
    description: '分组&列表 编辑',
    type: GroupEditDto,
  })
  @Post('edit')
  async groupEdit(@Body() group: GroupEditDto): Promise<void> {
    await this.bsTodoDaoService.saveGroup(group);
  }

  @ApiBody({
    description: '分组&列表 删除',
    type: GroupDeleteDto,
  })
  @Post('delete')
  async groupDelete(@Body() { id }: GroupDeleteDto): Promise<void> {
    await this.bsTodoDaoService.deleteGroup(id);
  }

  @ApiBody({
    description: '分组&列表 列表',
    type: GroupListDto,
  })
  @Post('list')
  async list(@Body() { scene_uuid }: GroupListDto): PBsTodoGroupPos {
    return await this.bsTodoDaoService.findGroupsBySceneUUID(scene_uuid);
  }

  @ApiBody({
    description: '分组&列表 移动',
    type: GroupMoveDto,
  })
  @Post('move')
  async move(@Body() { target_id, move_id }: GroupMoveDto): PBsTodoGroupPos {
    return await this.bsTodoDaoService.findGroupsAboutMove(target_id, move_id);
  }
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
