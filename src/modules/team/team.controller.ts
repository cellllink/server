import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { TeamService } from './team.service';

@ApiTags('api/team')
@Controller('api/team')
export class TeamController {
  // constructor(private teamService: TeamService) {
  //   // 用户状态 同组织
  //   // 99 删除
  //   // x 待审核
  // }

  // 创建团队
  @Post('create')
  async create() {
    // TODO
  }

  // 团队信息
  @Post('info')
  async info() {
    // TODO
  }

  // 编辑团队信息
  @Post('info/edit')
  async edit() {
    // TODO
  }

  // 团队成员列表
  @Post('members')
  async members() {
    // TODO
  }

  // 添加成员
  @Post('addMember')
  async addMember() {
    // TODO
  }

  // 移除成员
  @Post('removeMember')
  async removeMember() {
    // TODO
  }
}
